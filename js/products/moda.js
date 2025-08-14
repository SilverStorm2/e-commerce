// Produkty mody
const moda = {
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
  ]
};

// Eksportuj obiekt mody
export { moda };

// Dla kompatybilności z CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = moda;
}
