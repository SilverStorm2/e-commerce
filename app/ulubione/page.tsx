'use client';

import { useMemo } from 'react';

import { ProductGrid } from '@/components/product-grid';
import { useCart } from '@/contexts/cart-context';
import { products } from '@/data/products';

export default function FavouritesPage() {
  const { favourites } = useCart();

  const favouriteProducts = useMemo(
    () => products.filter((product) => favourites.includes(product.id)),
    [favourites]
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <header className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Ulubione</p>
          <h1 className="text-4xl font-bold text-slate-900">Twoje zapisane produkty</h1>
          <p className="text-base text-slate-600">
            Zapisalismy wszystko, co wpadlo Ci w oko. Wroc do stylizacji, porownaj i dodaj do
            koszyka, gdy bedziesz gotowa na zakup.
          </p>
        </header>
        <div className="mt-12">
          {favouriteProducts.length > 0 ? (
            <ProductGrid products={favouriteProducts} />
          ) : (
            <p className="rounded-2xl border border-dashed border-slate-200 p-10 text-center text-sm text-slate-500">
              Nie masz jeszcze ulubionych produktow. Odkryj oferte Modern Style i dodaj pierwsze
              inspiracje.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
