import Image from 'next/image';
import Link from 'next/link';

import { categories } from '@/data/categories';

export function CategoriesSection() {
  return (
    <section id='oferta' className='bg-slate-100'>
      <div className='mx-auto max-w-6xl px-6 py-20 sm:px-10'>
        <header className='text-center'>
          <p className='text-sm font-semibold uppercase tracking-wide text-primary'>Kategorie</p>
          <h2 className='mt-2 text-3xl font-bold text-slate-900 sm:text-4xl'>
            Stylizacje dopasowane do Twoich planow
          </h2>
          <p className='mt-3 text-base text-slate-600'>
            Wybierz kategorie, aby zobaczyc rekomendacje produktow i gotowe zestawy przygotowane
            przez Modern Style.
          </p>
        </header>
        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {categories.map((category) => (
            <article
              key={category.id}
              className='relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl'
            >
              <div className='flex flex-col gap-4'>
                <div className='h-16 w-16 overflow-hidden rounded-full border border-slate-200'>
                  <Image
                    src={category.heroImage}
                    alt={category.name}
                    width={64}
                    height={64}
                    className='h-full w-full object-cover' unoptimized
                  />
                </div>
                <p className='text-sm font-semibold text-primary'>{category.name}</p>
                <h3 className='text-2xl font-bold text-slate-900'>{category.headline}</h3>
                <p className='text-sm text-slate-600'>{category.description}</p>
                <Link
                  href={`/kategorie/${category.slug}`}
                  className='inline-flex w-fit items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white'
                >
                  {category.ctaLabel}
                  <span aria-hidden='true'>-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



