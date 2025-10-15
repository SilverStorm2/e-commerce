## Modern Style - Next.js storefront

Modern Style to odswiezony sklep internetowy zbudowany w oparciu o **Next.js 14 (App Router)** i **TypeScript**. Projekt przenosi wczesniejszy statyczny prototyp na architekture komponentowa React z SSR/SSG, centralnym zrodlem danych oraz panelem administracyjnym korzystajacym z lekkiego API bazujacego na pliku JSON.

### Stos technologiczny

- Next.js 14 z katalogiem `app/`
- React 18 + TypeScript
- Tailwind CSS z prostymi design tokens
- Next API Routes jako warstwa backendowa (`data/store.json` jako magazyn)
- Vitest + Testing Library (konfiguracja startowa)
- ESLint (next/core-web-vitals) i Prettier
- GitHub Actions CI (lint -> typecheck -> test -> build)

---

## Szybki start

```bash
npm install          # instalacja zaleznosci
npm run dev          # tryb developerski z HMR
npm run lint         # eslint
npm run typecheck   # sprawdzenie typow
npm run test -- --run  # testy jednostkowe (vitest)
npm run build        # produkcyjny build Next.js
```

> W czasie pracy lokalnej korzystaj z `npm run dev`. Komende `npm run build` uruchamiaj tylko w CI lub przed wdrozeniem.

### Struktura katalogow

```
app/                     -> routing i strony Next.js
  api/                   -> API routes (rabaty, zamowienia, analityka, produkty)
  admin/                 -> panel do zarzadzania rabatami i przegladu zamowien
  kategorie/             -> lista kategorii i strony szczegolowe
  ulubione/              -> widok ulubionych produktow (client component)
src/
  components/            -> komponenty UI (Hero, ProductGrid, koszyk, itp.)
  contexts/              -> CartContext (koszyk + ulubione w localStorage)
  data/                  -> stale danych (produkty, kategorie, rabaty)
  lib/                   -> warstwa dostepu do pliku `data/store.json`
data/store.json          -> "baza danych" (rabaty, zamowienia, analityka)
public/images/           -> obrazy kategorii
.github/workflows/ci.yml -> pipeline GitHub Actions
legacy/                  -> oryginalny prototyp HTML/CSS/JS (tylko do referencji)
```

---

## Funkcje aplikacji

- Responsywny storefront (hero, produkty, opis procesu, sekcja kontaktowa).
- Koszyk i ulubione oparte na React Context z synchronizacja w localStorage.
- Panel administracyjny:
  - CRUD kodow rabatowych (dodawanie, aktywacja, usuwanie),
  - podglad metryk ze `store.json`,
  - widok ostatnich zamowien (API `/api/orders`).
- API przygotowane do podpiecia zewnetrznego backendu (Supabase, PlanetScale, itp.).

---

## Testy i jakosc

- `npm run lint` - zasady Next.js + TypeScript.
- `npm run test` - Vitest (domyslnie `jsdom`).
- `npm run typecheck` - walidacja typow na poziomie projektu.
- `npm run format:fix` - formatowanie Prettierem.

Pipeline CI (`.github/workflows/ci.yml`) uruchamia wszystkie powyzsze kroki na kazdym pushu oraz pull request.

---

## Wdrozenia

Projekt jest gotowy do publikacji na Vercel lub podobnej platformie:

1. Polacz repozytorium z Vercel.
2. Skonfiguruj zmienne srodowiskowe (jesli beda potrzebne).
3. Skorzystaj z prewiew deployment generowanych automatycznie przez CI.

---

## Kolejne kroki (propozycje)

1. Migracja danych z `data/store.json` do bazy (Supabase, PlanetScale, itp.).
2. Dodanie testow e2e (np. Playwright) dla glownego happy path (koszyk, rabaty, panel admina).
3. Autoryzacja panelu (NextAuth, Firebase Auth) i uprawnienia zespolowe.
4. Storybook dla komponentow UI i szablonow strony.

---

Happy shipping!
