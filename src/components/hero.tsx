import Link from 'next/link';

import { CartButton } from '@/components/cart/cart-button';
import { categories } from '@/data/categories';

export function Hero() {
  const featuredCategories = categories.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 text-white">
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
              Modern Style
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Styl dopasowany do Ciebie, dostarczony prosto do domu.
            </h1>
            <p className="text-lg text-white/80">
              Przeslij swoje inspiracje, a my zaproponujemy zestawy, ktore najlepiej odpowiadaja
              Twojej energii i planom na najblizsze dni.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#oferta"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-accent/90"
              >
                Zobacz kolekcje
              </Link>
              <CartButton />
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white/90 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-white/60">Polecane teraz</p>
            <ul className="mt-6 space-y-4">
              {featuredCategories.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center justify-between rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{category.name}</p>
                    <p className="text-xs text-white/70">{category.description}</p>
                  </div>
                  <Link
                    href={`/kategorie/${category.slug}`}
                    className="text-sm font-semibold text-accent transition hover:text-white"
                  >
                    Sprawdz
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
