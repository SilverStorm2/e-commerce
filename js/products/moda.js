// Produkty mody
const moda = {
  'casual': [
    { 
      nazwa: 'Bluza hoodie oversized', 
      cena: 249.99, 
      opis: 'Modna oversized hoodie z miękkiej bawełny, idealna na co dzień, unisex',
      ocena: 4.8,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Super wygodna i stylowa!', data: '2024-01-18' },
        { uzytkownik: 'Marta S.', ocena: 5, komentarz: 'Idealny krój, polecam!', data: '2024-01-15' },
        { uzytkownik: 'Julia M.', ocena: 4, komentarz: 'Miękka i ciepła', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Jeansy mom fit vintage', 
      cena: 189.99, 
      opis: 'Wysokiej talii jeansy w stylu vintage, 98% bawełna, 2% elastan',
      ocena: 4.7,
      liczbaOcen: 324,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Świetnie modelują sylwetkę', data: '2024-01-17' },
        { uzytkownik: 'Karolina W.', ocena: 4, komentarz: 'Dobra jakość, wygodne', data: '2024-01-14' },
        { uzytkownik: 'Natalia R.', ocena: 5, komentarz: 'Idealny vintage look', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'T-shirt basic premium', 
      cena: 79.99, 
      opis: 'Koszulka z organicznej bawełny, minimalistyczny design, dostępna w 8 kolorach',
      ocena: 4.6,
      liczbaOcen: 789,
      recenzje: [
        { uzytkownik: 'Tomasz L.', ocena: 5, komentarz: 'Najlepsza jakość za tę cenę', data: '2024-01-16' },
        { uzytkownik: 'Michał K.', ocena: 4, komentarz: 'Nie gniecie się po praniu', data: '2024-01-13' },
        { uzytkownik: 'Adam G.', ocena: 5, komentarz: 'Warto mieć w każdym kolorze', data: '2024-01-10' }
      ]
    }
  ],
  'szafa': [
    { 
      nazwa: 'Płaszcz wełniany maxi', 
      cena: 899.99, 
      opis: 'Elegancki długi płaszcz z wełny merino, podszewka z jedwabiu, timeless design',
      ocena: 4.9,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Magdalena S.', ocena: 5, komentarz: 'Luksusowy i ciepły', data: '2024-01-19' },
        { uzytkownik: 'Agnieszka K.', ocena: 5, komentarz: 'Inwestycja na lata', data: '2024-01-16' },
        { uzytkownik: 'Beata M.', ocena: 4, komentarz: 'Piękny, ale drogi', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Sukienka midi elegancka', 
      cena: 349.99, 
      opis: 'Sukienka z wysokogatunkowej wiskozą, krój A-line, idealna na okazje specjalne',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna P.', ocena: 5, komentarz: 'Czuję się w niej wyjątkowo', data: '2024-01-17' },
        { uzytkownik: 'Karolina L.', ocena: 5, komentarz: 'Pięknie leży, świetny materiał', data: '2024-01-14' },
        { uzytkownik: 'Julia K.', ocena: 4, komentarz: 'Elegancka i wygodna', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Blazer strukturalny', 
      cena: 499.99, 
      opis: 'Nowoczesny blazer z wyrazistymi ramionami, wysokiej jakości materiał mieszankowy',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 5, komentarz: 'Dodaje charakteru każdej stylizacji', data: '2024-01-15' },
        { uzytkownik: 'Marta G.', ocena: 4, komentarz: 'Świetny do pracy i na wyjścia', data: '2024-01-12' },
        { uzytkownik: 'Natalia D.', ocena: 5, komentarz: 'Modny krój, polecam', data: '2024-01-09' }
      ]
    }
  ],
  'dodatki': [
    { 
      nazwa: 'Torebka skórzana mini', 
      cena: 299.99, 
      opis: 'Minimalistyczna torebka z prawdziwej skóry, regulowany pasek, praktyczne kieszenie',
      ocena: 4.8,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Agata S.', ocena: 5, komentarz: 'Idealna na każdą okazję', data: '2024-01-18' },
        { uzytkownik: 'Monika K.', ocena: 5, komentarz: 'Skóra bardzo dobrej jakości', data: '2024-01-15' },
        { uzytkownik: 'Kasia P.', ocena: 4, komentarz: 'Mała, ale pojemna', data: '2024-01-13' }
      ]
    },
    { 
      nazwa: 'Szal kaszmirowy premium', 
      cena: 459.99, 
      opis: 'Luksusowy szal z 100% kaszmiru, miękki jak jedwab, różne wzory i kolory',
      ocena: 4.9,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Magdalena R.', ocena: 5, komentarz: 'Najdelikatniejszy szal jaki miałam', data: '2024-01-17' },
        { uzytkownik: 'Beata L.', ocena: 5, komentarz: 'Wart każdej złotówki', data: '2024-01-14' },
        { uzytkownik: 'Anna M.', ocena: 4, komentarz: 'Piękny prezent dla siebie', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Zegarek minimalistyczny', 
      cena: 199.99, 
      opis: 'Elegancki zegarek w stylu Scandi, stalowa bransoleta, wodoszczelność 3ATM',
      ocena: 4.6,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Ponadczasowy design', data: '2024-01-16' },
        { uzytkownik: 'Marek S.', ocena: 4, komentarz: 'Dobry stosunek jakości do ceny', data: '2024-01-13' },
        { uzytkownik: 'Łukasz K.', ocena: 5, komentarz: 'Pasuje do każdej stylizacji', data: '2024-01-10' }
      ]
    }
  ],
  'miejski': [
    { 
      nazwa: 'Kurtka bomberka tech', 
      cena: 399.99, 
      opis: 'Nowoczesna bomberka z materiałów tech, wodoodporna, oddychająca, miejski styl',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Jakub M.', ocena: 5, komentarz: 'Idealna na miasto i podróże', data: '2024-01-18' },
        { uzytkownik: 'Michał P.', ocena: 5, komentarz: 'Funkcjonalna i stylowa', data: '2024-01-15' },
        { uzytkownik: 'Adam L.', ocena: 4, komentarz: 'Wygodna, ale mogłaby być taniej', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Sneakersy premium leather', 
      cena: 549.99, 
      opis: 'Luksusowe sneakersy ze skóry naturalnej, podeszwa z recyklingu, urban luxury',
      ocena: 4.7,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Karol W.', ocena: 5, komentarz: 'Najwygodniejsze buty jakie miałem', data: '2024-01-17' },
        { uzytkownik: 'Piotr G.', ocena: 4, komentarz: 'Świetne wykończenie', data: '2024-01-14' },
        { uzytkownik: 'Rafał K.', ocena: 5, komentarz: 'Warty każdej złotówki', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Plecak miejski wodoodporny', 
      cena: 279.99, 
      opis: 'Funkcjonalny plecak na laptopa 15", materiał Cordura, ukryta kieszeń antykradzieżowa',
      ocena: 4.9,
      liczbaOcen: 456,
      recenzje: [
        { uzytkownik: 'Mateusz S.', ocena: 5, komentarz: 'Perfekcyjny dla cyfrowego nomada', data: '2024-01-16' },
        { uzytkownik: 'Bartosz M.', ocena: 5, komentarz: 'Bardzo przemyślany design', data: '2024-01-13' },
        { uzytkownik: 'Wojciech L.', ocena: 4, komentarz: 'Solidny i praktyczny', data: '2024-01-10' }
      ]
    }
  ],
  'akcesoria': [
    { 
      nazwa: 'Okulary przeciwsłoneczne aviator', 
      cena: 189.99, 
      opis: 'Klasyczne okulary pilot, soczewki polaryzacyjne UV400, rama ze stopu tytanu',
      ocena: 4.7,
      liczbaOcen: 298,
      recenzje: [
        { uzytkownik: 'Tomasz R.', ocena: 5, komentarz: 'Klasyka, która nigdy nie wychodzi z mody', data: '2024-01-18' },
        { uzytkownik: 'Marek K.', ocena: 4, komentarz: 'Dobra ochrona i styl', data: '2024-01-15' },
        { uzytkownik: 'Łukasz W.', ocena: 5, komentarz: 'Lekkie i wygodne', data: '2024-01-12' }
      ]
    },
    { 
      nazwa: 'Pasek skórzany vintage', 
      cena: 149.99, 
      opis: 'Ręcznie szywany pasek ze skóry bydlęcej, metalowa klamra vintage, patynowany',
      ocena: 4.8,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Paweł G.', ocena: 5, komentarz: 'Piękne rzemiosło, polecam', data: '2024-01-17' },
        { uzytkownik: 'Kamil S.', ocena: 5, komentarz: 'Skóra nabiera charakteru z czasem', data: '2024-01-14' },
        { uzytkownik: 'Michał R.', ocena: 4, komentarz: 'Solidny i stylowy', data: '2024-01-11' }
      ]
    },
    { 
      nazwa: 'Czapka beanie merino', 
      cena: 89.99, 
      opis: 'Miękka czapka z wełny merino, naturalne właściwości antybakteryjne, unisex',
      ocena: 4.6,
      liczbaOcen: 423,
      recenzje: [
        { uzytkownik: 'Anna S.', ocena: 5, komentarz: 'Nie swędzi i jest bardzo ciepła', data: '2024-01-16' },
        { uzytkownik: 'Kasia M.', ocena: 4, komentarz: 'Idealna na zimę', data: '2024-01-13' },
        { uzytkownik: 'Julia P.', ocena: 5, komentarz: 'Wełna merino to najlepszy wybór', data: '2024-01-10' }
      ]
    }
  ]
};

// Eksportuj obiekt mody - bez ES6 modules
window.moda = moda;