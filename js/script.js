// Obiekt produktów elektroniki z ocenami i recenzjami
const produkty = {
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
  ],
  'casual': [
    { 
      nazwa: 'Zestaw casual - Bluza + Spodnie', 
      cena: 299.99, 
      opis: 'Wygodny zestaw na co dzień',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Świetnie się nosi!', data: '2024-01-15' },
        { uzytkownik: 'Marta S.', ocena: 4, komentarz: 'Wygodne i stylowe', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Koszulka bawełniana', 
      cena: 89.99, 
      opis: '100% bawełna, różne kolory',
      ocena: 4.4,
      liczbaOcen: 567,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-10' }
      ]
    },
    { 
      nazwa: 'Spodnie jeansowe', 
      cena: 199.99, 
      opis: 'Klasyczne jeansy, stretch',
      ocena: 4.5,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Idealnie dopasowane', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Bluza z kapturem', 
      cena: 159.99, 
      opis: 'Ciepła bluza na chłodne dni',
      ocena: 4.7,
      liczbaOcen: 289,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Świetna jakość', data: '2024-01-16' }
      ]
    },
    { 
      nazwa: 'Sukienka casual', 
      cena: 249.99, 
      opis: 'Elegancka sukienka na każdą okazję',
      ocena: 4.8,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Pięknie leży', data: '2024-01-14' }
      ]
    }
  ],
  'szafa': [
    { 
      nazwa: 'Garnitur klasyczny', 
      cena: 899.99, 
      opis: 'Elegancki garnitur na ważne okazje',
      ocena: 4.9,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Marek D.', ocena: 5, komentarz: 'Profesjonalny wygląd', data: '2024-01-17' }
      ]
    },
    { 
      nazwa: 'Sukienka wieczorowa', 
      cena: 599.99, 
      opis: 'Elegancka sukienka na wieczór',
      ocena: 4.7,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Julia P.', ocena: 5, komentarz: 'Czuję się w niej pięknie', data: '2024-01-15' }
      ]
    },
    { 
      nazwa: 'Koszula formalna', 
      cena: 199.99, 
      opis: 'Koszula do garnituru',
      ocena: 4.5,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Adam R.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Spodnie eleganckie', 
      cena: 299.99, 
      opis: 'Spodnie do garnituru',
      ocena: 4.6,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Kamil G.', ocena: 5, komentarz: 'Idealne dopasowanie', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Marynarka casual', 
      cena: 399.99, 
      opis: 'Elegancka marynarka',
      ocena: 4.4,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Pawel K.', ocena: 4, komentarz: 'Stylowa', data: '2024-01-12' }
      ]
    }
  ],
  'dodatki': [
    { 
      nazwa: 'Torebka skórzana', 
      cena: 399.99, 
      opis: 'Elegancka torebka skórzana',
      ocena: 4.8,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Anna M.', ocena: 5, komentarz: 'Piękna jakość skóry', data: '2024-01-16' }
      ]
    },
    { 
      nazwa: 'Buty eleganckie', 
      cena: 299.99, 
      opis: 'Klasyczne buty formalne',
      ocena: 4.6,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz L.', ocena: 5, komentarz: 'Wygodne i eleganckie', data: '2024-01-14' }
      ]
    },
    { 
      nazwa: 'Pasek skórzany', 
      cena: 89.99, 
      opis: 'Klasyczny pasek skórzany',
      ocena: 4.3,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Marek S.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-10' }
      ]
    },
    { 
      nazwa: 'Szal jedwabny', 
      cena: 159.99, 
      opis: 'Elegancki szal jedwabny',
      ocena: 4.7,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Karolina W.', ocena: 5, komentarz: 'Delikatny i piękny', data: '2024-01-17' }
      ]
    },
    { 
      nazwa: 'Portfel skórzany', 
      cena: 199.99, 
      opis: 'Elegancki portfel skórzany',
      ocena: 4.5,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Piotr K.', ocena: 4, komentarz: 'Praktyczny', data: '2024-01-13' }
      ]
    }
  ],
  'miejski': [
    { 
      nazwa: 'Kurtka miejska', 
      cena: 449.99, 
      opis: 'Stylowa kurtka na miasto',
      ocena: 4.7,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Idealna na jesień', data: '2024-01-15' }
      ]
    },
    { 
      nazwa: 'Spodnie miejskie', 
      cena: 249.99, 
      opis: 'Wygodne spodnie miejskie',
      ocena: 4.4,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Adam P.', ocena: 4, komentarz: 'Wygodne', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Buty miejskie', 
      cena: 199.99, 
      opis: 'Wygodne buty na miasto',
      ocena: 4.6,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marta K.', ocena: 5, komentarz: 'Świetnie się chodzą', data: '2024-01-14' }
      ]
    },
    { 
      nazwa: 'Plecak miejski', 
      cena: 159.99, 
      opis: 'Stylowy plecak miejski',
      ocena: 4.3,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Tomasz R.', ocena: 4, komentarz: 'Praktyczny', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Czapka miejska', 
      cena: 79.99, 
      opis: 'Stylowa czapka miejska',
      ocena: 4.2,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Kasia L.', ocena: 4, komentarz: 'Ciepła', data: '2024-01-16' }
      ]
    }
  ],
  'akcesoria': [
    { 
      nazwa: 'Okulary przeciwsłoneczne', 
      cena: 299.99, 
      opis: 'Stylowe okulary przeciwsłoneczne',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Julia M.', ocena: 5, komentarz: 'Świetna ochrona', data: '2024-01-17' }
      ]
    },
    { 
      nazwa: 'Biżuteria srebrna', 
      cena: 199.99, 
      opis: 'Elegancka biżuteria srebrna',
      ocena: 4.6,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Piękna', data: '2024-01-15' }
      ]
    },
    { 
      nazwa: 'Zegarek elegancki', 
      cena: 599.99, 
      opis: 'Klasyczny zegarek elegancki',
      ocena: 4.9,
      liczbaOcen: 89,
      recenzje: [
        { uzytkownik: 'Marek D.', ocena: 5, komentarz: 'Precyzyjny', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Naszyjnik złoty', 
      cena: 399.99, 
      opis: 'Elegancki naszyjnik złoty',
      ocena: 4.7,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Wspaniały', data: '2024-01-16' }
      ]
    },
    { 
      nazwa: 'Bransoletka skórzana', 
      cena: 129.99, 
      opis: 'Stylowa bransoletka skórzana',
      ocena: 4.4,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Ewa S.', ocena: 4, komentarz: 'Ładna', data: '2024-01-12' }
      ]
    }
  ],
  'perfumy': [
    { 
      nazwa: 'Perfumy damskie', 
      cena: 299.99, 
      opis: 'Eleganckie perfumy damskie',
      ocena: 4.8,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Anna W.', ocena: 5, komentarz: 'Cudowny zapach', data: '2024-01-17' }
      ]
    },
    { 
      nazwa: 'Woda toaletowa męska', 
      cena: 199.99, 
      opis: 'Męska woda toaletowa',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Tomasz K.', ocena: 5, komentarz: 'Świetny zapach', data: '2024-01-15' }
      ]
    },
    { 
      nazwa: 'Kosmetyki pielęgnacyjne', 
      cena: 149.99, 
      opis: 'Zestaw kosmetyków pielęgnacyjnych',
      ocena: 4.5,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marta P.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Szampon i odżywka', 
      cena: 89.99, 
      opis: 'Zestaw do włosów',
      ocena: 4.3,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 4, komentarz: 'Włosy są miękkie', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Krem nawilżający', 
      cena: 79.99, 
      opis: 'Krem nawilżający do twarzy',
      ocena: 4.7,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Świetnie nawilża', data: '2024-01-14' }
      ]
    }
  ],
  'pilka-nozna': [
    {
      nazwa: 'Piłka nożna profesjonalna',
      cena: 299.99,
      opis: 'Piłka do gry w piłkę nożną',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Marek K.', ocena: 5, komentarz: 'Świetna piłka do treningu!', data: '2024-01-15' },
        { uzytkownik: 'Tomasz S.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Buty korki piłkarskie',
      cena: 399.99,
      opis: 'Profesjonalne buty do piłki nożnej',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Adam W.', ocena: 5, komentarz: 'Świetna przyczepność', data: '2024-01-17' }
      ]
    },
    {
      nazwa: 'Strój piłkarski',
      cena: 199.99,
      opis: 'Kompletny strój do piłki nożnej',
      ocena: 4.6,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Piotr M.', ocena: 4, komentarz: 'Wygodny materiał', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Ochraniacze piłkarskie',
      cena: 89.99,
      opis: 'Ochraniacze na golenie',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Kamil L.', ocena: 5, komentarz: 'Dobra ochrona', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Rękawice bramkarskie',
      cena: 149.99,
      opis: 'Profesjonalne rękawice bramkarskie',
      ocena: 4.8,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Jan B.', ocena: 5, komentarz: 'Świetne trzymanie piłki', data: '2024-01-13' }
      ]
    }
  ],
  'bieganie': [
    {
      nazwa: 'Buty do biegania',
      cena: 449.99,
      opis: 'Profesjonalne buty do biegania',
      ocena: 4.9,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Anna R.', ocena: 5, komentarz: 'Świetne amortyzacja!', data: '2024-01-17' },
        { uzytkownik: 'Marta K.', ocena: 4, komentarz: 'Wygodne na długie dystanse', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Odzież do biegania',
      cena: 299.99,
      opis: 'Kompletna odzież do biegania',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Oddychający materiał', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Zegarek GPS',
      cena: 899.99,
      opis: 'Zegarek z GPS do biegania',
      ocena: 4.8,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Tomasz P.', ocena: 5, komentarz: 'Dokładne pomiary', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Bidon sportowy',
      cena: 79.99,
      opis: 'Bidon do nawodnienia podczas treningu',
      ocena: 4.6,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Karolina S.', ocena: 4, komentarz: 'Praktyczny', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Czapka do biegania',
      cena: 59.99,
      opis: 'Czapka termoaktywna do biegania',
      ocena: 4.5,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Piotr W.', ocena: 5, komentarz: 'Świetnie chroni przed zimnem', data: '2024-01-13' }
      ]
    }
  ],
  'fitness-silownia': [
    {
      nazwa: 'Hantle regulowane',
      cena: 399.99,
      opis: 'Zestaw hantli regulowanych',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek F.', ocena: 5, komentarz: 'Świetne do treningu w domu!', data: '2024-01-17' },
        { uzytkownik: 'Adam K.', ocena: 4, komentarz: 'Solidna jakość', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Gumy oporowe',
      cena: 149.99,
      opis: 'Zestaw gum oporowych',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Tomasz M.', ocena: 5, komentarz: 'Wielofunkcyjne', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Mata do ćwiczeń',
      cena: 89.99,
      opis: 'Mata do ćwiczeń fitness',
      ocena: 4.7,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Anna L.', ocena: 4, komentarz: 'Wygodna do ćwiczeń', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Ławka treningowa',
      cena: 599.99,
      opis: 'Ławka do ćwiczeń siłowych',
      ocena: 4.9,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Kamil S.', ocena: 5, komentarz: 'Profesjonalna jakość', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Skakanka',
      cena: 49.99,
      opis: 'Skakanka do cardio',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 4, komentarz: 'Dobra do treningu cardio', data: '2024-01-12' }
      ]
    }
  ],
  'sporty-zimowe': [
    {
      nazwa: 'Narty zjazdowe',
      cena: 1299.99,
      opis: 'Profesjonalne narty zjazdowe',
      ocena: 4.9,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Jan S.', ocena: 5, komentarz: 'Świetne na stoku!', data: '2024-01-17' },
        { uzytkownik: 'Marek W.', ocena: 4, komentarz: 'Dobra kontrola', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Snowboard',
      cena: 899.99,
      opis: 'Snowboard do freestyle',
      ocena: 4.7,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Tomasz K.', ocena: 5, komentarz: 'Świetny do trików', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Kask narciarski',
      cena: 299.99,
      opis: 'Kask ochronny do narciarstwa',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna M.', ocena: 5, komentarz: 'Bezpieczny i wygodny', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Gogle narciarskie',
      cena: 199.99,
      opis: 'Gogle z filtrem UV',
      ocena: 4.6,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 4, komentarz: 'Dobra widoczność', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Odzież termiczna',
      cena: 399.99,
      opis: 'Kompletna odzież termiczna',
      ocena: 4.7,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Karolina W.', ocena: 5, komentarz: 'Świetnie chroni przed zimnem', data: '2024-01-12' }
      ]
    }
  ],
  'sporty-wodne': [
    {
      nazwa: 'Kajak jednomiejscowy',
      cena: 799.99,
      opis: 'Kajak do rekreacji',
      ocena: 4.8,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Marek P.', ocena: 5, komentarz: 'Świetny do spływów!', data: '2024-01-17' },
        { uzytkownik: 'Tomasz S.', ocena: 4, komentarz: 'Stabilny na wodzie', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Deska SUP',
      cena: 599.99,
      opis: 'Deska do stand up paddle',
      ocena: 4.7,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Świetna zabawa na wodzie', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Pianka neoprenowa',
      cena: 349.99,
      opis: 'Pianka do sportów wodnych',
      ocena: 4.6,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 4, komentarz: 'Dobra izolacja', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Kamizelka ratunkowa',
      cena: 199.99,
      opis: 'Kamizelka ratunkowa',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Piotr W.', ocena: 5, komentarz: 'Bezpieczeństwo przede wszystkim', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Wiosło do kajaka',
      cena: 149.99,
      opis: 'Profesjonalne wiosło',
      ocena: 4.5,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Kamil L.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-12' }
      ]
    }
  ],
  'turystyka-outdoor': [
    {
      nazwa: 'Plecak turystyczny',
      cena: 299.99,
      opis: 'Plecak 60L do turystyki',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Jan M.', ocena: 5, komentarz: 'Świetny na długie wyprawy!', data: '2024-01-17' },
        { uzytkownik: 'Marek K.', ocena: 4, komentarz: 'Wygodny do noszenia', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Namiot 4-osobowy',
      cena: 499.99,
      opis: 'Namiot do kempingu',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz P.', ocena: 5, komentarz: 'Łatwy w montażu', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Śpiwór',
      cena: 199.99,
      opis: 'Śpiwór do spania w namiocie',
      ocena: 4.6,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Anna S.', ocena: 4, komentarz: 'Ciepły i wygodny', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Kijki trekkingowe',
      cena: 149.99,
      opis: 'Kijki do wędrówek',
      ocena: 4.8,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 5, komentarz: 'Świetne wsparcie na szlaku', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Latarka czołowa',
      cena: 89.99,
      opis: 'Latarka LED na czoło',
      ocena: 4.5,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Piotr K.', ocena: 4, komentarz: 'Jasne światło', data: '2024-01-12' }
      ]
    }
  ],
  'salon': [
    {
      nazwa: 'Kanapa 3-osobowa',
      cena: 2499.99,
      opis: 'Wygodna kanapa do salonu',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Świetna jakość i wygoda!', data: '2024-01-17' },
        { uzytkownik: 'Marek S.', ocena: 4, komentarz: 'Ładnie wygląda w salonie', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Stolik kawowy',
      cena: 599.99,
      opis: 'Elegancki stolik kawowy',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Doskonała jakość drewna', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Lampa sufitowa',
      cena: 399.99,
      opis: 'Nowoczesna lampa sufitowa',
      ocena: 4.6,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 4, komentarz: 'Świetne oświetlenie', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Dywany dekoracyjne',
      cena: 299.99,
      opis: 'Dywany do salonu',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 5, komentarz: 'Ładny wzór i kolory', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Rośliny w donicach',
      cena: 149.99,
      opis: 'Rośliny doniczkowe do salonu',
      ocena: 4.8,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Karolina S.', ocena: 5, komentarz: 'Świetnie ożywiają wnętrze', data: '2024-01-12' }
      ]
    }
  ],
  'sypialnia': [
    {
      nazwa: 'Łóżko małżeńskie',
      cena: 1899.99,
      opis: 'Komfortowe łóżko małżeńskie',
      ocena: 4.9,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Jan M.', ocena: 5, komentarz: 'Świetny sen gwarantowany!', data: '2024-01-17' },
        { uzytkownik: 'Marta K.', ocena: 4, komentarz: 'Wygodne i ładne', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Pościel bawełniana',
      cena: 299.99,
      opis: 'Komplet pościeli bawełnianej',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Adam W.', ocena: 5, komentarz: 'Miękka i przyjemna', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Lampka nocna',
      cena: 199.99,
      opis: 'Elegancka lampka nocna',
      ocena: 4.6,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Tomasz P.', ocena: 4, komentarz: 'Ładne światło', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Szafa garderobiana',
      cena: 1299.99,
      opis: 'Przestronna szafa garderobiana',
      ocena: 4.8,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Anna L.', ocena: 5, komentarz: 'Dużo miejsca na ubrania', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Puszyste poduszki',
      cena: 89.99,
      opis: 'Dekoracyjne poduszki do sypialni',
      ocena: 4.5,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 4, komentarz: 'Miękkie i ładne', data: '2024-01-12' }
      ]
    }
  ],
  'kuchnia': [
    {
      nazwa: 'Zestaw garnków',
      cena: 799.99,
      opis: 'Profesjonalny zestaw garnków',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek F.', ocena: 5, komentarz: 'Świetna jakość gotowania!', data: '2024-01-17' },
        { uzytkownik: 'Adam K.', ocena: 4, komentarz: 'Solidne garnki', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Naczynia ceramiczne',
      cena: 399.99,
      opis: 'Stylowe naczynia ceramiczne',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Tomasz M.', ocena: 5, komentarz: 'Ładne wzory', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Blender kuchenny',
      cena: 299.99,
      opis: 'Profesjonalny blender',
      ocena: 4.6,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Anna L.', ocena: 4, komentarz: 'Szybki i wydajny', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Deski do krojenia',
      cena: 149.99,
      opis: 'Zestaw desek do krojenia',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Kamil S.', ocena: 5, komentarz: 'Dobra jakość drewna', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Dekoracje kuchenne',
      cena: 199.99,
      opis: 'Dekoracje do kuchni',
      ocena: 4.8,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Świetnie ozdabiają kuchnię', data: '2024-01-12' }
      ]
    }
  ],
  'lazienka': [
    {
      nazwa: 'Zestaw ręczników',
      cena: 299.99,
      opis: 'Komplet ręczników łazienkowych',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Jan S.', ocena: 5, komentarz: 'Miękkie i chłonne!', data: '2024-01-17' },
        { uzytkownik: 'Marek W.', ocena: 4, komentarz: 'Ładne kolory', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Świece zapachowe',
      cena: 89.99,
      opis: 'Relaksujące świece zapachowe',
      ocena: 4.7,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Tomasz K.', ocena: 5, komentarz: 'Przyjemny zapach', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Pojemniki na kosmetyki',
      cena: 199.99,
      opis: 'Eleganckie pojemniki na kosmetyki',
      ocena: 4.6,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Anna M.', ocena: 4, komentarz: 'Praktyczne i ładne', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Mata łazienkowa',
      cena: 149.99,
      opis: 'Miękka mata łazienkowa',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 5, komentarz: 'Przyjemna w dotyku', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Lustro łazienkowe',
      cena: 399.99,
      opis: 'Duże lustro łazienkowe',
      ocena: 4.8,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Karolina W.', ocena: 5, komentarz: 'Świetna jakość odbicia', data: '2024-01-12' }
      ]
    }
  ],
  'pokoj-dzienny': [
    {
      nazwa: 'Obrazy na ścianę',
      cena: 599.99,
      opis: 'Dekoracyjne obrazy na ścianę',
      ocena: 4.8,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Marek P.', ocena: 5, komentarz: 'Świetnie ozdabiają pokój!', data: '2024-01-17' },
        { uzytkownik: 'Tomasz S.', ocena: 4, komentarz: 'Ładne kolory', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Półki na książki',
      cena: 349.99,
      opis: 'Stylowe półki na książki',
      ocena: 4.7,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Dużo miejsca na książki', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Fotel bujany',
      cena: 899.99,
      opis: 'Wygodny fotel bujany',
      ocena: 4.6,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 4, komentarz: 'Przyjemne bujanie', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Dekoracje na półki',
      cena: 199.99,
      opis: 'Dekoracyjne bibeloty',
      ocena: 4.5,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Piotr W.', ocena: 5, komentarz: 'Ładne dodatki', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Lampa stojąca',
      cena: 449.99,
      opis: 'Elegancka lampa stojąca',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Kamil L.', ocena: 5, komentarz: 'Świetne oświetlenie', data: '2024-01-12' }
      ]
    }
  ],
  'ogrod': [
    {
      nazwa: 'Meble ogrodowe',
      cena: 1299.99,
      opis: 'Komplet mebli ogrodowych',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Jan M.', ocena: 5, komentarz: 'Świetne na taras!', data: '2024-01-17' },
        { uzytkownik: 'Marek K.', ocena: 4, komentarz: 'Wygodne siedzenie', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Lampki ogrodowe',
      cena: 299.99,
      opis: 'Dekoracyjne lampki ogrodowe',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz P.', ocena: 5, komentarz: 'Ładnie oświetlają ogród', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Rośliny w donicach',
      cena: 399.99,
      opis: 'Rośliny do ogrodu i na taras',
      ocena: 4.6,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Anna S.', ocena: 4, komentarz: 'Ładne rośliny', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Grill ogrodowy',
      cena: 799.99,
      opis: 'Profesjonalny grill ogrodowy',
      ocena: 4.8,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 5, komentarz: 'Świetne grillowanie', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Parasol ogrodowy',
      cena: 249.99,
      opis: 'Parasol do ogrodu',
      ocena: 4.5,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Piotr K.', ocena: 4, komentarz: 'Dobra ochrona przed słońcem', data: '2024-01-12' }
      ]
    }
  ]
};

// Koszyk - przechowuje produkty dodane przez użytkownika
let koszyk = [];

// Funkcja tworząca gwiazdki
function stworzGwiazdki(ocena) {
  const pelneGwiazdki = Math.floor(ocena);
  const polowaGwiazdka = ocena % 1 >= 0.5;
  const pusteGwiazdki = 5 - pelneGwiazdki - (polowaGwiazdka ? 1 : 0);
  
  let gwiazdkiHTML = '';
  
  // Pełne gwiazdki
  for (let i = 0; i < pelneGwiazdki; i++) {
    gwiazdkiHTML += '<span class="gwiazdka pelna">★</span>';
  }
  
  // Połowa gwiazdki
  if (polowaGwiazdka) {
    gwiazdkiHTML += '<span class="gwiazdka polowa">☆</span>';
  }
  
  // Puste gwiazdki
  for (let i = 0; i < pusteGwiazdki; i++) {
    gwiazdkiHTML += '<span class="gwiazdka pusta">☆</span>';
  }
  
  return gwiazdkiHTML;
}

// Funkcja tworząca menu z ocenami
function pokazMenu(kategoria, przycisk) {
  console.log('pokazMenu wywołane z kategorią:', kategoria);
  const listaProduktow = produkty[kategoria];
  if (!listaProduktow) {
    console.log('Nie znaleziono produktów dla kategorii:', kategoria);
    return;
  }
  console.log('Znaleziono produkty:', listaProduktow.length);

  // Usuń istniejące menu i overlay
  const stareMenu = document.querySelectorAll('.menu-produktow');
  const stareOverlay = document.querySelectorAll('.menu-overlay');
  stareMenu.forEach(menu => menu.remove());
  stareOverlay.forEach(overlay => overlay.remove());

  // Sprawdź czy menu już jest otwarte
  const istniejeMenu = document.querySelector('.menu-produktow');
  if (istniejeMenu) {
    istniejeMenu.remove();
    document.querySelector('.menu-overlay').remove();
    return;
  }

  // Utwórz overlay (tło)
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '1999';
  
  // Utwórz nowe menu
  const menu = document.createElement('div');
  menu.className = 'menu-produktow';
  menu.style.position = 'fixed';
  menu.style.top = '50%';
  menu.style.left = '50%';
  menu.style.transform = 'translate(-50%, -50%)';
  menu.style.width = '90%';
  menu.style.maxWidth = '1200px';
  menu.style.background = 'white';
  menu.style.border = '1px solid #ddd';
  menu.style.borderRadius = '12px';
  menu.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  menu.style.zIndex = '2000';
  menu.style.maxHeight = '80vh';
  menu.style.overflowY = 'auto';
  
  let menuHTML = `
    <div class="naglowek-menu">
      <h4>${pobierzNazweKategorii(kategoria)}</h4>
      <button class="zamknij-menu">&times;</button>
    </div>
    <div class="lista-produktow">
  `;

  listaProduktow.forEach(produkt => {
    menuHTML += `
      <div class="produkt-w-menu">
        <div class="info-produktu">
          <h5>${produkt.nazwa}</h5>
          <p>${produkt.opis}</p>
          <div class="oceny-sekcja">
            <div class="gwiazdki">
              ${stworzGwiazdki(produkt.ocena)}
            </div>
            <span class="ocena-liczba">${produkt.ocena.toFixed(1)}</span>
            <span class="liczba-ocen">(${produkt.liczbaOcen} ocen)</span>
          </div>
          <div class="cena-produktu">${produkt.cena.toFixed(2)} zł</div>
        </div>
        <div class="przyciski-produktu">
          <button class="dodaj-do-koszyka" onclick="dodajDoKoszyka('${produkt.nazwa}', ${produkt.cena}, '${kategoria}')">
            Dodaj do koszyka
          </button>
          <button class="zobacz-recenzje" onclick="pokazRecenzje('${produkt.nazwa}', '${kategoria}')">
            Zobacz recenzje
          </button>
        </div>
      </div>
    `;
  });

  menuHTML += '</div>';
  menu.innerHTML = menuHTML;

  // Dodaj overlay i menu do strony
  document.body.appendChild(overlay);
  document.body.appendChild(menu);
  
  console.log('Overlay dodany:', overlay);
  console.log('Menu dodane:', menu);
  console.log('Menu position:', menu.style.position);
  console.log('Menu top:', menu.style.top);
  console.log('Menu left:', menu.style.left);

  // Dodaj event listenery
  const zamknijBtn = menu.querySelector('.zamknij-menu');
  zamknijBtn.addEventListener('click', () => {
    menu.remove();
    overlay.remove();
  });

  // Zamknij menu po kliknięciu poza nim
  overlay.addEventListener('click', () => {
    menu.remove();
    overlay.remove();
  });
}

// Funkcja pokazywania recenzji
function pokazRecenzje(nazwaProduktu, kategoria) {
  const produkt = produkty[kategoria].find(p => p.nazwa === nazwaProduktu);
  if (!produkt) return;

  // Usuń istniejące modalne okno
  const istniejaceModal = document.querySelector('.modal-recenzje');
  if (istniejaceModal) {
    istniejaceModal.remove();
  }

  // Utwórz modalne okno
  const modal = document.createElement('div');
  modal.className = 'modal-recenzje';
  
  let recenzjeHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${produkt.nazwa}</h3>
        <button class="zamknij-modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="produkt-podsumowanie">
          <div class="oceny-podsumowanie">
            <div class="gwiazdki-duze">
              ${stworzGwiazdki(produkt.ocena)}
            </div>
            <div class="ocena-info">
              <span class="ocena-liczba-duza">${produkt.ocena.toFixed(1)}</span>
              <span class="liczba-ocen-duza">z ${produkt.liczbaOcen} ocen</span>
            </div>
          </div>
          <div class="cena-produktu-duza">${produkt.cena.toFixed(2)} zł</div>
        </div>
        <div class="recenzje-lista">
          <h4>Recenzje klientów</h4>
          ${produkt.recenzje.map(recenzja => `
            <div class="recenzja-item">
              <div class="recenzja-header">
                <div class="gwiazdki">
                  ${stworzGwiazdki(recenzja.ocena)}
                </div>
                <span class="uzytkownik">${recenzja.uzytkownik}</span>
                <span class="data-recenzji">${recenzja.data}</span>
              </div>
              <p class="komentarz">${recenzja.komentarz}</p>
            </div>
          `).join('')}
        </div>
        <div class="dodaj-recenzje">
          <h4>Dodaj swoją recenzję</h4>
          <div class="ocenianie">
            <span>Twoja ocena:</span>
            <div class="gwiazdki-ocenianie" data-produkt="${produkt.nazwa}">
              <span class="gwiazdka-ocenianie" data-ocena="1">☆</span>
              <span class="gwiazdka-ocenianie" data-ocena="2">☆</span>
              <span class="gwiazdka-ocenianie" data-ocena="3">☆</span>
              <span class="gwiazdka-ocenianie" data-ocena="4">☆</span>
              <span class="gwiazdka-ocenianie" data-ocena="5">☆</span>
            </div>
          </div>
          <textarea placeholder="Napisz swoją recenzję..." class="komentarz-input"></textarea>
          <button class="dodaj-recenzje-btn" onclick="dodajRecenzje('${produkt.nazwa}', '${kategoria}')">
            Dodaj recenzję
          </button>
        </div>
      </div>
    </div>
  `;
  
  modal.innerHTML = recenzjeHTML;
  document.body.appendChild(modal);

  // Dodaj event listenery
  const zamknijModal = modal.querySelector('.zamknij-modal');
  zamknijModal.addEventListener('click', () => modal.remove());

  // Zamknij modal po kliknięciu poza nim
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Event listenery dla gwiazdek oceniania
  const gwiazdkiOcenianie = modal.querySelectorAll('.gwiazdka-ocenianie');
  gwiazdkiOcenianie.forEach((gwiazdka, index) => {
    gwiazdka.addEventListener('mouseenter', () => {
      for (let i = 0; i <= index; i++) {
        gwiazdkiOcenianie[i].textContent = '★';
        gwiazdkiOcenianie[i].classList.add('aktywna');
      }
    });

    gwiazdka.addEventListener('mouseleave', () => {
      gwiazdkiOcenianie.forEach(g => {
        g.textContent = '☆';
        g.classList.remove('aktywna');
      });
    });

    gwiazdka.addEventListener('click', () => {
      const ocena = index + 1;
      gwiazdka.parentElement.setAttribute('data-wybrana-ocena', ocena);
      
      // Zaznacz wybrane gwiazdki
      gwiazdkiOcenianie.forEach((g, i) => {
        if (i < ocena) {
          g.textContent = '★';
          g.classList.add('aktywna');
        } else {
          g.textContent = '☆';
          g.classList.remove('aktywna');
        }
      });
    });
  });
}

// Funkcja dodawania recenzji
function dodajRecenzje(nazwaProduktu, kategoria) {
  const modal = document.querySelector('.modal-recenzje');
  const wybranaOcena = modal.querySelector('.gwiazdki-ocenianie').parentElement.getAttribute('data-wybrana-ocena');
  const komentarz = modal.querySelector('.komentarz-input').value;

  if (!wybranaOcena) {
    alert('Wybierz ocenę!');
    return;
  }

  if (!komentarz.trim()) {
    alert('Napisz komentarz!');
    return;
  }

  // Dodaj recenzję do produktu
  const produkt = produkty[kategoria].find(p => p.nazwa === nazwaProduktu);
  if (produkt) {
    const nowaRecenzja = {
      uzytkownik: 'Użytkownik',
      ocena: parseInt(wybranaOcena),
      komentarz: komentarz,
      data: new Date().toISOString().split('T')[0]
    };

    produkt.recenzje.push(nowaRecenzja);
    
    // Aktualizuj średnią ocenę
    const sumaOcen = produkt.recenzje.reduce((sum, r) => sum + r.ocena, 0);
    produkt.ocena = sumaOcen / produkt.recenzje.length;
    produkt.liczbaOcen = produkt.recenzje.length;

    alert('Dziękujemy za recenzję!');
    modal.remove();
  }
}

// Funkcja mapująca nazwy kategorii
function pobierzNazweKategorii(kategoria) {
  const nazwy = {
    'komputery': 'Komputery i laptopy',
    'smartfony': 'Smartfony i akcesoria',
    'audio': 'Sprzęt audio',
    'tv': 'Telewizory i wideo',
    'gaming': 'Gaming',
    'smart-home': 'Smart Home',
    'casual': 'Zestaw casual',
    'szafa': 'Szafa marzeń',
    'dodatki': 'Eleganckie dodatki',
    'miejski': 'Miejski look',
    'akcesoria': 'Modne akcesoria',
    'perfumy': 'Perfumy i kosmetyki',
    'pilka-nozna': 'Piłka nożna',
    'bieganie': 'Bieganie',
    'fitness-silownia': 'Fitness i siłownia',
    'sporty-zimowe': 'Sporty zimowe',
    'sporty-wodne': 'Sporty wodne',
    'turystyka-outdoor': 'Turystyka i outdoor',
    'salon': 'Salon',
    'sypialnia': 'Sypialnia',
    'kuchnia': 'Kuchnia',
    'lazienka': 'Łazienka',
    'pokoj-dzienny': 'Pokój dzienny',
    'ogrod': 'Ogród'
  };
  return nazwy[kategoria] || kategoria;
}

// Funkcja mapująca nazwy produktów na kategorie
function pobierzKategorie(nazwaProduktu) {
  const mapowania = {
    'Komputery i laptopy': 'komputery',
    'Smartfony i akcesoria': 'smartfony',
    'Sprzęt audio': 'audio',
    'Telewizory i wideo': 'tv',
    'Gaming': 'gaming',
    'Smart Home': 'smart-home',
    'Zestaw casual': 'casual',
    'Szafa marzeń': 'szafa',
    'Eleganckie dodatki': 'dodatki',
    'Miejski look': 'miejski',
    'Modne akcesoria': 'akcesoria',
    'Perfumy i kosmetyki': 'perfumy',
    'Piłka nożna': 'pilka-nozna',
    'Bieganie': 'bieganie',
    'Fitness i siłownia': 'fitness-silownia',
    'Sporty zimowe': 'sporty-zimowe',
    'Sporty wodne': 'sporty-wodne',
    'Turystyka i outdoor': 'turystyka-outdoor',
    'Salon': 'salon',
    'Sypialnia': 'sypialnia',
    'Kuchnia': 'kuchnia',
    'Łazienka': 'lazienka',
    'Pokój dzienny': 'pokoj-dzienny',
    'Ogród': 'ogrod'
  };
  return mapowania[nazwaProduktu] || null;
}

// Funkcja dodawania do koszyka
function dodajDoKoszyka(nazwa, cena, kategoria) {
  // Sprawdź czy produkt już jest w koszyku
  const istniejeProdukt = koszyk.find(item => item.nazwa === nazwa);
  
  if (istniejeProdukt) {
    istniejeProdukt.ilosc += 1;
  } else {
    koszyk.push({
      nazwa: nazwa,
      cena: cena,
      kategoria: kategoria,
      ilosc: 1
    });
  }
  
  // Zapisz koszyk w localStorage
  localStorage.setItem('koszyk', JSON.stringify(koszyk));
  
  // Aktualizuj wyświetlanie koszyka
  aktualizujKoszyk();
  
  // Aktualizuj licznik koszyka
  const licznik = document.querySelector('.koszyk-licznik');
  if (licznik) {
    licznik.textContent = koszyk.length;
  }
  
  // Pokaż powiadomienie
  const powiadomienie = document.createElement('div');
  powiadomienie.className = 'powiadomienie-koszyk';
  powiadomienie.innerHTML = `
    <div class="powiadomienie-content">
      <span>✓ Produkt "${nazwa}" został dodany do koszyka!</span>
      <button class="zamknij-powiadomienie">&times;</button>
    </div>
  `;
  
  document.body.appendChild(powiadomienie);
  
  // Usuń powiadomienie po 3 sekundach
  setTimeout(() => {
    if (powiadomienie.parentNode) {
      powiadomienie.remove();
    }
  }, 3000);
  
  // Event listener do zamknięcia powiadomienia
  const zamknijBtn = powiadomienie.querySelector('.zamknij-powiadomienie');
  zamknijBtn.addEventListener('click', () => powiadomienie.remove());
}

// Funkcja usuwania z koszyka
function usunZKoszyka(index) {
  koszyk.splice(index, 1);
  localStorage.setItem('koszyk', JSON.stringify(koszyk));
  aktualizujKoszyk();
  
  // Aktualizuj licznik koszyka
  const licznik = document.querySelector('.koszyk-licznik');
  if (licznik) {
    licznik.textContent = koszyk.length;
  }
}

// Funkcja zmiany ilości produktu
function zmienIlosc(index, zmiana) {
  koszyk[index].ilosc += zmiana;
  
  if (koszyk[index].ilosc <= 0) {
    usunZKoszyka(index);
  } else {
    localStorage.setItem('koszyk', JSON.stringify(koszyk));
    aktualizujKoszyk();
  }
}

// Funkcja aktualizacji wyświetlania koszyka
function aktualizujKoszyk() {
  const koszykContainer = document.getElementById('koszyk-container');
  if (!koszykContainer) return;
  
  if (koszyk.length === 0) {
    koszykContainer.innerHTML = `
      <div class="koszyk-pusty">
        <h3>Twój koszyk jest pusty</h3>
        <p>Dodaj produkty, aby rozpocząć zakupy!</p>
      </div>
    `;
    return;
  }
  
  let koszykHTML = `
    <div class="koszyk-header">
      <h3>Twój koszyk (${koszyk.length} produktów)</h3>
      <button class="wyczysc-koszyk" onclick="wyczyscKoszyk()">Wyczyść koszyk</button>
    </div>
    <div class="koszyk-produkty">
  `;
  
  let sumaCalkowita = 0;
  
  koszyk.forEach((produkt, index) => {
    const sumaProduktu = produkt.cena * produkt.ilosc;
    sumaCalkowita += sumaProduktu;
    
    koszykHTML += `
      <div class="koszyk-produkt">
        <div class="produkt-info">
          <h4>${produkt.nazwa}</h4>
          <p class="kategoria-produktu">${pobierzNazweKategorii(produkt.kategoria)}</p>
          <p class="cena-produktu">${produkt.cena.toFixed(2)} zł</p>
        </div>
        <div class="produkt-ilosc">
          <button class="zmien-ilosc" onclick="zmienIlosc(${index}, -1)">-</button>
          <span class="ilosc">${produkt.ilosc}</span>
          <button class="zmien-ilosc" onclick="zmienIlosc(${index}, 1)">+</button>
        </div>
        <div class="produkt-suma">
          <span class="suma-produktu">${sumaProduktu.toFixed(2)} zł</span>
          <button class="usun-produkt" onclick="usunZKoszyka(${index})">🗑️</button>
        </div>
      </div>
    `;
  });
  
  koszykHTML += `
    </div>
    <div class="koszyk-podsumowanie">
      <div class="suma-calkowita">
        <span>Suma całkowita:</span>
        <span class="cena-calkowita">${sumaCalkowita.toFixed(2)} zł</span>
      </div>
      <button class="przejdz-do-zamowienia" onclick="przejdzDoZamowienia()">
        Przejdź do zamówienia
      </button>
    </div>
  `;
  
  koszykContainer.innerHTML = koszykHTML;
}

// Funkcja czyszczenia koszyka
function wyczyscKoszyk() {
  if (confirm('Czy na pewno chcesz wyczyścić koszyk?')) {
    koszyk = [];
    localStorage.removeItem('koszyk');
    aktualizujKoszyk();
    
    // Aktualizuj licznik koszyka
    const licznik = document.querySelector('.koszyk-licznik');
    if (licznik) {
      licznik.textContent = '0';
    }
  }
}

// Funkcja przejścia do zamówienia
function przejdzDoZamowienia() {
  alert('Dziękujemy za zamówienie! W przyszłości tutaj będzie formularz zamówienia.');
}

// Funkcja pokazywania/ukrywania koszyka
function pokazKoszyk() {
  const koszykModal = document.getElementById('koszyk-modal');
  if (koszykModal) {
    koszykModal.style.display = 'flex';
    aktualizujKoszyk();
  }
}

function ukryjKoszyk() {
  const koszykModal = document.getElementById('koszyk-modal');
  if (koszykModal) {
    koszykModal.style.display = 'none';
  }
}

// Główna funkcja
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript załadowany!');
  
  // Wczytaj koszyk z localStorage
  const zapisanyKoszyk = localStorage.getItem('koszyk');
  if (zapisanyKoszyk) {
    koszyk = JSON.parse(zapisanyKoszyk);
  }
  
  // Dodaj ikonę koszyka do nagłówka
  const topBar = document.querySelector('.top-bar .container');
  if (topBar) {
    const koszykIcon = document.createElement('div');
    koszykIcon.className = 'koszyk-icon';
    koszykIcon.innerHTML = `
      <button class="koszyk-btn" onclick="pokazKoszyk()">
        🛒 <span class="koszyk-licznik">${koszyk.length}</span>
      </button>
    `;
    topBar.appendChild(koszykIcon);
  }
  
  // Dodaj modal koszyka
  const modalKoszyk = document.createElement('div');
  modalKoszyk.id = 'koszyk-modal';
  modalKoszyk.className = 'modal-koszyk';
  modalKoszyk.innerHTML = `
    <div class="modal-koszyk-content">
      <div class="modal-koszyk-header">
        <h2>Twój koszyk</h2>
        <button class="zamknij-koszyk" onclick="ukryjKoszyk()">&times;</button>
      </div>
      <div id="koszyk-container">
        <div class="koszyk-pusty">
          <h3>Twój koszyk jest pusty</h3>
          <p>Dodaj produkty, aby rozpocząć zakupy!</p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalKoszyk);
  
  // Zamknij modal po kliknięciu poza nim
  modalKoszyk.addEventListener('click', (e) => {
    if (e.target === modalKoszyk) {
      ukryjKoszyk();
    }
  });
  
  // Sprawdź czy jesteśmy na stronie elektroniki
  const stronaElektronika = document.querySelector('.elektronika-hero') !== null;
  console.log('Strona elektroniki:', stronaElektronika);
  
  if (stronaElektronika) {
    // Dodaj event listenery dla przycisków "Zobacz więcej"
    const przyciski = document.querySelectorAll('.product .button-main');
    console.log('Znalezione przyciski:', przyciski.length);
    
    przyciski.forEach((przycisk, index) => {
      console.log(`Przycisk ${index}:`, przycisk.textContent);
      if (przycisk.textContent === 'Zobacz więcej') {
        console.log(`Dodaję event listener do przycisku ${index}`);
        przycisk.addEventListener('click', (e) => {
          console.log('Kliknięto przycisk "Zobacz więcej"!');
          e.preventDefault();
          
          const kartaProduktu = przycisk.closest('.product');
          const nazwaProduktu = kartaProduktu.querySelector('h3').textContent;
          const kategoria = pobierzKategorie(nazwaProduktu);
          
          console.log('Nazwa produktu:', nazwaProduktu);
          console.log('Kategoria:', kategoria);
          
          if (kategoria) {
            console.log('Wywołuję pokazMenu z kategorią:', kategoria);
            pokazMenu(kategoria, przycisk);
          } else {
            console.log('Nie znaleziono kategorii dla:', nazwaProduktu);
          }
        });
      }
    });
  }

  // Istniejąca funkcjonalność dla strony sport
  const isSportPage = document.querySelector('.sport-hero') !== null;
  if (!isSportPage) return;

  const form = document.getElementById('sportFilters');
  if (!form) return;

  const categorySelect = document.getElementById('filterCategory');
  const typeSelect = document.getElementById('filterType');
  const resetBtn = document.getElementById('resetFilters');
  const productCards = Array.from(document.querySelectorAll('.products .product'));

  const applyFilters = () => {
    const selectedCategory = (categorySelect && categorySelect.value) || '';
    const selectedType = (typeSelect && typeSelect.value) || '';

    productCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTags = (card.getAttribute('data-tags') || '').split(',').map((t) => t.trim());

      const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
      const matchesType = !selectedType || cardTags.includes(selectedType);

      const shouldShow = matchesCategory && matchesType;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilters();
  });

  if (categorySelect) categorySelect.addEventListener('change', applyFilters);
  if (typeSelect) typeSelect.addEventListener('change', applyFilters);
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (categorySelect) categorySelect.value = '';
      if (typeSelect) typeSelect.value = '';
      applyFilters();
    });
  }

  // Initial state
  applyFilters();
});


