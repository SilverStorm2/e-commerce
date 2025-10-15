'use client';

import { useState } from 'react';

import { useCart } from '@/contexts/cart-context';

import { CartModal } from './cart-modal';

export function CartButton() {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Pokaz koszyk"
        onClick={() => setIsOpen(true)}
        className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
      >
        <span>Koszyk</span>
        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-slate-900">
            {totalItems}
          </span>
        )}
      </button>
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
