import { CategoriesSection } from '@/components/categories-section';

export default function CategoriesPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Oferta</p>
          <h1 className="mt-2 text-4xl font-bold">Kategorie Modern Style</h1>
          <p className="mt-3 text-base text-white/80">
            Wybierz obszar, ktory chcesz odswiezyc, a my zaproponujemy gotowe stylizacje oraz
            produkty dopasowane do Twoich planow.
          </p>
        </div>
      </section>
      <CategoriesSection />
    </>
  );
}
