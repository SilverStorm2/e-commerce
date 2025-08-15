// Produkty sportu
const sport = {
  'pilka-nozna': [
    {
      nazwa: 'Buty Nike Mercurial Vapor 15 Elite',
      cena: 899.99,
      opis: 'Profesjonalne korki piłkarskie, technologia NikeSkin, FG, różne rozmiary',
      ocena: 4.9,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Marek K.', ocena: 5, komentarz: 'Najlepsze korki jakie miałem!', data: '2024-01-18' },
        { uzytkownik: 'Tomasz S.', ocena: 5, komentarz: 'Świetna przyczepność na murawie', data: '2024-01-15' },
        { uzytkownik: 'Adam W.', ocena: 4, komentarz: 'Droższe, ale warte swojej ceny', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Piłka Adidas UCL Finale Pro',
      cena: 249.99,
      opis: 'Oficjalna piłka Ligi Mistrzów, rozmiar 5, technologia TSBE, certyfikat FIFA',
      ocena: 4.8,
      liczbaOcen: 334,
      recenzje: [
        { uzytkownik: 'Łukasz P.', ocena: 5, komentarz: 'Idealnie wyważona, świetny lot', data: '2024-01-17' },
        { uzytkownik: 'Kamil G.', ocena: 5, komentarz: 'Taka sama jak w telewizji!', data: '2024-01-14' },
        { uzytkownik: 'Piotr M.', ocena: 4, komentarz: 'Dobra piłka do treningów', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Ochraniacze Nike Mercurial Lite',
      cena: 89.99,
      opis: 'Lekkie ochraniacze na piszczele, technologia Nike Dri-FIT, rozmiary S-XL',
      ocena: 4.7,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Michał R.', ocena: 5, komentarz: 'Lekkie i wygodne podczas gry', data: '2024-01-16' },
        { uzytkownik: 'Jakub L.', ocena: 4, komentarz: 'Dobrze trzymają się na nodze', data: '2024-01-13' },
        { uzytkownik: 'Mateusz K.', ocena: 5, komentarz: 'Nie przeszkadzają w grze', data: '2024-01-10' }
      ]
    }
  ],
  'bieganie': [
    {
      nazwa: 'Nike Air Zoom Pegasus 40',
      cena: 549.99,
      opis: 'Uniwersalne buty do biegania, amortyzacja Zoom Air, mesh górna część',
      ocena: 4.8,
      liczbaOcen: 789,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Idealne do długich dystansów!', data: '2024-01-18' },
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Świetna amortyzacja, wygodne', data: '2024-01-15' },
        { uzytkownik: 'Karolina M.', ocena: 4, komentarz: 'Polecam dla początkujących biegaczy', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Zegarek Garmin Forerunner 255',
      cena: 1399.99,
      opis: 'Zegarek biegowy z GPS, monitor tętna, analiza treningu, bateria do 14 dni',
      ocena: 4.9,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Piotr S.', ocena: 5, komentarz: 'Najlepszy zegarek dla biegaczy', data: '2024-01-17' },
        { uzytkownik: 'Magdalena L.', ocena: 5, komentarz: 'Dokładny GPS, świetne analizy', data: '2024-01-14' },
        { uzytkownik: 'Adam G.', ocena: 4, komentarz: 'Duzo funkcji, długa bateria', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Koszulka techniczna Dri-FIT',
      cena: 129.99,
      opis: 'Koszulka do biegania z technologią odprowadzania wilgoci, UPF 40+',
      ocena: 4.6,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Julia P.', ocena: 5, komentarz: 'Nie przykleja się podczas biegu', data: '2024-01-16' },
        { uzytkownik: 'Marek D.', ocena: 4, komentarz: 'Szybko schnie, wygodna', data: '2024-01-13' },
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Idealna na letnie biegi', data: '2024-01-10' }
      ]
    }
  ],
  'fitness-silownia': [
    {
      nazwa: 'Hantle regulowane PowerBlock Pro 50',
      cena: 2199.99,
      opis: 'Hantle regulowane 2.5-23kg każdy, system szybkiej zmiany obciążenia',
      ocena: 4.9,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Kamil S.', ocena: 5, komentarz: 'Oszczędność miejsca w domowej siłowni', data: '2024-01-18' },
        { uzytkownik: 'Michał K.', ocena: 5, komentarz: 'Szybka zmiana ciężaru, solidne', data: '2024-01-15' },
        { uzytkownik: 'Łukasz R.', ocena: 4, komentarz: 'Drogie, ale warte swojej ceny', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Mata do ćwiczeń premium NBR',
      cena: 149.99,
      opis: 'Gruba mata fitness 15mm, materiał NBR, antypoślizgowa, 180x60cm',
      ocena: 4.7,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Anna S.', ocena: 5, komentarz: 'Bardzo wygodna do jogi i pilates', data: '2024-01-17' },
        { uzytkownik: 'Beata M.', ocena: 4, komentarz: 'Gruba i stabilna, nie ślizga się', data: '2024-01-14' },
        { uzytkownik: 'Kasia L.', ocena: 5, komentarz: 'Idealna grubość, miękka dla kolan', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Guma oporowa zestaw 5 sztuk',
      cena: 79.99,
      opis: 'Zestaw gum oporowych różne opory, uchwyty, karabińczyki, instrukcja ćwiczeń',
      ocena: 4.6,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Tomasz G.', ocena: 5, komentarz: 'Kompletny zestaw, różne poziomy trudności', data: '2024-01-16' },
        { uzytkownik: 'Julia W.', ocena: 4, komentarz: 'Świetne do ćwiczeń w domu', data: '2024-01-13' },
        { uzytkownik: 'Marek P.', ocena: 5, komentarz: 'Dobre uchwyty, wytrzymałe gumy', data: '2024-01-10' }
      ]
    }
  ],
  'sporty-zimowe': [
    {
      nazwa: 'Narty Rossignol Experience 88 Ti',
      cena: 2899.99,
      opis: 'Narty all-mountain z tytanem, długość 160-180cm, wiązania w komplecie',
      ocena: 4.8,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Piotr K.', ocena: 5, komentarz: 'Świetne na każdym śniegu!', data: '2024-01-18' },
        { uzytkownik: 'Magdalena R.', ocena: 5, komentarz: 'Stabilne i precyzyjne', data: '2024-01-15' },
        { uzytkownik: 'Adam L.', ocena: 4, komentarz: 'Dobre dla zaawansowanych narciarzy', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Kask narciarski Uvex P1us 2.0',
      cena: 449.99,
      opis: 'Lekki kask narciarski z systemem MIPS, regulacja FAS, rozmiary 52-62cm',
      ocena: 4.9,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Karolina S.', ocena: 5, komentarz: 'Lekki i wygodny, dobra wentylacja', data: '2024-01-17' },
        { uzytkownik: 'Jakub M.', ocena: 5, komentarz: 'System MIPS daje poczucie bezpieczeństwa', data: '2024-01-14' },
        { uzytkownik: 'Ewa P.', ocena: 4, komentarz: 'Dobrze dopasowany, stylowy design', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Gogle narciarskie Smith Squad MAG',
      cena: 699.99,
      opis: 'Gogle z magnetyczną wymianą soczewek, ChromaPop, 2 soczewki w komplecie',
      ocena: 4.7,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Magnetyczna wymiana to genialne rozwiązanie', data: '2024-01-16' },
        { uzytkownik: 'Anna K.', ocena: 4, komentarz: 'Świetna widoczność, nie parują', data: '2024-01-13' },
        { uzytkownik: 'Michał G.', ocena: 5, komentarz: 'ChromaPop poprawia kontrast', data: '2024-01-10' }
      ]
    }
  ],
  'sporty-wodne': [
    {
      nazwa: 'Deska SUP Aqua Marina Dhyana',
      cena: 1299.99,
      opis: 'Deska SUP dmuchana 11\'6", stabilna dla jogi, pompka i akcesoria w zestawie',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Julia M.', ocena: 5, komentarz: 'Idealna do jogi na wodzie!', data: '2024-01-18' },
        { uzytkownik: 'Karolina L.', ocena: 5, komentarz: 'Bardzo stabilna, łatwa do dmuchania', data: '2024-01-15' },
        { uzytkownik: 'Anna P.', ocena: 4, komentarz: 'Dobra jakość za rozsądną cenę', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Strój neoprenowy Rip Curl 3/2mm',
      cena: 899.99,
      opis: 'Pełny strój neoprenowy do surfingu, elastyczny neopren, zamek z tyłu',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Marek S.', ocena: 5, komentarz: 'Ciepły i elastyczny, nie krępuje ruchów', data: '2024-01-17' },
        { uzytkownik: 'Piotr G.', ocena: 4, komentarz: 'Dobrej jakości neopren', data: '2024-01-14' },
        { uzytkownik: 'Łukasz K.', ocena: 5, komentarz: 'Idealny do surfingu w chłodnej wodzie', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Maska i rurka Aqua Lung Sport',
      cena: 199.99,
      opis: 'Zestaw do snorkelingu, maska z hartowanego szkła, silikonowa rurka',
      ocena: 4.6,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Świetna widoczność pod wodą', data: '2024-01-16' },
        { uzytkownik: 'Tomasz R.', ocena: 4, komentarz: 'Wygodna i szczelna maska', data: '2024-01-13' },
        { uzytkownik: 'Magdalena W.', ocena: 5, komentarz: 'Idealna do snorkelingu w tropikach', data: '2024-01-10' }
      ]
    }
  ],
  'turystyka-outdoor': [
    {
      nazwa: 'Plecak trekkingowy Deuter Aircontact 65+10',
      cena: 899.99,
      opis: 'Plecak trekkingowy 65L + 10L, system Aircontact, stelażowy, pokrowiec przeciwdeszczowy',
      ocena: 4.9,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Kamil P.', ocena: 5, komentarz: 'Najwygodniejszy plecak na długie wyprawy', data: '2024-01-18' },
        { uzytkownik: 'Michał L.', ocena: 5, komentarz: 'Świetny system wentylacji pleców', data: '2024-01-15' },
        { uzytkownik: 'Adam K.', ocena: 4, komentarz: 'Solidny i funkcjonalny', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Namiot MSR Hubba Hubba NX 2',
      cena: 1799.99,
      opis: 'Namiot 3-sezonowy dla 2 osób, waga 1.7kg, podwójne wejścia, łatwy montaż',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Piotr W.', ocena: 5, komentarz: 'Lekki i przestronny, świetny na trekkingu', data: '2024-01-17' },
        { uzytkownik: 'Julia S.', ocena: 5, komentarz: 'Szybki montaż, bardzo stabilny', data: '2024-01-14' },
        { uzytkownik: 'Tomasz G.', ocena: 4, komentarz: 'Drogi, ale najwyższa jakość', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Buty trekkingowe Salomon X Ultra 4 GTX',
      cena: 649.99,
      opis: 'Buty trekkingowe Gore-Tex, suela Contagrip, system sznurowania Quicklace',
      ocena: 4.7,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Karolina G.', ocena: 5, komentarz: 'Wodoodporne i bardzo wygodne', data: '2024-01-16' },
        { uzytkownik: 'Marek D.', ocena: 4, komentarz: 'Świetna przyczepność na śliskich kamieniach', data: '2024-01-13' },
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Idealne na długie marsze górskie', data: '2024-01-10' }
      ]
    }
  ]
};

// Eksportuj obiekt sportu - bez ES6 modules
window.sport = sport;
