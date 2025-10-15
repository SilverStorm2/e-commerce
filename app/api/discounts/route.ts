import { NextResponse } from 'next/server';

import { readStore, upsertDiscount } from '@/lib/store';
import type { Discount } from '@/data/discounts';

function isDiscount(payload: Partial<Discount>): payload is Discount {
  return (
    typeof payload.code === 'string' &&
    typeof payload.label === 'string' &&
    typeof payload.description === 'string' &&
    (payload.type === 'percentage' || payload.type === 'fixed') &&
    typeof payload.value === 'number' &&
    typeof payload.active === 'boolean' &&
    typeof payload.uses === 'number'
  );
}

export async function GET() {
  const store = await readStore();
  return NextResponse.json(store.discounts);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<Discount>;
    if (!isDiscount(payload)) {
      return NextResponse.json({ message: 'Nieprawidlowa struktura rabatu.' }, { status: 400 });
    }

    const discounts = await upsertDiscount(payload);
    return NextResponse.json(discounts, { status: 201 });
  } catch (error) {
    console.error('Blad przy tworzeniu rabatu', error);
    return NextResponse.json({ message: 'Nie udalo sie zapisac rabatu.' }, { status: 500 });
  }
}
