'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { useReviews } from '@/contexts/reviews-context';
import type { Product } from '@/types/product';

type ReviewModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export function ReviewModal({ product, isOpen, onClose }: ReviewModalProps) {
  const { reviews, addReview } = useReviews(product.id);
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const stats = useMemo(() => {
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

  if (!isOpen || !mounted) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userName.trim() || !comment.trim()) {
      setError('Uzupelnij prosze wszystkie pola.');
      return;
    }

    const numericRating = Number.parseInt(rating, 10);
    if (Number.isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      setError('Podaj ocene w skali 1-5.');
      return;
    }

    addReview({
      userName: userName.trim(),
      rating: numericRating,
      comment: comment.trim()
    });

    setUserName('');
    setRating('5');
    setComment('');
    setError(null);
  };

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4'>
      <div className='flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl'>
        <div className='flex items-start justify-between border-b border-slate-200 p-6'>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Opinie o produkcie</h2>
            <p className='text-sm text-slate-600'>
              {product.name} - Ocena {stats.average.toFixed(1)} / 5 ({stats.count} opinii)
            </p>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900'
            aria-label='Zamknij opinie'
          >
            x
          </button>
        </div>

        <div className='flex flex-col gap-6 p-6 lg:flex-row'>
          <section className='flex-1 space-y-4 overflow-y-auto pr-2 max-h-[55vh] md:max-h-[60vh] lg:max-h-[70vh]'>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <article key={review.id} className='rounded-xl border border-slate-200 p-4'>
                  <div className='flex items-center justify-between text-sm text-slate-500'>
                    <span className='font-semibold text-slate-900'>{review.userName}</span>
                    <span>
                      {review.rating} / 5 - {new Date(review.createdAt).toLocaleDateString('pl-PL')}
                    </span>
                  </div>
                  <p className='mt-2 text-sm text-slate-700'>{review.comment}</p>
                </article>
              ))
            ) : (
              <p className='text-sm text-slate-500'>Brak opinii dla tego produktu. Badz pierwsza osoba, ktora doda recenzje.</p>
            )}
          </section>

          <section className='w-full rounded-xl border border-slate-200 bg-slate-50 p-4 lg:w-80'>
            <h3 className='text-sm font-semibold text-slate-900'>Dodaj opinie</h3>
            <form className='mt-4 space-y-3' onSubmit={handleSubmit}>
              <label className='text-sm font-medium text-slate-600'>
                Imie
                <input
                  type='text'
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  className='mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none'
                  placeholder='Twoje imie'
                />
              </label>
              <label className='text-sm font-medium text-slate-600'>
                Ocena
                <select
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  className='mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none'
                >
                  <option value='5'>5 - swietny</option>
                  <option value='4'>4 - bardzo dobry</option>
                  <option value='3'>3 - dobry</option>
                  <option value='2'>2 - przecietny</option>
                  <option value='1'>1 - ponizej oczekiwan</option>
                </select>
              </label>
              <label className='text-sm font-medium text-slate-600'>
                Komentarz
                <textarea
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  className='mt-1 h-28 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none'
                  placeholder='Podziel sie swoimi wrazeniami'
                />
              </label>

              {error ? <p className='text-xs font-semibold text-red-600'>{error}</p> : null}

              <button
                type='submit'
                className='w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90'
              >
                Dodaj opinie
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>,
    document.body
  );
}
