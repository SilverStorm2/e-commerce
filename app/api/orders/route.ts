import { NextResponse } from 'next/server';

import { createOrder, readStore } from '@/lib/store';

export async function GET() {
  const store = await readStore();
  return NextResponse.json(store.orders);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<{
      customer: string;
      total: number;
      items: number;
      status: 'processing' | 'fulfilled' | 'cancelled';
    }>;

    if (
      !payload.customer ||
      typeof payload.total !== 'number' ||
      typeof payload.items !== 'number'
    ) {
      return NextResponse.json(
        { message: 'Nieprawidlowe dane zamowienia.' },
        { status: 400 }
      );
    }

    const order = await createOrder({
      customer: payload.customer,
      total: payload.total,
      items: payload.items,
      status: payload.status
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Blad tworzenia zamowienia', error);
    return NextResponse.json(
      { message: 'Nie udalo sie utworzyc zamowienia.' },
      { status: 500 }
    );
  }
}
