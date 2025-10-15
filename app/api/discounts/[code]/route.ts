import { NextResponse } from 'next/server';

import { deleteDiscount, readStore, upsertDiscount } from '@/lib/store';
import type { Discount } from '@/data/discounts';

export async function PATCH(request: Request, { params }: { params: { code: string } }) {
  try {
    const payload = (await request.json()) as Partial<Discount>;
    const store = await readStore();
    const existing = store.discounts.find((discount) => discount.code === params.code);
    if (!existing) {
      return NextResponse.json({ message: 'Kod rabatowy nie istnieje.' }, { status: 404 });
    }

    const updated = await upsertDiscount({ ...existing, ...payload, code: params.code });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Blad aktualizacji rabatu', error);
    return NextResponse.json({ message: 'Nie udalo sie zaktualizowac rabatu.' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { code: string } }) {
  try {
    const discounts = await deleteDiscount(params.code);
    return NextResponse.json(discounts);
  } catch (error) {
    console.error('Blad usuwania rabatu', error);
    return NextResponse.json({ message: 'Nie udalo sie usunac rabatu.' }, { status: 500 });
  }
}
