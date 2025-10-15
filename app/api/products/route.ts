import { NextResponse } from 'next/server';

import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const filtered = category
    ? products.filter((product) => product.category === category)
    : products;

  return NextResponse.json(filtered);
}
