import type { Product } from '@/types/product';

import { ProductCard } from '@/components/product-card';

type ProductGridProps = {
  products: Product[];
  title?: string;
  description?: string;
};

export function ProductGrid({ products, title, description }: ProductGridProps) {
  return (
    <section className="space-y-6">
      {title ? (
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Oferta</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          {description ? <p className="mt-2 text-base text-slate-600">{description}</p> : null}
        </header>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
