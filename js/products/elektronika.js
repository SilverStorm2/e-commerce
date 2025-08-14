// Produkty elektroniki
const elektronika = {
  'komputery': [
    { 
      nazwa: 'MacBook Air M2', 
      cena: 4999.99, 
      opis: '13.6", 8GB RAM, 256GB SSD',
      ocena: 4.8,
      liczbaOcen: 127,
      recenzje: [
        { uzytkownik: 'Jan K.', ocena: 5, komentarz: 'Świetny laptop, bardzo szybki!', data: '2024-01-15' },
        { uzytkownik: 'Anna M.', ocena: 4, komentarz: 'Dobra jakość, ale drogi', data: '2024-01-10' }
      ]
    },
    { 
      nazwa: 'Dell XPS 13', 
      cena: 3999.99, 
      opis: '13.4", 16GB RAM, 512GB SSD',
      ocena: 4.6,
      liczbaOcen: 89,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 5, komentarz: 'Idealny do pracy', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'HP Pavilion', 
      cena: 2499.99, 
      opis: '15.6", 8GB RAM, 256GB SSD',
      ocena: 4.2,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Marta S.', ocena: 4, komentarz: 'Dobry stosunek ceny do jakości', data: '2024-01-08' }
      ]
    },
    { 
      nazwa: 'Lenovo ThinkPad', 
      cena: 3499.99, 
      opis: '14", 16GB RAM, 512GB SSD',
      ocena: 4.7,
      liczbaOcen: 203,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Profesjonalny laptop', data: '2024-01-14' }
      ]
    },
    { 
      nazwa: 'ASUS ROG', 
      cena: 5999.99, 
      opis: '15.6", 32GB RAM, 1TB SSD',
      ocena: 4.9,
      liczbaOcen: 67,
      recenzje: [
        { uzytkownik: 'Kamil G.', ocena: 5, komentarz: 'Monster do gier!', data: '2024-01-16' }
      ]
    }
  ],
  'smartfony': [
    { 
      nazwa: 'iPhone 15 Pro', 
      cena: 4999.99, 
      opis: '6.1", 128GB, A17 Pro',
      ocena: 4.9,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Najlepszy iPhone ever!', data: '2024-01-17' }
      ]
    },
    { 
      nazwa: 'Samsung Galaxy S24', 
      cena: 3999.99, 
      opis: '6.2", 128GB, Snapdragon 8',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek D.', ocena: 4, komentarz: 'Świetny aparat', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Google Pixel 8', 
      cena: 3499.99, 
      opis: '6.2", 128GB, Google Tensor',
      ocena: 4.5,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Czysty Android', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'OnePlus 12', 
      cena: 2999.99, 
      opis: '6.7", 256GB, Snapdragon 8',
      ocena: 4.4,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Adam R.', ocena: 4, komentarz: 'Szybkie ładowanie', data: '2024-01-09' }
      ]
    },
    { 
      nazwa: 'Xiaomi 14', 
      cena: 2499.99, 
      opis: '6.36", 128GB, Snapdragon 8',
      ocena: 4.3,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Natalia Z.', ocena: 4, komentarz: 'Dobra cena', data: '2024-01-07' }
      ]
    }
  ],
  'audio': [
    { 
      nazwa: 'Sony WH-1000XM5', 
      cena: 1499.99, 
      opis: 'Słuchawki bezprzewodowe ANC',
      ocena: 4.8,
      liczbaOcen: 312,
      recenzje: [
        { uzytkownik: 'Jakub M.', ocena: 5, komentarz: 'Najlepsze ANC', data: '2024-01-18' }
      ]
    },
    { 
      nazwa: 'JBL Flip 6', 
      cena: 399.99, 
      opis: 'Głośnik Bluetooth',
      ocena: 4.2,
      liczbaOcen: 445,
      recenzje: [
        { uzytkownik: 'Monika L.', ocena: 4, komentarz: 'Głośny i przenośny', data: '2024-01-06' }
      ]
    },
    { 
      nazwa: 'Audio-Technica ATH-M50x', 
      cena: 699.99, 
      opis: 'Słuchawki studyjne',
      ocena: 4.6,
      liczbaOcen: 278,
      recenzje: [
        { uzytkownik: 'Filip S.', ocena: 5, komentarz: 'Świetne do muzyki', data: '2024-01-15' }
      ]
    },
    { 
      nazwa: 'Bose QuietComfort', 
      cena: 1299.99, 
      opis: 'Słuchawki z ANC',
      ocena: 4.7,
      liczbaOcen: 198,
      recenzje: [
        { uzytkownik: 'Alicja W.', ocena: 5, komentarz: 'Komfortowe', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Sennheiser HD 660S', 
      cena: 1899.99, 
      opis: 'Słuchawki otwarte',
      ocena: 4.9,
      liczbaOcen: 89,
      recenzje: [
        { uzytkownik: 'Robert K.', ocena: 5, komentarz: 'Audiophile quality', data: '2024-01-16' }
      ]
    }
  ],
  'tv': [
    { 
      nazwa: 'Samsung QLED 65"', 
      cena: 4999.99, 
      opis: '4K QLED, Smart TV',
      ocena: 4.7,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Grzegorz P.', ocena: 5, komentarz: 'Świetny obraz', data: '2024-01-14' }
      ]
    },
    { 
      nazwa: 'LG OLED 55"', 
      cena: 3999.99, 
      opis: '4K OLED, WebOS',
      ocena: 4.8,
      liczbaOcen: 223,
      recenzje: [
        { uzytkownik: 'Dorota M.', ocena: 5, komentarz: 'Czarne są naprawdę czarne', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Sony Bravia 75"', 
      cena: 6999.99, 
      opis: '4K LED, Android TV',
      ocena: 4.6,
      liczbaOcen: 78,
      recenzje: [
        { uzytkownik: 'Wojciech L.', ocena: 4, komentarz: 'Duży ekran', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Philips Ambilight 65"', 
      cena: 3499.99, 
      opis: '4K LED, Ambilight',
      ocena: 4.4,
      liczbaOcen: 134,
      recenzje: [
        { uzytkownik: 'Magdalena S.', ocena: 4, komentarz: 'Fajne efekty świetlne', data: '2024-01-09' }
      ]
    },
    { 
      nazwa: 'TCL 55"', 
      cena: 1999.99, 
      opis: '4K LED, Roku TV',
      ocena: 4.1,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Pawel K.', ocena: 4, komentarz: 'Dobra cena', data: '2024-01-08' }
      ]
    }
  ],
  'gaming': [
    { 
      nazwa: 'PlayStation 5', 
      cena: 2499.99, 
      opis: 'Konsola PS5, 825GB SSD',
      ocena: 4.9,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Mikolaj G.', ocena: 5, komentarz: 'Grafika w 4K!', data: '2024-01-19' }
      ]
    },
    { 
      nazwa: 'Xbox Series X', 
      cena: 2299.99, 
      opis: 'Konsola Xbox, 1TB SSD',
      ocena: 4.8,
      liczbaOcen: 334,
      recenzje: [
        { uzytkownik: 'Bartek R.', ocena: 5, komentarz: 'Game Pass jest świetny', data: '2024-01-17' }
      ]
    },
    { 
      nazwa: 'Nintendo Switch OLED', 
      cena: 1499.99, 
      opis: 'Konsola przenośna',
      ocena: 4.7,
      liczbaOcen: 289,
      recenzje: [
        { uzytkownik: 'Julia M.', ocena: 5, komentarz: 'Idealna do podróży', data: '2024-01-15' }
      ]
    },
    { 
      nazwa: 'Gaming PC RTX 4070', 
      cena: 5999.99, 
      opis: 'Komputer gamingowy',
      ocena: 4.9,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Krzysztof L.', ocena: 5, komentarz: 'Monster do gier', data: '2024-01-18' }
      ]
    },
    { 
      nazwa: 'Steam Deck', 
      cena: 1999.99, 
      opis: 'Przenośna konsola PC',
      ocena: 4.5,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Tomek W.', ocena: 4, komentarz: 'Fajna koncepcja', data: '2024-01-12' }
      ]
    }
  ],
  'smart-home': [
    { 
      nazwa: 'Amazon Echo Dot', 
      cena: 199.99, 
      opis: 'Głośnik inteligentny',
      ocena: 4.3,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Aneta K.', ocena: 4, komentarz: 'Alexa jest pomocna', data: '2024-01-10' }
      ]
    },
    { 
      nazwa: 'Google Nest Hub', 
      cena: 399.99, 
      opis: 'Ekran inteligentny',
      ocena: 4.4,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Michal S.', ocena: 4, komentarz: 'Ładny ekran', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Philips Hue Starter Kit', 
      cena: 599.99, 
      opis: 'Inteligentne oświetlenie',
      ocena: 4.6,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Kasia P.', ocena: 5, komentarz: 'Świetne kolory', data: '2024-01-16' }
      ]
    },
    { 
      nazwa: 'Ring Video Doorbell', 
      cena: 299.99, 
      opis: 'Dzwonek wideo',
      ocena: 4.2,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek D.', ocena: 4, komentarz: 'Bezpieczeństwo', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Nest Thermostat', 
      cena: 899.99, 
      opis: 'Termostat inteligentny',
      ocena: 4.5,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 5, komentarz: 'Oszczędza energię', data: '2024-01-14' }
      ]
    }
  ]
};

// Eksportuj obiekt elektroniki
export { elektronika };

// Dla kompatybilności z CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = elektronika;
}
