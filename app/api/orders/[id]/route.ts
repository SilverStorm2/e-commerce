import { NextResponse } from 'next/server';

import { updateOrderStatus } from '@/lib/store';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = (await request.json()) as { status?: 'processing' | 'fulfilled' | 'cancelled' };

    if (!status) {
      return NextResponse.json({ message: 'Brak statusu zamowienia.' }, { status: 400 });
    }

    const updated = await updateOrderStatus(params.id, status);
    if (!updated) {
      return NextResponse.json({ message: 'Zamowienie nie istnieje.' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Blad aktualizacji zamowienia', error);
    return NextResponse.json({ message: 'Nie udalo sie zaktualizowac zamowienia.' }, { status: 500 });
  }
}
