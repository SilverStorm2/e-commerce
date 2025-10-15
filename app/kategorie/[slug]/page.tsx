import Image from 'next/image';
import { notFound } from 'next/navigation';

import { ProductGrid } from '@/components/product-grid';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

type CategoryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) {
    return {};
  }

  return {
    title: `${category.name} - Modern Style`,
    description: category.description
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === category.id);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Kolekcja Modern Style
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/80">{category.description}</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <ProductGrid
            products={categoryProducts}
            title="Produkty rekomendowane"
            description="Sprawdz najpopularniejsze propozycje Modern Style dla tej kategorii. Dodaj ulubione produkty do koszyka lub zapisz na pozniej."
          />
        </div>
      </section>
    </div>
  );
}
