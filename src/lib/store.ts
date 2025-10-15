import { randomUUID } from 'crypto';
import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

import type { Discount } from '@/data/discounts';
import type { Review } from '@/types/product';

export type Order = {
  id: string;
  customer: string;
  status: 'processing' | 'fulfilled' | 'cancelled';
  total: number;
  createdAt: string;
  items: number;
};

type AnalyticsDataset = {
  name: string;
  value: number;
};

export type Analytics = {
  pageViews: number;
  conversionRate: number;
  avgOrderValue: number;
  bounceRate: number;
  topCategories: AnalyticsDataset[];
  trafficSources: AnalyticsDataset[];
};

type StoreSnapshot = {
  discounts: Discount[];
  orders: Order[];
  analytics: Analytics;
};

const storePath = path.join(process.cwd(), 'data', 'store.json');

async function bootstrapStore(): Promise<StoreSnapshot> {
  const { defaultDiscounts } = await import('@/data/discounts');

  const initialData: StoreSnapshot = {
    discounts: defaultDiscounts,
    orders: [],
    analytics: {
      pageViews: 0,
      conversionRate: 0,
      avgOrderValue: 0,
      bounceRate: 0,
      topCategories: [],
      trafficSources: []
    }
  };

  await writeFile(storePath, JSON.stringify(initialData, null, 2), 'utf8');
  return initialData;
}

export async function readStore(): Promise<StoreSnapshot> {
  if (!existsSync(storePath)) {
    return bootstrapStore();
  }

  const content = await readFile(storePath, 'utf8');
  const sanitized = content.replace(/^\uFEFF/, '');
  return JSON.parse(sanitized) as StoreSnapshot;
}

export async function writeStore(snapshot: StoreSnapshot): Promise<void> {
  await writeFile(storePath, JSON.stringify(snapshot, null, 2), 'utf8');
}

export async function upsertDiscount(discount: Discount): Promise<Discount[]> {
  const store = await readStore();
  const nextDiscounts = store.discounts.filter(({ code }) => code !== discount.code);
  nextDiscounts.push(discount);
  store.discounts = nextDiscounts;
  await writeStore(store);
  return store.discounts;
}

export async function deleteDiscount(code: string): Promise<Discount[]> {
  const store = await readStore();
  store.discounts = store.discounts.filter((item) => item.code !== code);
  await writeStore(store);
  return store.discounts;
}

function recalcAverageOrderValue(orders: Order[]): number {
  if (orders.length === 0) {
    return 0;
  }
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  return Number((totalRevenue / orders.length).toFixed(2));
}

export async function createOrder(entry: {
  customer: string;
  total: number;
  items: number;
  id?: string;
  status?: Order['status'];
  createdAt?: string;
}): Promise<Order> {
  const store = await readStore();

  const now = new Date();
  const order: Order = {
    id:
      entry.id ??
      `ORD-${now.getFullYear()}-${String(store.orders.length + 1).padStart(4, '0')}-${randomUUID().slice(0, 6).toUpperCase()}`,
    customer: entry.customer,
    status: entry.status ?? 'processing',
    total: entry.total,
    items: entry.items,
    createdAt: entry.createdAt ?? now.toISOString().split('T')[0]
  };

  store.orders = [order, ...store.orders];
  store.analytics.avgOrderValue = recalcAverageOrderValue(store.orders);
  await writeStore(store);
  return order;
}

export async function updateOrderStatus(
  id: string,
  status: Order['status']
): Promise<Order | null> {
  const store = await readStore();
  const index = store.orders.findIndex((order) => order.id === id);
  if (index === -1) {
    return null;
  }

  store.orders[index] = { ...store.orders[index], status };
  await writeStore(store);
  return store.orders[index];
}
