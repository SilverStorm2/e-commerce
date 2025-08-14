// Produkty sportu
const sport = {
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
  ]
};

// Eksportuj obiekt sportu
export { sport };

// Dla kompatybilności z CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sport;
}
