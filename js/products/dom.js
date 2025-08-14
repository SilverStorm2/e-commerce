// Produkty domu
const dom = {
  'salon': [
    {
      nazwa: 'Sofa 3-osobowa',
      cena: 1999.99,
      opis: 'Wygodna sofa do salonu',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Świetnie się prezentuje w salonie!', data: '2024-01-17' },
        { uzytkownik: 'Marek S.', ocena: 4, komentarz: 'Wygodna do siedzenia', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Stół kawowy',
      cena: 599.99,
      opis: 'Elegancki stół kawowy',
      ocena: 4.6,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Ładnie komponuje się z sofą', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Telewizor 55"',
      cena: 2499.99,
      opis: 'Smart TV do salonu',
      ocena: 4.9,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Ewa M.', ocena: 5, komentarz: 'Świetny obraz i dźwięk', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Lampa sufitowa',
      cena: 399.99,
      opis: 'Nowoczesna lampa sufitowa',
      ocena: 4.5,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 4, komentarz: 'Ładne oświetlenie', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Dywan salonowy',
      cena: 299.99,
      opis: 'Elegancki dywan do salonu',
      ocena: 4.7,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Karolina P.', ocena: 5, komentarz: 'Miękki i ładny', data: '2024-01-12' }
      ]
    }
  ],
  'sypialnia': [
    {
      nazwa: 'Łóżko małżeńskie',
      cena: 1499.99,
      opis: 'Wygodne łóżko małżeńskie',
      ocena: 4.8,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Jan M.', ocena: 5, komentarz: 'Świetnie się śpi!', data: '2024-01-17' },
        { uzytkownik: 'Anna S.', ocena: 4, komentarz: 'Solidne wykonanie', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Materac ortopedyczny',
      cena: 899.99,
      opis: 'Materac do łóżka małżeńskiego',
      ocena: 4.9,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek K.', ocena: 5, komentarz: 'Idealny dla kręgosłupa', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Szafa garderobiana',
      cena: 1299.99,
      opis: 'Duża szafa do sypialni',
      ocena: 4.7,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Tomasz P.', ocena: 4, komentarz: 'Dużo miejsca na ubrania', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Lampa nocna',
      cena: 149.99,
      opis: 'Delikatna lampa nocna',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 5, komentarz: 'Idealna do czytania', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Komoda sypialniana',
      cena: 699.99,
      opis: 'Elegancka komoda do sypialni',
      ocena: 4.5,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Piotr S.', ocena: 4, komentarz: 'Ładnie się prezentuje', data: '2024-01-12' }
      ]
    }
  ],
  'kuchnia': [
    {
      nazwa: 'Zestaw garnków',
      cena: 399.99,
      opis: 'Kompletny zestaw garnków',
      ocena: 4.8,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Świetna jakość garnków!', data: '2024-01-17' },
        { uzytkownik: 'Anna K.', ocena: 4, komentarz: 'Dobra do gotowania', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Mikser kuchenny',
      cena: 299.99,
      opis: 'Profesjonalny mikser kuchenny',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Marek L.', ocena: 5, komentarz: 'Mocny i wydajny', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Blender',
      cena: 199.99,
      opis: 'Blender do smoothie',
      ocena: 4.6,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 4, komentarz: 'Świetny do koktajli', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Toster',
      cena: 149.99,
      opis: 'Toster do chleba',
      ocena: 4.5,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Równomiernie opieka', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Ekspres do kawy',
      cena: 599.99,
      opis: 'Ekspres do kawy ziarnistej',
      ocena: 4.9,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Jan K.', ocena: 5, komentarz: 'Pyszna kawa każdego ranka', data: '2024-01-12' }
      ]
    }
  ],
  'lazienka': [
    {
      nazwa: 'Zestaw łazienkowy',
      cena: 299.99,
      opis: 'Kompletny zestaw łazienkowy',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna S.', ocena: 5, komentarz: 'Ładnie wygląda w łazience!', data: '2024-01-17' },
        { uzytkownik: 'Marek P.', ocena: 4, komentarz: 'Dobra jakość', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Mata łazienkowa',
      cena: 89.99,
      opis: 'Mata antypoślizgowa',
      ocena: 4.6,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Tomasz M.', ocena: 5, komentarz: 'Bezpieczna i miękka', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Suszarka do włosów',
      cena: 199.99,
      opis: 'Profesjonalna suszarka',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Szybko suszy włosy', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Lustro łazienkowe',
      cena: 249.99,
      opis: 'Duże lustro z oświetleniem',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Karolina W.', ocena: 4, komentarz: 'Dobre oświetlenie', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Szafka łazienkowa',
      cena: 399.99,
      opis: 'Szafka pod umywalkę',
      ocena: 4.7,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 5, komentarz: 'Dużo miejsca na kosmetyki', data: '2024-01-12' }
      ]
    }
  ],
  'pokoj-dzienny': [
    {
      nazwa: 'Fotel relaksacyjny',
      cena: 899.99,
      opis: 'Wygodny fotel do pokoju dziennego',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Jan S.', ocena: 5, komentarz: 'Idealny do relaksu!', data: '2024-01-17' },
        { uzytkownik: 'Anna M.', ocena: 4, komentarz: 'Wygodny do czytania', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Stół jadalny',
      cena: 799.99,
      opis: 'Stół jadalny 6-osobowy',
      ocena: 4.7,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Marek K.', ocena: 5, komentarz: 'Świetny do rodzinnych obiadów', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Krzesła jadalne',
      cena: 599.99,
      opis: 'Zestaw 6 krzeseł jadalnych',
      ocena: 4.6,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 4, komentarz: 'Wygodne do siedzenia', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Witryna',
      cena: 1299.99,
      opis: 'Elegancka witryna do pokoju dziennego',
      ocena: 4.9,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Pięknie prezentuje się w salonie', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Lampa podłogowa',
      cena: 349.99,
      opis: 'Nowoczesna lampa podłogowa',
      ocena: 4.5,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Karolina L.', ocena: 4, komentarz: 'Ładne oświetlenie', data: '2024-01-12' }
      ]
    }
  ],
  'ogrod': [
    {
      nazwa: 'Stół ogrodowy',
      cena: 499.99,
      opis: 'Stół ogrodowy z krzesłami',
      ocena: 4.8,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Jan M.', ocena: 5, komentarz: 'Świetny do grillowania!', data: '2024-01-17' },
        { uzytkownik: 'Anna K.', ocena: 4, komentarz: 'Ładnie wygląda w ogrodzie', data: '2024-01-15' }
      ]
    },
    {
      nazwa: 'Grill ogrodowy',
      cena: 399.99,
      opis: 'Profesjonalny grill ogrodowy',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek S.', ocena: 5, komentarz: 'Świetne grillowanie', data: '2024-01-16' }
      ]
    },
    {
      nazwa: 'Hamak ogrodowy',
      cena: 199.99,
      opis: 'Wygodny hamak do ogrodu',
      ocena: 4.6,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Tomasz P.', ocena: 4, komentarz: 'Idealny do relaksu', data: '2024-01-14' }
      ]
    },
    {
      nazwa: 'Oświetlenie ogrodowe',
      cena: 299.99,
      opis: 'Zestaw oświetlenia ogrodowego',
      ocena: 4.5,
      liczbaOcen: 123,
      recenzje: [
        { uzytkownik: 'Ewa W.', ocena: 5, komentarz: 'Pięknie oświetla ogród', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Donice ogrodowe',
      cena: 149.99,
      opis: 'Zestaw donic ogrodowych',
      ocena: 4.7,
      liczbaOcen: 178,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 4, komentarz: 'Ładne donice na kwiaty', data: '2024-01-12' }
      ]
    }
  ]
};

// Eksportuj obiekt dom
export { dom };

// Dla kompatybilności z CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = dom;
}
