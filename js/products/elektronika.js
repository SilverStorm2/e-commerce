// Produkty elektroniki
const elektronika = {
  'komputery': [
    { 
      nazwa: 'MacBook Air M3 13"', 
      cena: 5299.99, 
      opis: 'Najnowszy chip M3, 8GB RAM, 256GB SSD, 13.6" Liquid Retina, do 18h baterii',
      ocena: 4.9,
      liczbaOcen: 312,
      recenzje: [
        { uzytkownik: 'Jan K.', ocena: 5, komentarz: 'Niesamowita wydajność i cichy!', data: '2024-01-18' },
        { uzytkownik: 'Anna M.', ocena: 5, komentarz: 'Idealne do pracy kreatywnej', data: '2024-01-15' },
        { uzytkownik: 'Tomasz W.', ocena: 4, komentarz: 'Świetna bateria, ale drogi', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Dell XPS 13 Plus', 
      cena: 4199.99, 
      opis: 'Intel Core i7-13700H, 16GB RAM, 512GB SSD, 13.4" 4K OLED, Windows 11 Pro',
      ocena: 4.7,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Ekran OLED jest przepiękny!', data: '2024-01-16' },
        { uzytkownik: 'Marek D.', ocena: 4, komentarz: 'Bardzo szybki, ale grzeje się', data: '2024-01-13' },
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Idealne do programowania', data: '2024-01-10' }
      ]
    },
    { 
      nazwa: 'Komputer Gaming RTX 4070', 
      cena: 6999.99, 
      opis: 'AMD Ryzen 7 7700X, 32GB DDR5, RTX 4070 12GB, 1TB NVMe SSD, gotowy do gier 4K',
      ocena: 4.8,
      liczbaOcen: 198,
      recenzje: [
        { uzytkownik: 'Kamil G.', ocena: 5, komentarz: 'Monster do gier! Wszystko na ultra', data: '2024-01-17' },
        { uzytkownik: 'Łukasz S.', ocena: 5, komentarz: 'Świetny do streamingu', data: '2024-01-14' },
        { uzytkownik: 'Michał R.', ocena: 4, komentarz: 'Dobra cena za wydajność', data: '2024-01-11' }
      ]
    }
  ],
  'smartfony': [
    { 
      nazwa: 'iPhone 15 Pro Max', 
      cena: 5999.99, 
      opis: '6.7" Super Retina XDR, chip A17 Pro, 256GB, system kamer Pro z 5x zoomem',
      ocena: 4.9,
      liczbaOcen: 445,
      recenzje: [
        { uzytkownik: 'Julia M.', ocena: 5, komentarz: 'Najlepszy telefon jaki miałam!', data: '2024-01-19' },
        { uzytkownik: 'Adam K.', ocena: 5, komentarz: 'Aparat robi niesamowite zdjęcia', data: '2024-01-16' },
        { uzytkownik: 'Natalia W.', ocena: 4, komentarz: 'Drogi, ale wart swojej ceny', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Samsung Galaxy S24 Ultra', 
      cena: 5499.99, 
      opis: '6.8" Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 512GB, S Pen, aparat 200MP',
      ocena: 4.8,
      liczbaOcen: 378,
      recenzje: [
        { uzytkownik: 'Marek D.', ocena: 5, komentarz: 'S Pen to genialne rozwiązanie', data: '2024-01-17' },
        { uzytkownik: 'Ewa P.', ocena: 4, komentarz: 'Świetny do pracy i multimediów', data: '2024-01-14' },
        { uzytkownik: 'Tomasz L.', ocena: 5, komentarz: 'Bateria trzyma całe dwa dni', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Google Pixel 8 Pro', 
      cena: 4299.99, 
      opis: '6.7" LTPO OLED, Google Tensor G3, 256GB, Magic Eraser, 5 lat aktualizacji',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna S.', ocena: 5, komentarz: 'Czysty Android i świetne AI', data: '2024-01-15' },
        { uzytkownik: 'Piotr G.', ocena: 4, komentarz: 'Najlepsze zdjęcia nocne', data: '2024-01-11' },
        { uzytkownik: 'Kasia R.', ocena: 5, komentarz: 'Funkcje AI są przyszłością', data: '2024-01-09' }
      ]
    }
  ],
  'audio': [
    { 
      nazwa: 'AirPods Pro 2 (USB-C)', 
      cena: 1199.99, 
      opis: 'Aktywna redukcja szumów, tryb przezroczysty, chip H2, ładowanie USB-C i MagSafe',
      ocena: 4.8,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Michał K.', ocena: 5, komentarz: 'ANC działa fenomenalnie!', data: '2024-01-18' },
        { uzytkownik: 'Julia W.', ocena: 5, komentarz: 'Wygodne przez cały dzień', data: '2024-01-15' },
        { uzytkownik: 'Adam R.', ocena: 4, komentarz: 'Świetne do sportu', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Sony WH-1000XM5', 
      cena: 1599.99, 
      opis: 'Bezprzewodowe słuchawki nauszne, najlepsza redukcja szumów, 30h baterii, LDAC',
      ocena: 4.9,
      liczbaOcen: 423,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Dźwięk studyjnej jakości', data: '2024-01-17' },
        { uzytkownik: 'Tomasz P.', ocena: 5, komentarz: 'Cisza jak w studiu nagraniowym', data: '2024-01-14' },
        { uzytkownik: 'Ewa L.', ocena: 4, komentarz: 'Idealne do długich podróży', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'JBL Boombox 3', 
      cena: 2299.99, 
      opis: 'Przenośny głośnik Bluetooth, moc 180W, IP67, 24h odtwarzania, bas JBL Original Pro',
      ocena: 4.7,
      liczbaOcen: 289,
      recenzje: [
        { uzytkownik: 'Łukasz G.', ocena: 5, komentarz: 'Bass jak z klubu!', data: '2024-01-16' },
        { uzytkownik: 'Natalia K.', ocena: 4, komentarz: 'Świetne na imprezy w ogrodzie', data: '2024-01-13' },
        { uzytkownik: 'Marek S.', ocena: 5, komentarz: 'Wytrzymały i głośny', data: '2024-01-10' }
      ]
    }
  ],
  'tv': [
    { 
      nazwa: 'LG OLED C3 55"', 
      cena: 5499.99, 
      opis: '55" 4K OLED evo, α9 Gen6 AI, webOS 23, HDMI 2.1 120Hz, idealne do PS5/Xbox',
      ocena: 4.9,
      liczbaOcen: 334,
      recenzje: [
        { uzytkownik: 'Jan P.', ocena: 5, komentarz: 'Obraz jak w kinie!', data: '2024-01-18' },
        { uzytkownik: 'Anna G.', ocena: 5, komentarz: 'Czarna czerń OLED jest niesamowita', data: '2024-01-15' },
        { uzytkownik: 'Tomasz M.', ocena: 4, komentarz: 'Perfekt do gamingu', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Samsung QN90C Neo QLED 65"', 
      cena: 7299.99, 
      opis: '65" 4K Neo QLED, Quantum Matrix Technology, Tizen OS, Object Tracking Sound+',
      ocena: 4.8,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Karolina R.', ocena: 5, komentarz: 'Kolory są żywe i naturalne', data: '2024-01-17' },
        { uzytkownik: 'Michał L.', ocena: 4, komentarz: 'Świetny do filmów HDR', data: '2024-01-14' },
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Design premium i funkcje smart', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Sony BRAVIA XR A80L 77"', 
      cena: 8999.99, 
      opis: '77" 4K OLED, Cognitive Processor XR, Perfect for PlayStation 5, Google TV',
      ocena: 4.7,
      liczbaOcen: 198,
      recenzje: [
        { uzytkownik: 'Adam W.', ocena: 5, komentarz: 'Największy ekran w salonie!', data: '2024-01-16' },
        { uzytkownik: 'Julia S.', ocena: 4, komentarz: 'Świetna integracja z PS5', data: '2024-01-13' },
        { uzytkownik: 'Piotr D.', ocena: 5, komentarz: 'Dźwięk Acoustic Surface Audio', data: '2024-01-10' }
      ]
    }
  ],
  'gaming': [
    { 
      nazwa: 'PlayStation 5 Pro', 
      cena: 3499.99, 
      opis: 'Najnowsza konsola Sony, 2TB SSD, ray tracing, 4K 120fps, kontroler DualSense',
      ocena: 4.9,
      liczbaOcen: 512,
      recenzje: [
        { uzytkownik: 'Kamil G.', ocena: 5, komentarz: 'Grafika na najwyższym poziomie!', data: '2024-01-19' },
        { uzytkownik: 'Łukasz P.', ocena: 5, komentarz: 'Loading times są błyskawiczne', data: '2024-01-16' },
        { uzytkownik: 'Marek K.', ocena: 4, komentarz: 'Kontroler ma niesamowite wibracje', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Xbox Series X', 
      cena: 2899.99, 
      opis: '1TB NVMe SSD, 4K 120fps, ray tracing, Game Pass Ultimate na 3 miesiące',
      ocena: 4.8,
      liczbaOcen: 445,
      recenzje: [
        { uzytkownik: 'Tomasz R.', ocena: 5, komentarz: 'Game Pass to najlepsza usługa!', data: '2024-01-17' },
        { uzytkownik: 'Anna M.', ocena: 4, komentarz: 'Bardzo cicha i wydajna', data: '2024-01-14' },
        { uzytkownik: 'Michał S.', ocena: 5, komentarz: 'Backward compatibility działa świetnie', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'ASUS ROG Ally Z1 Extreme', 
      cena: 3199.99, 
      opis: 'Handheld PC, AMD Z1 Extreme, 7" 120Hz, 512GB SSD, Windows 11, Steam Deck killer',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Julia K.', ocena: 5, komentarz: 'PC games w podróży!', data: '2024-01-15' },
        { uzytkownik: 'Adam L.', ocena: 4, komentarz: 'Świetna alternatywa dla Steam Deck', data: '2024-01-12' },
        { uzytkownik: 'Natalia G.', ocena: 4, komentarz: 'Windows 11 daje pełną swobodę', data: '2024-01-09' }
      ]
    }
  ],
  'smart-home': [
    { 
      nazwa: 'Amazon Echo Show 15', 
      cena: 1299.99, 
      opis: '15.6" Full HD, Alexa Built-in, centrum sterowania smart home, kamera 5MP',
      ocena: 4.7,
      liczbaOcen: 289,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Centrum dowodzenia całym domem!', data: '2024-01-18' },
        { uzytkownik: 'Tomasz W.', ocena: 4, komentarz: 'Świetne do wideorozmów rodzinnych', data: '2024-01-15' },
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Alexa rozumie wszystko', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Philips Hue Bridge + 4 żarówki', 
      cena: 899.99, 
      opis: 'Zestaw startowy, 16 milionów kolorów, sterowanie aplikacją, kompatybilne z Alexa',
      ocena: 4.8,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Jan R.', ocena: 5, komentarz: 'Oświetlenie przyszłości!', data: '2024-01-17' },
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Automatyzacja działa perfekcyjnie', data: '2024-01-14' },
        { uzytkownik: 'Michał G.', ocena: 4, komentarz: 'Łatwe w instalacji', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Ring Video Doorbell Pro 2', 
      cena: 799.99, 
      opis: 'Dzwonek z kamerą 1536p HDR, wykrywanie ruchu 3D, night vision, zasilanie przewodowe',
      ocena: 4.6,
      liczbaOcen: 334,
      recenzje: [
        { uzytkownik: 'Marek D.', ocena: 5, komentarz: 'Bezpieczeństwo na najwyższym poziomie', data: '2024-01-16' },
        { uzytkownik: 'Julia S.', ocena: 4, komentarz: 'Widzę kto przychodzi nawet z pracy', data: '2024-01-13' },
        { uzytkownik: 'Łukasz K.', ocena: 5, komentarz: 'Jakość wideo jest świetna', data: '2024-01-10' }
      ]
    }
  ]
};

// Eksportuj obiekt elektroniki - bez ES6 modules
window.elektronika = elektronika;