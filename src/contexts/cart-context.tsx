'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';

import type { CartItem, CartState } from '@/types/cart';
import type { Product } from '@/types/product';

type CartContextValue = {
  items: CartItem[];
  favourites: string[];
  total: number;
  totalItems: number;
  appliedDiscount?: string;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavourite: (productId: string) => void;
  clearCart: () => void;
  applyDiscount: (code?: string) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'modern-style-cart';

function readInitialState(): CartState {
  if (typeof window === 'undefined') {
    return { items: [], favourites: [] };
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { items: [], favourites: [] };
    }
    return JSON.parse(stored) as CartState;
  } catch (error) {
    console.warn('Nie udalo sie odczytac danych koszyka:', error);
    return { items: [], favourites: [] };
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(() => readInitialState());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addToCart = useCallback((product: Product) => {
    setState((prev) => {
      const exists = prev.items.find((item) => item.product.id === product.id);
      if (exists) {
        return {
          ...prev,
          items: prev.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
              : item
          )
        };
      }

      const nextItem: CartItem = { product, quantity: 1 };
      return { ...prev, items: [...prev.items, nextItem] };
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.product.id !== productId)
    }));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      items: prev.items
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    }));
  }, []);

  const toggleFavourite = useCallback((productId: string) => {
    setState((prev) => {
      const isFavourite = prev.favourites.includes(productId);
      return {
        ...prev,
        favourites: isFavourite
          ? prev.favourites.filter((id) => id !== productId)
          : [...prev.favourites, productId]
      };
    });
  }, []);

  const clearCart = useCallback(() => {
    setState((prev) => ({ ...prev, items: [] }));
  }, []);

  const applyDiscount = useCallback((code?: string) => {
    setState((prev) => ({ ...prev, appliedDiscount: code }));
  }, []);

  const total = useMemo(
    () => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [state.items]
  );

  const totalItems = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      favourites: state.favourites,
      total,
      totalItems,
      appliedDiscount: state.appliedDiscount,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavourite,
      clearCart,
      applyDiscount
    }),
    [
      state.items,
      state.favourites,
      state.appliedDiscount,
      total,
      totalItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavourite,
      clearCart,
      applyDiscount
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart musi byc uzyte wewnatrz CartProvider');
  }
  return context;
}
