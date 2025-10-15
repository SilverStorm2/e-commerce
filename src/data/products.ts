import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'elektronika-macbook-air-m3',
    name: 'MacBook Air M3 13"',
    price: 5299.99,
    description:
      'Ultralekki laptop z procesorem Apple M3, 8 GB RAM i 256 GB SSD. Wyswietlacz Liquid Retina 13.6" oraz nawet 18 godzin pracy na baterii.',
    category: 'elektronika',
    image: '/images/elek1_komp.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-elektronika-macbook-air-m3-1',
        userName: 'Kamil',
        rating: 5,
        comment: 'Lekki i bardzo szybki, swietny do pracy zdalnej.',
        createdAt: '2025-01-04'
      },
      {
        id: 'r-elektronika-macbook-air-m3-2',
        userName: 'Anna',
        rating: 5,
        comment: 'Bateria spokojnie wytrzymuje caly dzien spotkan.',
        createdAt: '2025-01-11'
      },
      {
        id: 'r-elektronika-macbook-air-m3-3',
        userName: 'Piotr',
        rating: 4,
        comment: 'Cena wysoka, ale jakosc wykonania bez zarzutu.',
        createdAt: '2025-01-18'
      }
    ]
  },
  {
    id: 'elektronika-samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    price: 5499.99,
    description:
      'Smartfon z ekranem 6.8" Dynamic AMOLED 2X, procesorem Snapdragon 8 Gen 3, aparatem 200 MP i wbudowanym rysikiem S Pen.',
    category: 'elektronika',
    image: '/images/elek2_smartfon.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-elektronika-samsung-s24-ultra-1',
        userName: 'Tomek',
        rating: 5,
        comment: 'Aparat robi fantastyczne zdjecia nocne.',
        createdAt: '2025-02-02'
      },
      {
        id: 'r-elektronika-samsung-s24-ultra-2',
        userName: 'Marek',
        rating: 4,
        comment: 'S Pen to ogromny plus, szkoda ze obudowa sliska.',
        createdAt: '2025-02-05'
      },
      {
        id: 'r-elektronika-samsung-s24-ultra-3',
        userName: 'Ola',
        rating: 5,
        comment: 'Bardzo szybkie dzialanie i piekny ekran.',
        createdAt: '2025-02-09'
      }
    ]
  },
  {
    id: 'elektronika-sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    price: 1599.99,
    description:
      'Bezprzewodowe sluchawki z aktywna redukcja halasu, trybem ambient i 30 godzinami pracy. Idealne do pracy i podrozy.',
    category: 'elektronika',
    image: '/images/elek3_audio.jpg',
    rating: 4.9,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-elektronika-sony-wh-1000xm5-1',
        userName: 'Natalia',
        rating: 5,
        comment: 'ANC dziala perfekcyjnie w open space.',
        createdAt: '2025-03-01'
      },
      {
        id: 'r-elektronika-sony-wh-1000xm5-2',
        userName: 'Robert',
        rating: 5,
        comment: 'Brzmienie bardzo czyste, wygodne na dlugie loty.',
        createdAt: '2025-03-04'
      },
      {
        id: 'r-elektronika-sony-wh-1000xm5-3',
        userName: 'Paula',
        rating: 4,
        comment: 'Szkoda ze nie sa wodoodporne, ale jakosc top.',
        createdAt: '2025-03-10'
      }
    ]
  },
  {
    id: 'moda-garnitur',
    name: 'Garnitur Modern Executive',
    price: 1299.99,
    description:
      'Dwuczesciowy garnitur slim fit z elastyczna tkanina premium. Dostepny w trzech wariantach kolorystycznych.',
    category: 'moda',
    image: '/images/moda1-kilkaRzeczy.jpg',
    rating: 4.7,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-moda-garnitur-1',
        userName: 'Lukasz',
        rating: 5,
        comment: 'Material dobrze sie uklada i nie gniecie sie.',
        createdAt: '2025-02-12'
      },
      {
        id: 'r-moda-garnitur-2',
        userName: 'Rafal',
        rating: 4,
        comment: 'Rozmiar zgodny z tabela, przydalaby sie wiecej kolorow.',
        createdAt: '2025-02-18'
      },
      {
        id: 'r-moda-garnitur-3',
        userName: 'Adam',
        rating: 5,
        comment: 'Idealny na spotkania biznesowe, bardzo elegancki.',
        createdAt: '2025-02-21'
      }
    ]
  },
  {
    id: 'moda-sukienka-satynowa',
    name: 'Satynowa Sukienka Aurora',
    price: 499,
    description:
      'Elegancka sukienka midi z satyny, podkreslajaca sylwetke. Idealna na wieczorne przyjecia i wyjatkowe okazje.',
    category: 'moda',
    image: '/images/moda4-sukienka.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-moda-sukienka-satynowa-1',
        userName: 'Magda',
        rating: 5,
        comment: 'Kolor wyglada pieknie w swietle, material miekki.',
        createdAt: '2025-03-08'
      },
      {
        id: 'r-moda-sukienka-satynowa-2',
        userName: 'Karina',
        rating: 4,
        comment: 'Przesylka moglaby byc szybsza, ale sukienka extra.',
        createdAt: '2025-03-12'
      },
      {
        id: 'r-moda-sukienka-satynowa-3',
        userName: 'Iga',
        rating: 5,
        comment: 'Idealna na wesela, bardzo wygodna.',
        createdAt: '2025-03-15'
      }
    ]
  },
  {
    id: 'moda-kurtka-parka',
    name: 'Kurtka Parka Nordic',
    price: 699.99,
    description:
      'Wodoodporna parka z kapturem i ociepleniem z recyklingu. Dodatkowe kieszenie i odblaskowe detale.',
    category: 'moda',
    image: '/images/moda2-witrynaSklepu.jpg',
    rating: 4.6,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-moda-kurtka-parka-1',
        userName: 'Oskar',
        rating: 4,
        comment: 'Chroni przed wiatrem, moglaby byc lzejsza.',
        createdAt: '2025-01-28'
      },
      {
        id: 'r-moda-kurtka-parka-2',
        userName: 'Kasia',
        rating: 5,
        comment: 'Swietny kaptur, ciepla nawet przy minusowych temperaturach.',
        createdAt: '2025-02-03'
      },
      {
        id: 'r-moda-kurtka-parka-3',
        userName: 'Grzegorz',
        rating: 5,
        comment: 'Duza liczba kieszeni, bardzo praktyczna.',
        createdAt: '2025-02-06'
      }
    ]
  },
  {
    id: 'dom-zestaw-ceramiczny',
    name: 'Zestaw ceramiczny Loft',
    price: 349.99,
    description:
      'Recznie szkliwiona zastawa stolowa dla czterech osob. Minimalistyczny design inspirowany natura.',
    category: 'dom',
    image: '/images/dom3kitchen.jpg',
    rating: 4.9,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-dom-zestaw-ceramiczny-1',
        userName: 'Julia',
        rating: 5,
        comment: 'Wyglada swietnie na stole, kazdy talerz unikatowy.',
        createdAt: '2025-02-01'
      },
      {
        id: 'r-dom-zestaw-ceramiczny-2',
        userName: 'Mila',
        rating: 5,
        comment: 'Grube szkliwo, nic sie nie rysuje.',
        createdAt: '2025-02-05'
      },
      {
        id: 'r-dom-zestaw-ceramiczny-3',
        userName: 'Eryk',
        rating: 4,
        comment: 'Dobrze znosi zmywarke, szkoda ze bez kubkow.',
        createdAt: '2025-02-09'
      }
    ]
  },
  {
    id: 'dom-dyfuzor-aroma',
    name: 'Dyfuzor zapachowy Pure Calm',
    price: 189.99,
    description:
      'Ultradzwiekowy dyfuzor z lampka ambient i timerem. W zestawie trzy kompozycje zapachowe.',
    category: 'dom',
    image: '/images/dom4bathroom.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-dom-dyfuzor-aroma-1',
        userName: 'Sandra',
        rating: 5,
        comment: 'Delikatna mgielka, swietnie nawilza powietrze.',
        createdAt: '2025-01-20'
      },
      {
        id: 'r-dom-dyfuzor-aroma-2',
        userName: 'Marta',
        rating: 4,
        comment: 'Cichy tryb nocny, przydaloby sie wiecej olejkow w zestawie.',
        createdAt: '2025-01-24'
      },
      {
        id: 'r-dom-dyfuzor-aroma-3',
        userName: 'Julian',
        rating: 5,
        comment: 'Bardzo ladna obudowa, pasuje do salonu.',
        createdAt: '2025-01-29'
      }
    ]
  },
  {
    id: 'dom-lampa-scienna',
    name: 'Lampa scienna Zenith',
    price: 279.99,
    description:
      'Nowoczesna lampa LED z regulowanym katem padania swiatla. Idealna do salonu i domowego biura.',
    category: 'dom',
    image: '/images/dom5living-room.jpg',
    rating: 4.7,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-dom-lampa-scienna-1',
        userName: 'Norbert',
        rating: 4,
        comment: 'Prosty montaz, swiatlo troche zimne jak na moj gust.',
        createdAt: '2025-03-03'
      },
      {
        id: 'r-dom-lampa-scienna-2',
        userName: 'Sara',
        rating: 5,
        comment: 'Regulacja kata swiatla dziala bez zarzutu.',
        createdAt: '2025-03-06'
      },
      {
        id: 'r-dom-lampa-scienna-3',
        userName: 'Igor',
        rating: 5,
        comment: 'Designerski wyglad, super do czytania.',
        createdAt: '2025-03-08'
      }
    ]
  },
  {
    id: 'sport-mata-joga',
    name: 'Mata do jogi Flow Pro',
    price: 249.99,
    description:
      'Antyposlizgowa mata o grubosci 6 mm wykonana z naturalnej gumy i mikrofibry. W zestawie torba transportowa.',
    category: 'sport',
    image: '/images/sport3-fitness-silownia.jpg',
    rating: 4.9,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-sport-mata-joga-1',
        userName: 'Ela',
        rating: 5,
        comment: 'Nie slizga sie nawet przy dynamicznych cwiczeniach.',
        createdAt: '2025-02-14'
      },
      {
        id: 'r-sport-mata-joga-2',
        userName: 'Dominik',
        rating: 5,
        comment: 'Dobra amortyzacja, material latwy do czyszczenia.',
        createdAt: '2025-02-17'
      },
      {
        id: 'r-sport-mata-joga-3',
        userName: 'Zofia',
        rating: 4,
        comment: 'Torba moglaby byc troche szersza, ale mata super.',
        createdAt: '2025-02-21'
      }
    ]
  },
  {
    id: 'sport-zegarek-neo',
    name: 'Zegarek sportowy NeoRun',
    price: 1199.99,
    description:
      'Multisportowy smartwatch z GPS, pulsoksymetrem i adaptacyjnymi planami treningowymi.',
    category: 'sport',
    image: '/images/sport2-bieganie-buty.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-sport-zegarek-neo-1',
        userName: 'Konrad',
        rating: 5,
        comment: 'Dokladne pomiary i szybki GPS.',
        createdAt: '2025-01-15'
      },
      {
        id: 'r-sport-zegarek-neo-2',
        userName: 'Milena',
        rating: 4,
        comment: 'Aplikacja moglaby miec wiecej statystyk, ale zegarek super.',
        createdAt: '2025-01-19'
      },
      {
        id: 'r-sport-zegarek-neo-3',
        userName: 'Jarek',
        rating: 5,
        comment: 'Bateria trzyma tydzien, bardzo lekki na rece.',
        createdAt: '2025-01-22'
      }
    ]
  },
  {
    id: 'sport-rower-miejski',
    name: 'Rower miejski Urban Glide',
    price: 2399,
    description:
      'Lekka rama aluminiowa, 7-biegowa przekladnia i oswietlenie LED zasilane dynamem w piascie.',
    category: 'sport',
    image: '/images/sport6-turystyka-namiot.jpg',
    rating: 4.7,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-sport-rower-miejski-1',
        userName: 'Ewelina',
        rating: 5,
        comment: 'Wygodna pozycja, idealny na dojazdy do pracy.',
        createdAt: '2025-03-02'
      },
      {
        id: 'r-sport-rower-miejski-2',
        userName: 'Patryk',
        rating: 4,
        comment: 'Siodlo mogloby byc miekkie, reszta bez uwag.',
        createdAt: '2025-03-05'
      },
      {
        id: 'r-sport-rower-miejski-3',
        userName: 'Lena',
        rating: 5,
        comment: 'Bardzo stabilny, swietne swiatla LED.',
        createdAt: '2025-03-07'
      }
    ]
  },
  {
    id: 'uroda-serum-c-vit',
    name: 'Serum z witamina C Radiance',
    price: 159.99,
    description:
      'Stezenie 15% witaminy C, kwas ferulowy i niacynamid. Rozswietla skore i wyrownuje koloryt.',
    category: 'uroda',
    image: '/images/uroda-beauty-6837031_1280.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-uroda-serum-c-vit-1',
        userName: 'Justyna',
        rating: 5,
        comment: 'Skora widocznie jasniejsza po tygodniu.',
        createdAt: '2025-02-08'
      },
      {
        id: 'r-uroda-serum-c-vit-2',
        userName: 'Paulina',
        rating: 4,
        comment: 'Szybko sie wchlania, lekko szczypie przy pierwszym uzyciu.',
        createdAt: '2025-02-12'
      },
      {
        id: 'r-uroda-serum-c-vit-3',
        userName: 'Sylwia',
        rating: 5,
        comment: 'Ujednolica koloryt, idealne na rano.',
        createdAt: '2025-02-16'
      }
    ]
  },
  {
    id: 'uroda-roller-kwarc',
    name: 'Roller kwarcowy Harmony',
    price: 129.99,
    description:
      'Szlifowany kwarc rozowy, idealny do masazu twarzy i wspomagania aplikacji serum.',
    category: 'uroda',
    image: '/images/uroda-perfume-2574073_1280.jpg',
    rating: 4.6,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-uroda-roller-kwarc-1',
        userName: 'Dagmara',
        rating: 5,
        comment: 'Metalowa raczka dobrze trzyma temperature.',
        createdAt: '2025-01-30'
      },
      {
        id: 'r-uroda-roller-kwarc-2',
        userName: 'Kalina',
        rating: 4,
        comment: 'Przyjemny masaz, przydalaby sie instrukcja cwiczen.',
        createdAt: '2025-02-02'
      },
      {
        id: 'r-uroda-roller-kwarc-3',
        userName: 'Marlena',
        rating: 5,
        comment: 'Uzywam codziennie z serum, skora mniej opuchnieta.',
        createdAt: '2025-02-05'
      }
    ]
  },
  {
    id: 'uroda-maska-spa',
    name: 'Maska nocna Spa Ritual',
    price: 199.99,
    description:
      'Bogata maska z ceramidami i peptydami. Regeneruje cere podczas snu i wzmacnia bariere hydrolipidowa.',
    category: 'uroda',
    image: '/images/5-face.jpg',
    rating: 4.9,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-uroda-maska-spa-1',
        userName: 'Renata',
        rating: 5,
        comment: 'Rano skora jest mieciutka i nawilzona.',
        createdAt: '2025-03-11'
      },
      {
        id: 'r-uroda-maska-spa-2',
        userName: 'Olga',
        rating: 5,
        comment: 'Nie zapycha porow, pachnie bardzo delikatnie.',
        createdAt: '2025-03-14'
      },
      {
        id: 'r-uroda-maska-spa-3',
        userName: 'Iwona',
        rating: 4,
        comment: 'Wydajna konsystencja, troche wysoka cena.',
        createdAt: '2025-03-16'
      }
    ]
  },
  {
    id: 'stylowa-przygoda-zestaw',
    name: 'Zestaw City Break Duo',
    price: 899.99,
    description:
      'Koordynowane stylizacje dla dwoch osob, obejmujace plaszcze, akcesoria i garderobe kapsulowa.',
    category: 'stylowa-przygoda',
    image: '/images/stylowa-przyg-fashion-6203956_1280.jpg',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-stylowa-przygoda-zestaw-1',
        userName: 'Sebastian',
        rating: 5,
        comment: 'Swietnie dobrane stylizacje na weekend we dwoje.',
        createdAt: '2025-02-22'
      },
      {
        id: 'r-stylowa-przygoda-zestaw-2',
        userName: 'Lidia',
        rating: 4,
        comment: 'Mozna by dodac wiecej akcesoriow, ale ubrania super.',
        createdAt: '2025-02-25'
      },
      {
        id: 'r-stylowa-przygoda-zestaw-3',
        userName: 'Hubert',
        rating: 5,
        comment: 'Wszystko gotowe na wyjazd, duza oszczednosc czasu.',
        createdAt: '2025-02-27'
      }
    ]
  },
  {
    id: 'stylowa-przygoda-event',
    name: 'Event Style Concierge',
    price: 1299,
    description:
      'Usluga personalnego stylisty i make up artist na wyjatkowe wydarzenia. Obejmuje konsultacje online.',
    category: 'stylowa-przygoda',
    image: '/images/stylowa-przyg-woman-600225_1280-kurtkaZimowa.jpg',
    rating: 4.9,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-stylowa-przygoda-event-1',
        userName: 'Beata',
        rating: 5,
        comment: 'Profesjonalna opieka stylistki, czulam sie jak gwiazda.',
        createdAt: '2025-01-26'
      },
      {
        id: 'r-stylowa-przygoda-event-2',
        userName: 'Weronika',
        rating: 5,
        comment: 'Makijaz i fryzura wytrzymaly cala gale.',
        createdAt: '2025-01-30'
      },
      {
        id: 'r-stylowa-przygoda-event-3',
        userName: 'Izabela',
        rating: 4,
        comment: 'Mozna dodac wiecej propozycji dodatkow, ale atmosfera super.',
        createdAt: '2025-02-01'
      }
    ]
  },
  {
    id: 'stylowa-przygoda-przyjaciolki',
    name: 'Weekend z przyjaciolkami',
    price: 1599,
    description:
      'Pakiet stylizacji i atrakcji wellness dla grupy do czterech osob. W cenie sesja zdjeciowa lifestyle.',
    category: 'stylowa-przygoda',
    image: '/images/stylowa-przyg-girl-2581913_1280.jpg',
    rating: 4.7,
    reviewCount: 3,
    reviews: [
      {
        id: 'r-stylowa-przygoda-przyjaciolki-1',
        userName: 'Sandra',
        rating: 5,
        comment: 'Swietna zabawa i piekne stylizacje na zdjeciach.',
        createdAt: '2025-03-04'
      },
      {
        id: 'r-stylowa-przygoda-przyjaciolki-2',
        userName: 'Karolina',
        rating: 4,
        comment: 'Program intensywny, ale bardzo dobrze zorganizowany.',
        createdAt: '2025-03-06'
      },
      {
        id: 'r-stylowa-przygoda-przyjaciolki-3',
        userName: 'Natalia',
        rating: 5,
        comment: 'Sesja zdjeciowa to hit, duzo wspomnien.',
        createdAt: '2025-03-09'
      }
    ]
  }
];
