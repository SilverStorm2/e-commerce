import { CategoriesSection } from '@/components/categories-section';
import { ContactSection } from '@/components/contact';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { ProductGrid } from '@/components/product-grid';
import { products } from '@/data/products';

const featuredProducts = products.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <ProductGrid
            products={featuredProducts}
            title="Wybrane dla Ciebie"
            description="Sprawdz produkty, ktore obecnie kroluja w koszykach naszych klientow Modern Style."
          />
        </div>
      </section>
      <HowItWorks />
      <CategoriesSection />
      <ContactSection />
    </>
  );
}

