export function ContactSection() {
  return (
    <section id="kontakt" className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Kontakt</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Zostanmy w kontakcie</h2>
          <p className="mt-3 text-base text-white/70">
            Masz pytania dotyczace stylizacji dla zespolu, wspolpracy B2B lub chcesz zapisac sie na
            konsultacje 1:1? Napisz do nas, a stylistka odpowie w ciagu 24h.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p>Modern Style Sp. z o.o.</p>
            <p>ul. Przykladowa 1, 00-000 Warszawa</p>
            <p>
              Telefon:{' '}
              <a className="underline" href="tel:+48123456789">
                +48 123 456 789
              </a>
            </p>
            <p>
              Email:{' '}
              <a className="underline" href="mailto:kontakt@modernstyle.pl">
                kontakt@modernstyle.pl
              </a>
            </p>
          </div>
        </div>
        <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Imie i nazwisko
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
              placeholder="Anna Kowalska"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Adres email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
              placeholder="anna@modernstyle.pl"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Wiadomosc
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
              placeholder="Opisz swoje potrzeby lub zapytanie, a my przekazemy je odpowiedniemu specjaliscie."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-accent/90"
          >
            Wyslij wiadomosc
          </button>
        </form>
      </div>
    </section>
  );
}
