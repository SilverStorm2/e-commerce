'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { categories } from '@/data/categories';

import { CartButton } from '@/components/cart/cart-button';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-lg font-semibold text-primary">
          Modern Style
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className={pathname === '/' ? 'text-primary' : undefined}>
            Home
          </Link>
          <Link href="#jak-to-dziala">Jak to dziala</Link>
          <Link href="#kontakt">Kontakt</Link>
          <Link href="/kategorie" className="transition hover:text-primary">
            Oferta
          </Link>
          <Link href="/ulubione">Ulubione</Link>
          <Link href="/admin" className="text-primary">
            Panel
          </Link>
        </nav>

        <div className="hidden md:block">
          <CartButton />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:border-primary hover:text-primary md:hidden"
          aria-label="Otworz menu"
        >
          Menu
        </button>
      </div>
      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="space-y-2 text-sm text-slate-700">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2">
              Home
            </Link>
            <Link
              href="#jak-to-dziala"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-2"
            >
              Jak to dziala
            </Link>
            <Link
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-2"
            >
              Kontakt
            </Link>
            <div className="rounded-xl border border-slate-100">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/kategorie/${category.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-slate-100 px-3 py-2 last:border-b-0"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Link
              href="/ulubione"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-2"
            >
              Ulubione
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-2 text-primary"
            >
              Panel administracyjny
            </Link>
            <div className="pt-3">
              <CartButton />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
