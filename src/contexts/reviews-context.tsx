'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { products } from '@/data/products';
import type { Review } from '@/types/product';

type ReviewState = Record<string, Review[]>;

type ReviewInput = {
  userName: string;
  rating: number;
  comment: string;
};

type ReviewsContextValue = {
  getReviews: (productId: string) => Review[];
  addReview: (productId: string, input: ReviewInput) => void;
};

const STORAGE_KEY = 'modern-style-reviews';

const ReviewsContext = createContext<ReviewsContextValue | undefined>(undefined);

function buildInitialState(): ReviewState {
  const state: ReviewState = {};
  for (const product of products) {
    if (product.reviews && product.reviews.length > 0) {
      state[product.id] = product.reviews.map((review) => ({ ...review }));
    }
  }
  return state;
}

function readFromStorage(): ReviewState | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as ReviewState;
    return parsed;
  } catch (error) {
    console.warn('Nie udalo sie odczytac opinii z localStorage', error);
    return null;
  }
}

function persistToStorage(state: ReviewState) {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('Nie udalo sie zapisac opinii w localStorage', error);
  }
}

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviewsState, setReviewsState] = useState<ReviewState>(() => {
    const stored = readFromStorage();
    if (stored) {
      return stored;
    }
    return buildInitialState();
  });

  useEffect(() => {
    persistToStorage(reviewsState);
  }, [reviewsState]);

  const getReviews = useCallback(
    (productId: string) => reviewsState[productId] ?? [],
    [reviewsState]
  );

  const addReview = useCallback((productId: string, input: ReviewInput) => {
    const review: Review = {
      id:
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `review-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      userName: input.userName,
      rating: input.rating,
      comment: input.comment,
      createdAt: new Date().toISOString()
    };

    setReviewsState((previous) => {
      const current = previous[productId] ?? [];
      return {
        ...previous,
        [productId]: [review, ...current]
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      getReviews,
      addReview
    }),
    [addReview, getReviews]
  );

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>;
}

export function useReviews(productId: string) {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error('useReviews musi byc uzyte wewnatrz ReviewProvider');
  }

  const reviews = context.getReviews(productId);

  const addReview = useCallback(
    (input: ReviewInput) => {
      context.addReview(productId, input);
    },
    [context, productId]
  );

  return { reviews, addReview };
}



