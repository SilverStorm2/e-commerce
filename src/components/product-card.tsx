'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import { ReviewModal } from '@/components/reviews/review-modal';
import { useCart } from '@/contexts/cart-context';
import { useReviews } from '@/contexts/reviews-context';
import type { Product } from '@/types/product';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, favourites, toggleFavourite } = useCart();
  const { reviews } = useReviews(product.id);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const isFavourite = useMemo(
    () => favourites.includes(product.id),
    [favourites, product.id]
  );

  const reviewStats = useMemo(() => {
    if (reviews.length === 0) {
      return {
        average: product.rating,
        count: 0
      };
    }
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return {
      average: Number((total / reviews.length).toFixed(1)),
      count: reviews.length
    };
  }, [product.rating, reviews]);

  return (
    <article className='group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
      <div className='relative h-48 w-full'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition duration-300 group-hover:scale-105' unoptimized
        />
        <button
          type='button'
          aria-label={isFavourite ? 'Usun z ulubionych' : 'Dodaj do ulubionych'}
          className='absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow'
          onClick={() => toggleFavourite(product.id)}
        >
          {isFavourite ? 'Like' : 'Ulubione'}
        </button>
      </div>
      <div className='flex flex-1 flex-col gap-3 p-4'>
        <div>
          <p className='text-xs uppercase tracking-wide text-slate-500'>{product.category}</p>
          <h3 className='text-lg font-semibold text-slate-900'>{product.name}</h3>
          <p className='mt-2 text-sm text-slate-600'>{product.description}</p>
        </div>
        <div className='mt-auto flex items-center justify-between gap-2'>
          <div>
            <p className='font-semibold text-slate-900'>{product.price.toFixed(2)} zl</p>
            <p className='text-xs text-slate-500'>
              Ocena: {reviewStats.average.toFixed(1)} / 5 | {reviewStats.count} opinii
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary/80'
              onClick={() => setIsReviewOpen(true)}
            >
              Opinie
            </button>
            <button
              type='button'
              onClick={() => addToCart(product)}
              className='rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90'
            >
              Dodaj
            </button>
          </div>
        </div>
      </div>
      <ReviewModal product={product} isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
    </article>
  );
}


