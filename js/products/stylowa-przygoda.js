// Produkty stylowej przygody z przyjaciółmi
const stylowaPrzygoda = {
  'zestaw-party': [
    { 
      nazwa: 'Sukienka mini cekinowa black', 
      cena: 299.99, 
      opis: 'Błyszcząca sukienka na imprezę, krój dopasowany, długość mini, idealna na kluby',
      ocena: 4.9,
      liczbaOcen: 187,
      recenzje: [
        { uzytkownik: 'Julia M.', ocena: 5, komentarz: 'Wyglądałam jak gwiazda na imprezie!', data: '2024-01-19' },
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Cekiny połyskują pięknie w świetle', data: '2024-01-16' },
        { uzytkownik: 'Anna K.', ocena: 4, komentarz: 'Bardzo efektowna, ale wymaga odpowiedniej bielizny', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Kombinezon palazzo wide leg', 
      cena: 349.99, 
      opis: 'Elegancki kombinezon z szerokimi nogawkami, dekolt typu halter, na specjalne okazje',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Magdalena S.', ocena: 5, komentarz: 'Czuję się jak modelka w tym kombinezonie', data: '2024-01-17' },
        { uzytkownik: 'Ewa L.', ocena: 5, komentarz: 'Bardzo wygodny i stylowy jednocześnie', data: '2024-01-14' },
        { uzytkownik: 'Natalia R.', ocena: 4, komentarz: 'Pięknie się układa, ale trzeba uważać na długość', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Top crop metallic + spódnica midi', 
      cena: 199.99, 
      opis: 'Dwuczęściowy zestaw: metaliczny top i dopasowana spódnica, gotowy look na party',
      ocena: 4.7,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Beata K.', ocena: 5, komentarz: 'Idealny na sylwestra, bardzo efektowny', data: '2024-01-15' },
        { uzytkownik: 'Monika G.', ocena: 4, komentarz: 'Materiał metaliczny pięknie się prezentuje', data: '2024-01-12' },
        { uzytkownik: 'Agata M.', ocena: 5, komentarz: 'Można nosić części osobno też', data: '2024-01-09' }
      ]
    }
  ],
  'kurtka-jeansowa': [
    { 
      nazwa: 'Kurtka jeansowa vintage oversize', 
      cena: 289.99, 
      opis: 'Klasyczna kurtka jeansowa w wersji oversized, przetarcia vintage, 100% bawełna',
      ocena: 4.8,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Super uniwersalna, pasuje do wszystkiego', data: '2024-01-18' },
        { uzytkownik: 'Marta W.', ocena: 5, komentarz: 'Materiał bardzo dobrej jakości', data: '2024-01-15' },
        { uzytkownik: 'Julia P.', ocena: 4, komentarz: 'Wygodna i stylowa, jak z Instagrama', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Kurtka jeansowa cropped white', 
      cena: 259.99, 
      opis: 'Krótka biała kurtka jeansowa, krój fitted, idealna na lato i warstwowanie',
      ocena: 4.6,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Biały jeans to hit sezonu!', data: '2024-01-17' },
        { uzytkownik: 'Ewa S.', ocena: 4, komentarz: 'Świetnie się prezentuje z sukienkami', data: '2024-01-14' },
        { uzytkownik: 'Natalia K.', ocena: 5, komentarz: 'Bardzo świeża i letnia opcja', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Kurtka jeansowa black ripped', 
      cena: 319.99, 
      opis: 'Czarna kurtka jeansowa z przetarciami, modne dziury, rock&roll vibe',
      ocena: 4.7,
      liczbaOcen: 198,
      recenzje: [
        { uzytkownik: 'Magdalena R.', ocena: 5, komentarz: 'Idealny dodatek do stylizacji grunge', data: '2024-01-16' },
        { uzytkownik: 'Beata L.', ocena: 4, komentarz: 'Bardzo charakterystyczna i rockowa', data: '2024-01-13' },
        { uzytkownik: 'Monika P.', ocena: 5, komentarz: 'Przetarcia wyglądają autentycznie', data: '2024-01-10' }
      ]
    }
  ],
  'sneakersy': [
    { 
      nazwa: 'Air Jordan 1 High OG "Chicago"', 
      cena: 849.99, 
      opis: 'Legendarne sneakersy w klasycznej kolorystyce, skóra premium, kolekcjonerski model',
      ocena: 4.9,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Tomasz S.', ocena: 5, komentarz: 'Klasyka, która nigdy nie wychodzi z mody', data: '2024-01-19' },
        { uzytkownik: 'Michał K.', ocena: 5, komentarz: 'Jakość skóry jest niesamowita', data: '2024-01-16' },
        { uzytkownik: 'Adam L.', ocena: 4, komentarz: 'Drogo, ale warte każdej złotówki', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Nike Dunk Low "Panda"', 
      cena: 549.99, 
      opis: 'Popularne sneakersy w czarno-białej kolorystyce, uniwersalne i wygodne',
      ocena: 4.8,
      liczbaOcen: 678,
      recenzje: [
        { uzytkownik: 'Julia K.', ocena: 5, komentarz: 'Pasują do wszystkiego, bardzo wygodne', data: '2024-01-17' },
        { uzytkownik: 'Karolina G.', ocena: 5, komentarz: 'Minimalistyczne i stylowe', data: '2024-01-14' },
        { uzytkownik: 'Anna M.', ocena: 4, komentarz: 'Świetne na co dzień', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Converse Chuck 70 Hi "Off White"', 
      cena: 389.99, 
      opis: 'Wysokie trampki w kremowym kolorze, premium canvas, vintage finish',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 5, komentarz: 'Idealny odcień kremu, bardzo stylowe', data: '2024-01-15' },
        { uzytkownik: 'Natalia S.', ocena: 4, komentarz: 'Klasyczne Conversy w nowej odsłonie', data: '2024-01-12' },
        { uzytkownik: 'Magdalena K.', ocena: 5, komentarz: 'Vintage finish robi robotę', data: '2024-01-09' }
      ]
    }
  ],
  'zestaw-festiwalowy': [
    { 
      nazwa: 'Crop top holographic + szorty high waist', 
      cena: 199.99, 
      opis: 'Holograficzny crop top + wysokie szorty, idealny na festiwale muzyczne',
      ocena: 4.7,
      liczbaOcen: 289,
      recenzje: [
        { uzytkownik: 'Ola L.', ocena: 5, komentarz: 'Idealny na Open\'er Festival, wszyscy pytali skąd!', data: '2024-01-18' },
        { uzytkownik: 'Natalia M.', ocena: 5, komentarz: 'Hologram pięknie się mieni w słońcu', data: '2024-01-15' },
        { uzytkownik: 'Julia R.', ocena: 4, komentarz: 'Bardzo efektowny, ale materiał delikatny', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Kombinezon boho z frędzlami', 
      cena: 329.99, 
      opis: 'Letni kombinezon w stylu boho, frędzle na rękawach, wzór paisley',
      ocena: 4.8,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Czuję się jak na Woodstock, uwielbiam!', data: '2024-01-17' },
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Frędzle pięknie się poruszają', data: '2024-01-14' },
        { uzytkownik: 'Magdalena S.', ocena: 4, komentarz: 'Bardzo boho, ale trzeba lubić ten styl', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Zestaw neon mesh - top + spódniczka', 
      cena: 159.99, 
      opis: 'Neonowy zestaw z siatki, transparentny mesh, idealne na electronic music events',
      ocena: 4.5,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Świeci w ultrafiolecie, mega efekt!', data: '2024-01-16' },
        { uzytkownik: 'Beata G.', ocena: 4, komentarz: 'Bardzo odważne, ale na festiwal w sam raz', data: '2024-01-13' },
        { uzytkownik: 'Monika L.', ocena: 4, komentarz: 'Siatka wysokiej jakości, nie pruje się', data: '2024-01-10' }
      ]
    }
  ],
  'torebka-crossbody': [
    { 
      nazwa: 'Mini crossbody bag leather cognac', 
      cena: 189.99, 
      opis: 'Mała torebka ze skóry naturalnej w kolorze koniaku, regulowany pasek',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Mieści telefon, klucze i karty - idealna', data: '2024-01-18' },
        { uzytkownik: 'Kasia R.', ocena: 5, komentarz: 'Skóra pięknie się starzeje', data: '2024-01-15' },
        { uzytkownik: 'Anna W.', ocena: 4, komentarz: 'Bardzo wygodna, nie ześlizguje się', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Canvas crossbody eco-friendly', 
      cena: 89.99, 
      opis: 'Ekologiczna torebka z bawełny organicznej, nadruk rośllinny, zero waste',
      ocena: 4.6,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Julia K.', ocena: 5, komentarz: 'Świetnie, że można dbać o planetę stylowo', data: '2024-01-17' },
        { uzytkownik: 'Natalia G.', ocena: 4, komentarz: 'Bardzo pojemna jak na swój rozmiar', data: '2024-01-14' },
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Nadruki botaniczne są urocze', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Chain bag mini silver metallic', 
      cena: 149.99, 
      opis: 'Metaliczna torebka z łańcuszkiem, kolor srebrny, idealna na wieczorne wyjścia',
      ocena: 4.7,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Magdalena R.', ocena: 5, komentarz: 'Łańcuszek można nosić na różne sposoby', data: '2024-01-16' },
        { uzytkownik: 'Beata S.', ocena: 4, komentarz: 'Bardzo efektowna na imprezy', data: '2024-01-13' },
        { uzytkownik: 'Monika P.', ocena: 5, komentarz: 'Kolor srebra pasuje do wszystkiego', data: '2024-01-10' }
      ]
    }
  ],
  'okulary-retro': [
    { 
      nazwa: 'Cat Eye sunglasses vintage tortoise', 
      cena: 159.99, 
      opis: 'Okulary cat eye w stylu vintage, oprawki w kolorze szylkreta, soczewki UV400',
      ocena: 4.8,
      liczbaOcen: 298,
      recenzje: [
        { uzytkownik: 'Paulina G.', ocena: 5, komentarz: 'Wyglądają jak z lat 50., absolutnie uwielbiam', data: '2024-01-18' },
        { uzytkownik: 'Maja T.', ocena: 5, komentarz: 'Bardzo kobiece i eleganckie', data: '2024-01-15' },
        { uzytkownik: 'Anna K.', ocena: 4, komentarz: 'Doskonała ochrona przed słońcem', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Round frame glasses John Lennon style', 
      cena: 129.99, 
      opis: 'Okrągłe okulary w stylu lat 70., złote oprawki, kolorowe soczewki gradient',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Julia M.', ocena: 5, komentarz: 'Hippie vibes, idealne na festiwale', data: '2024-01-17' },
        { uzytkownik: 'Karolina S.', ocena: 4, komentarz: 'Gradient soczewek jest piękny', data: '2024-01-14' },
        { uzytkownik: 'Ewa L.', ocena: 5, komentarz: 'Czuję się jak w latach 70.', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Aviator classic gold mirror', 
      cena: 199.99, 
      opis: 'Klasyczne aviatory w złotych oprawkach, lustrzane soczewki, pilot style',
      ocena: 4.7,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Tomasz R.', ocena: 5, komentarz: 'Top Gun vibes, wszyscy się odwracają', data: '2024-01-16' },
        { uzytkownik: 'Michał P.', ocena: 4, komentarz: 'Klasyka gatunku, zawsze modne', data: '2024-01-13' },
        { uzytkownik: 'Adam G.', ocena: 5, komentarz: 'Lustrzane soczewki robią wrażenie', data: '2024-01-10' }
      ]
    }
  ]
};

// Eksportuj obiekt stylowej przygody - bez ES6 modules
window.stylowaPrzygoda = stylowaPrzygoda;