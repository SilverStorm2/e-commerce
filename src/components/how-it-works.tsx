const steps = [
  {
    title: 'Przeslij swoja inspiracje',
    description: 'Dodaj zdjecie lub opis stylu, ktory Cie inspiruje. To nasza baza do rekomendacji.',
    icon: 'Camera'
  },
  {
    title: 'Analiza AI + Stylista',
    description:
      'Laczymy dane o trendach ze spojrzeniem stylistow Modern Style, aby zaproponowac spojne zestawy.',
    icon: 'Brain'
  },
  {
    title: 'Dopasuj i zamow',
    description:
      'Porownaj rekomendacje, dodaj wlasne preferencje i sfinalizuj zamowienie w kilka klikniec.',
    icon: 'Bag'
  },
  {
    title: 'Odbierz i ciesz sie',
    description:
      'Dostarczamy stylizacje z opcja latwego zwrotu lub podmiany elementow, jesli cos nie pasuje.',
    icon: 'Spark'
  }
];

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Jak to dziala</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Personalizacja, ktora oszczedza Twoj czas
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Modern Style laczy najnowsza technologie z doswiadczeniem stylistow, aby dostarczac
            zestawy, ktore pasuja do Twoich planow i sylwetki.
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-lg"
            >
              <span className="text-3xl">{step.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
