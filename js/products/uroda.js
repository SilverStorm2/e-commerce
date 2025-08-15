// Produkty urody
const uroda = {
  'perfumy': [
    { 
      nazwa: 'Chanel No. 5 EDP 100ml', 
      cena: 649.99, 
      opis: 'Legendarne perfumy damskie, klasyczny kwiatowy zapach z nutami ylang-ylang i jaśminu',
      ocena: 4.9,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Anna W.', ocena: 5, komentarz: 'Cudowny, ponadczasowy zapach', data: '2024-01-19' },
        { uzytkownik: 'Magdalena K.', ocena: 5, komentarz: 'Moja ulubiona klasyka', data: '2024-01-16' },
        { uzytkownik: 'Julia M.', ocena: 4, komentarz: 'Drogo, ale warto', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Tom Ford Black Orchid EDP 50ml', 
      cena: 489.99, 
      opis: 'Luksusowe perfumy unisex o zmysłowym zapachu z nutami czarnej orchidei i truflii',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Niesamowicie eleganckie i uwodzicielskie', data: '2024-01-17' },
        { uzytkownik: 'Ewa L.', ocena: 5, komentarz: 'Bardzo trwałe, idealnie na wieczór', data: '2024-01-14' },
        { uzytkownik: 'Natalia R.', ocena: 4, komentarz: 'Oryginalny, nietuzinkowy zapach', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Viktor & Rolf Flowerbomb EDP 100ml', 
      cena: 379.99, 
      opis: 'Wybuchowo kwiatowe perfumy z nutami frezji, jaśminu, orchidei i paczuli',
      ocena: 4.7,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Beata S.', ocena: 5, komentarz: 'Świetne na dzień i wieczór', data: '2024-01-15' },
        { uzytkownik: 'Monika G.', ocena: 4, komentarz: 'Bardzo kobiecy i czarujący', data: '2024-01-12' },
        { uzytkownik: 'Agata M.', ocena: 5, komentarz: 'Długo utrzymuje się na skórze', data: '2024-01-09' }
      ]
    }
  ],
  'kosmetyki-pielegnacyjne': [
    { 
      nazwa: 'La Mer The Moisturizing Cream 60ml', 
      cena: 899.99, 
      opis: 'Luksusowy krem nawilżający z Miracle Broth™, regeneruje i odmładza skórę',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Magdalena R.', ocena: 5, komentarz: 'Najlepszy krem jaki używałam!', data: '2024-01-18' },
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Skóra jest jak jedwab', data: '2024-01-15' },
        { uzytkownik: 'Julia P.', ocena: 4, komentarz: 'Drogi, ale efekty są niesamowite', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'The Ordinary Hyaluronic Acid 2% + B5', 
      cena: 29.99, 
      opis: 'Serum z kwasem hialuronowym, intensywnie nawilża i wygładza skórę',
      ocena: 4.6,
      liczbaOcen: 1234,
      recenzje: [
        { uzytkownik: 'Kasia M.', ocena: 5, komentarz: 'Niesamowita cena za tak dobrą jakość', data: '2024-01-17' },
        { uzytkownik: 'Ewa W.', ocena: 4, komentarz: 'Skóra jest bardzo nawilżona', data: '2024-01-14' },
        { uzytkownik: 'Natalia L.', ocena: 5, komentarz: 'Must-have w pielęgnacji', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Eucerin Q10 Anti-Wrinkle Face Cream', 
      cena: 89.99, 
      opis: 'Krem przeciwzmarszczkowy z koenzymem Q10, redukuje oznaki starzenia',
      ocena: 4.5,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Beata K.', ocena: 5, komentarz: 'Widoczne wygładzenie zmarszczek', data: '2024-01-16' },
        { uzytkownik: 'Monika S.', ocena: 4, komentarz: 'Dobry stosunek jakości do ceny', data: '2024-01-13' },
        { uzytkownik: 'Agnieszka P.', ocena: 4, komentarz: 'Skóra jest bardziej elastyczna', data: '2024-01-10' }
      ]
    }
  ],
  'pielegnacja-twarzy': [
    { 
      nazwa: 'Clinique Dramatically Different Moisturizing Lotion+', 
      cena: 149.99, 
      opis: 'Kultowy krem nawilżający, wzmacnia naturalną barierę skóry, odpowiedni dla każdego typu',
      ocena: 4.7,
      liczbaOcen: 678,
      recenzje: [
        { uzytkownik: 'Julia K.', ocena: 5, komentarz: 'Klasyk, który nigdy nie zawodzi', data: '2024-01-19' },
        { uzytkownik: 'Anna G.', ocena: 4, komentarz: 'Lekki, szybko się wchłania', data: '2024-01-16' },
        { uzytkownik: 'Karolina W.', ocena: 5, komentarz: 'Świetny pod makijaż', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'CeraVe Foaming Facial Cleanser', 
      cena: 49.99, 
      opis: 'Pianka oczyszczająca z ceramidami i kwasem hialuronowym, nie wysusza skóry',
      ocena: 4.8,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Delikatnie oczyszcza, nie podrażnia', data: '2024-01-17' },
        { uzytkownik: 'Natalia K.', ocena: 5, komentarz: 'Idealna do skóry wrażliwej', data: '2024-01-14' },
        { uzytkownik: 'Magdalena S.', ocena: 4, komentarz: 'Dobra cena, świetny efekt', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'La Roche-Posay Effaclar Duo+ SPF30', 
      cena: 79.99, 
      opis: 'Krem przeciwtrądzikowy z filtrem SPF30, redukuje niedoskonałości i chroni przed słońcem',
      ocena: 4.6,
      liczbaOcen: 423,
      recenzje: [
        { uzytkownik: 'Kasia R.', ocena: 5, komentarz: 'Znacznie poprawił stan mojej skóry', data: '2024-01-15' },
        { uzytkownik: 'Beata L.', ocena: 4, komentarz: 'Dobry do skóry problemowej', data: '2024-01-12' },
        { uzytkownik: 'Monika P.', ocena: 5, komentarz: 'Filtr UV to duży plus', data: '2024-01-09' }
      ]
    }
  ],
  'pielegnacja-wlosow': [
    { 
      nazwa: 'Olaplex No.3 Hair Perfector 100ml', 
      cena: 129.99, 
      opis: 'Profesjonalna kuracja odbudowująca, naprawia uszkodzone wiązania w strukturze włosa',
      ocena: 4.9,
      liczbaOcen: 789,
      recenzje: [
        { uzytkownik: 'Anna P.', ocena: 5, komentarz: 'Włosy jak nowe po zniszczeniach!', data: '2024-01-18' },
        { uzytkownik: 'Julia W.', ocena: 5, komentarz: 'Najlepszy produkt do zniszczonych włosów', data: '2024-01-15' },
        { uzytkownik: 'Karolina M.', ocena: 4, komentarz: 'Widoczna poprawa po pierwszym użyciu', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Schwarzkopf Professional BC Bonacure Oil Miracle', 
      cena: 89.99, 
      opis: 'Olejek do włosów z formułą Liquid Diamond, nadaje blask i chroni przed uszkodzeniami',
      ocena: 4.7,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Włosy są miękkie i lśniące', data: '2024-01-17' },
        { uzytkownik: 'Natalia G.', ocena: 4, komentarz: 'Nie obciąża włosów', data: '2024-01-14' },
        { uzytkownik: 'Magdalena R.', ocena: 5, komentarz: 'Cudowny zapach i efekt', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Kerastase Resistance Bain Force Architecte', 
      cena: 159.99, 
      opis: 'Szampon wzmacniający do włosów zniszczonych, odbudowuje i wzmacnia strukturę',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Beata S.', ocena: 5, komentarz: 'Profesjonalna jakość w domu', data: '2024-01-16' },
        { uzytkownik: 'Monika K.', ocena: 5, komentarz: 'Włosy są mocniejsze i zdrowsze', data: '2024-01-13' },
        { uzytkownik: 'Agata L.', ocena: 4, komentarz: 'Drogi, ale bardzo skuteczny', data: '2024-01-10' }
      ]
    }
  ],
  'perfumy-damskie': [
    { 
      nazwa: 'Lancôme La Vie Est Belle EDP 75ml', 
      cena: 429.99, 
      opis: 'Francuski zapach szczęścia z nutami czarnej porzeczki, jaśminu i wanilii',
      ocena: 4.8,
      liczbaOcen: 678,
      recenzje: [
        { uzytkownik: 'Julia S.', ocena: 5, komentarz: 'Zapach szczęścia i radości', data: '2024-01-19' },
        { uzytkownik: 'Anna M.', ocena: 5, komentarz: 'Bardzo kobieco i elegancko', data: '2024-01-16' },
        { uzytkownik: 'Karolina P.', ocena: 4, komentarz: 'Trwały i przyjemny', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Yves Saint Laurent Black Opium EDP 90ml', 
      cena: 399.99, 
      opis: 'Zmysłowe perfumy z nutami kawy, wanilii i kwiatów pomarańczy, idealne na wieczór',
      ocena: 4.9,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Ewa R.', ocena: 5, komentarz: 'Hipnotyzujący zapach kawy i wanilii', data: '2024-01-17' },
        { uzytkownik: 'Natalia W.', ocena: 5, komentarz: 'Mój signature scent', data: '2024-01-14' },
        { uzytkownik: 'Magdalena K.', ocena: 4, komentarz: 'Bardzo charakterystyczny i trwały', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Dior Miss Dior Blooming Bouquet EDT 100ml', 
      cena: 349.99, 
      opis: 'Delikatne, kwiatowe perfumy z nutami peonii i róży, świeże i romantyczne',
      ocena: 4.6,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Beata M.', ocena: 5, komentarz: 'Świeży, wiosenny zapach', data: '2024-01-15' },
        { uzytkownik: 'Monika G.', ocena: 4, komentarz: 'Idealny na co dzień', data: '2024-01-12' },
        { uzytkownik: 'Agnieszka L.', ocena: 5, komentarz: 'Bardzo kobieco i subtelnie', data: '2024-01-09' }
      ]
    }
  ],
  'kosmetyki-naturalne': [
    { 
      nazwa: 'Weleda Calendula Baby Oil 200ml', 
      cena: 49.99, 
      opis: 'Naturalny olejek dla dzieci z nagietkiem, delikatnie pielęgnuje skórę całej rodziny',
      ocena: 4.9,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Idealny dla skóry dziecka i dorosłego', data: '2024-01-18' },
        { uzytkownik: 'Julia P.', ocena: 5, komentarz: '100% naturalny, nie podrażnia', data: '2024-01-15' },
        { uzytkownik: 'Karolina S.', ocena: 4, komentarz: 'Bardzo delikatny i skuteczny', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Dr. Hauschka Rose Day Cream 30ml', 
      cena: 159.99, 
      opis: 'Naturalny krem dzienny z ekstraktem z róży, nawilża i chroni dojrzałą skórę',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Skóra jest napięta i promienna', data: '2024-01-17' },
        { uzytkownik: 'Natalia R.', ocena: 4, komentarz: 'Naturalny skład, piękny zapach', data: '2024-01-14' },
        { uzytkownik: 'Magdalena W.', ocena: 5, komentarz: 'Nie wywołuje alergii', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Lavera Basis Sensitiv Cleansing Gel 125ml', 
      cena: 29.99, 
      opis: 'Żel oczyszczający z bio-aloesem i bio-malwą, dla skóry wrażliwej i normalnej',
      ocena: 4.5,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Beata L.', ocena: 5, komentarz: 'Delikatnie oczyszcza, nie wysusza', data: '2024-01-16' },
        { uzytkownik: 'Monika K.', ocena: 4, komentarz: 'Dobra cena za naturalny produkt', data: '2024-01-13' },
        { uzytkownik: 'Agata G.', ocena: 4, komentarz: 'Idealne dla skóry alergicznej', data: '2024-01-10' }
      ]
    }
  ]
};

// Eksportuj obiekt urody - bez ES6 modules
window.uroda = uroda;