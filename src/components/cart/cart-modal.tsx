'use client';

import { useCart } from '@/contexts/cart-context';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isOpen) {
    return null;
  }

  const hasItems = items.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg">
        <div className="flex items-start justify-between border-b border-slate-200 p-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Twoj koszyk</h2>
            <p className="mt-1 text-sm text-slate-600">
              {hasItems
                ? `Masz ${items.length} ${items.length === 1 ? 'produkt' : 'produkty'} w koszyku.`
                : 'Koszyk jest pusty.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Zamknij koszyk"
          >
            x
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {hasItems ? (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-900">{product.name}</p>
                    <p className="text-sm text-slate-600">{product.description}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {(product.price * quantity).toFixed(2)} zl
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <div className="flex items-center rounded-full border border-slate-200">
                      <button
                        type="button"
                        className="px-3 py-1 text-lg text-slate-600 transition hover:bg-slate-100"
                        aria-label={`Zmniejsz ilosc ${product.name}`}
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-3 text-sm font-semibold text-slate-900">{quantity}</span>
                      <button
                        type="button"
                        className="px-3 py-1 text-lg text-slate-600 transition hover:bg-slate-100"
                        aria-label={`Zwieksz ilosc ${product.name}`}
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-slate-500 transition hover:text-red-500"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Usun
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-sm text-slate-500">Dodaj produkt, aby rozpoczac zakupy.</p>
          )}
        </div>
        <div className="border-t border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center justify-between text-sm font-medium text-slate-900">
            <span>Lacznie</span>
            <span>{total.toFixed(2)} zl</span>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
              disabled={!hasItems}
            >
              Przejdz do platnosci
            </button>
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              onClick={clearCart}
              disabled={!hasItems}
            >
              Wyczysc koszyk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
