// Produkty domu
const dom = {
  'salon': [
    {
      nazwa: 'Sofa narożna premium L-shape',
      cena: 3499.99,
      opis: 'Luksusowa sofa narożna z funkcją spania, tapicerka z ekoskóry, wbudowane USB',
      ocena: 4.9,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Anna K.', ocena: 5, komentarz: 'Idealna do dużego salonu, bardzo wygodna!', data: '2024-01-18' },
        { uzytkownik: 'Marek S.', ocena: 5, komentarz: 'Funkcja spania to strzał w dziesiątkę', data: '2024-01-15' },
        { uzytkownik: 'Ewa P.', ocena: 4, komentarz: 'Świetna jakość, ale droga', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Stolik kawowy szklany industrial',
      cena: 899.99,
      opis: 'Nowoczesny stolik kawowy ze szkła hartowanego i stalowych nóg w stylu industrialnym',
      ocena: 4.7,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'Ładnie komponuje się z sofą', data: '2024-01-17' },
        { uzytkownik: 'Julia M.', ocena: 4, komentarz: 'Stylowy, ale trzeba często czyścić szkło', data: '2024-01-14' },
        { uzytkownik: 'Michał K.', ocena: 5, komentarz: 'Idealny do loftu', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Regał na książki modułowy dąb',
      cena: 1299.99,
      opis: 'Modułowy system regałów z litego drewna dębowego, możliwość rozbudowy',
      ocena: 4.8,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Karolina L.', ocena: 5, komentarz: 'Piękne drewno, solidne wykonanie', data: '2024-01-16' },
        { uzytkownik: 'Adam G.', ocena: 5, komentarz: 'Można układać w różne konfiguracje', data: '2024-01-13' },
        { uzytkownik: 'Natalia R.', ocena: 4, komentarz: 'Drogie, ale warte swojej ceny', data: '2024-01-10' }
      ]
    }
  ],
  'sypialnia': [
    {
      nazwa: 'Łóżko tapicerowane king size',
      cena: 2899.99,
      opis: 'Eleganckie łóżko 180x200 z tapicerowanym zagłówkiem, stelaż z litego drewna',
      ocena: 4.9,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Magdalena S.', ocena: 5, komentarz: 'Sypiam jak królewna!', data: '2024-01-19' },
        { uzytkownik: 'Piotr K.', ocena: 5, komentarz: 'Bardzo stabilne i wygodne', data: '2024-01-16' },
        { uzytkownik: 'Agata M.', ocena: 4, komentarz: 'Pięknie się prezentuje w sypialni', data: '2024-01-13' }
      ]
    },
    {
      nazwa: 'Szafa przesuwna 3-drzwiowa',
      cena: 1899.99,
      opis: 'Pojemna szafa z lustrem, system cichego domykania, LED wewnętrzne oświetlenie',
      ocena: 4.8,
      liczbaOcen: 198,
      recenzje: [
        { uzytkownik: 'Beata L.', ocena: 5, komentarz: 'Dużo miejsca na ubrania, lustro powiększa pokój', data: '2024-01-17' },
        { uzytkownik: 'Tomasz R.', ocena: 4, komentarz: 'Cichy mechanizm przesuwny', data: '2024-01-14' },
        { uzytkownik: 'Kasia W.', ocena: 5, komentarz: 'LED oświetlenie to świetny pomysł', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Komoda vintage 6 szuflad',
      cena: 749.99,
      opis: 'Stylowa komoda w stylu vintage z drewna sosnowego, metalowe uchwyty retro',
      ocena: 4.6,
      liczbaOcen: 134,
      recenzje: [
        { uzytkownik: 'Anna P.', ocena: 5, komentarz: 'Idealna do stylu skandynawskiego', data: '2024-01-15' },
        { uzytkownik: 'Marek D.', ocena: 4, komentarz: 'Solidna i pojemna', data: '2024-01-12' },
        { uzytkownik: 'Julia K.', ocena: 5, komentarz: 'Uchwyty są bardzo stylowe', data: '2024-01-09' }
      ]
    }
  ],
  'kuchnia': [
    {
      nazwa: 'Blat roboczy kwarcowy premium',
      cena: 2199.99,
      opis: 'Blat kuchenny z kwarcu 240x60cm, odporny na zarysowania i plamy, różne kolory',
      ocena: 4.9,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Ewa K.', ocena: 5, komentarz: 'Najlepszy blat jaki miałam!', data: '2024-01-18' },
        { uzytkownik: 'Michał G.', ocena: 5, komentarz: 'Nie zarysowuje się, łatwo czyścić', data: '2024-01-15' },
        { uzytkownik: 'Monika S.', ocena: 4, komentarz: 'Drogi, ale jakość premium', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Zestaw garnków stalowych 12 elementów',
      cena: 599.99,
      opis: 'Profesjonalny zestaw garnków ze stali nierdzewnej, dno termodyfuzyjne, wszystkie płyty',
      ocena: 4.8,
      liczbaOcen: 345,
      recenzje: [
        { uzytkownik: 'Karolina M.', ocena: 5, komentarz: 'Gotowanie to teraz czysta przyjemność', data: '2024-01-17' },
        { uzytkownik: 'Adam L.', ocena: 5, komentarz: 'Równomiernie nagrzewają się', data: '2024-01-14' },
        { uzytkownik: 'Natalia G.', ocena: 4, komentarz: 'Dobry stosunek jakości do ceny', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Wyspa kuchenna z barem',
      cena: 3999.99,
      opis: 'Multifunkcyjna wyspa kuchenna z miejscem na bar, szafkami i blatem granitowym',
      ocena: 4.7,
      liczbaOcen: 89,
      recenzje: [
        { uzytkownik: 'Tomasz K.', ocena: 5, komentarz: 'Centrum kuchni, wszystko pod ręką', data: '2024-01-16' },
        { uzytkownik: 'Magdalena R.', ocena: 4, komentarz: 'Dużo miejsca do przygotowywania', data: '2024-01-13' },
        { uzytkownik: 'Piotr W.', ocena: 5, komentarz: 'Idealne do dużej kuchni', data: '2024-01-10' }
      ]
    }
  ],
  'lazienka': [
    {
      nazwa: 'Kabina prysznicowa premium 90x90',
      cena: 1899.99,
      opis: 'Kabina z szkła bezpiecznego 8mm, profil chromowany, system przeciwkapiący',
      ocena: 4.8,
      liczbaOcen: 156,
      recenzje: [
        { uzytkownik: 'Agata S.', ocena: 5, komentarz: 'Łatwa w utrzymaniu czystości', data: '2024-01-18' },
        { uzytkownik: 'Marek M.', ocena: 5, komentarz: 'Solidna konstrukcja, nie przecieka', data: '2024-01-15' },
        { uzytkownik: 'Beata K.', ocena: 4, komentarz: 'Elegancka i funkcjonalna', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Szafka pod umywalkę z blatem',
      cena: 899.99,
      opis: 'Nowoczesna szafka podwieszana z umywalką nablatową i blatem z konglomeratu',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Julia P.', ocena: 5, komentarz: 'Świetnie wykorzystuje przestrzeń', data: '2024-01-17' },
        { uzytkownik: 'Kamil G.', ocena: 4, komentarz: 'Modny design, dobra jakość', data: '2024-01-14' },
        { uzytkownik: 'Ewa L.', ocena: 5, komentarz: 'Umywalka nablatowa to hit', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Zestaw armatury łazienkowej chrom',
      cena: 449.99,
      opis: 'Kompletny zestaw: bateria umywalkowa, prysznicowa i akcesoria w chromie',
      ocena: 4.6,
      liczbaOcen: 287,
      recenzje: [
        { uzytkownik: 'Tomasz S.', ocena: 5, komentarz: 'Wszystko w jednym stylu', data: '2024-01-16' },
        { uzytkownik: 'Anna W.', ocena: 4, komentarz: 'Dobra jakość za rozsądną cenę', data: '2024-01-13' },
        { uzytkownik: 'Michał D.', ocena: 5, komentarz: 'Łatwy montaż, instrukcja przejrzysta', data: '2024-01-10' }
      ]
    }
  ],
  'pokoj-dzienny': [
    {
      nazwa: 'Stół rozkładany do jadalni 8 osób',
      cena: 1599.99,
      opis: 'Elegancki stół rozkładany z drewna bukowego, mechanizm motylkowy, dla max 8 osób',
      ocena: 4.8,
      liczbaOcen: 167,
      recenzje: [
        { uzytkownik: 'Magdalena K.', ocena: 5, komentarz: 'Idealny na rodzinne spotkania', data: '2024-01-18' },
        { uzytkownik: 'Piotr R.', ocena: 5, komentarz: 'Mechanizm działa płynnie', data: '2024-01-15' },
        { uzytkownik: 'Kasia M.', ocena: 4, komentarz: 'Ładne drewno, solidne wykonanie', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Kompl krzesła tapicerowane 6 szt',
      cena: 1199.99,
      opis: 'Zestaw 6 krzeseł tapicerowanych tkaniną antybakteryjną, stelaż bukowy',
      ocena: 4.7,
      liczbaOcen: 234,
      recenzje: [
        { uzytkownik: 'Beata S.', ocena: 5, komentarz: 'Wygodne i eleganckie', data: '2024-01-17' },
        { uzytkownik: 'Adam K.', ocena: 4, komentarz: 'Dobra jakość tapicerki', data: '2024-01-14' },
        { uzytkownik: 'Natalia L.', ocena: 5, komentarz: 'Pasują idealnie do stołu', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Kredens vintage 4-drzwiowy',
      cena: 2299.99,
      opis: 'Stylowy kredens z drewna dębowego z przeszklonymi drzwiami i oświetleniem LED',
      ocena: 4.9,
      liczbaOcen: 98,
      recenzje: [
        { uzytkownik: 'Ewa G.', ocena: 5, komentarz: 'Piękny mebel, prawdziwa ozdoba salonu', data: '2024-01-16' },
        { uzytkownik: 'Tomasz W.', ocena: 5, komentarz: 'LED podświetla pięknie naczynia', data: '2024-01-13' },
        { uzytkownik: 'Julia R.', ocena: 4, komentarz: 'Drogi, ale wart każdej złotówki', data: '2024-01-10' }
      ]
    }
  ],
  'ogrod': [
    {
      nazwa: 'Zestaw mebli ogrodowych technorattan',
      cena: 2799.99,
      opis: 'Kompletny zestaw: sofa narożna, stolik, 2 fotele z technorattanu z poduszkami',
      ocena: 4.8,
      liczbaOcen: 189,
      recenzje: [
        { uzytkownik: 'Marek P.', ocena: 5, komentarz: 'Odporny na warunki atmosferyczne', data: '2024-01-18' },
        { uzytkownik: 'Agata K.', ocena: 5, komentarz: 'Wygodny i stylowy, polecam!', data: '2024-01-15' },
        { uzytkownik: 'Kamil S.', ocena: 4, komentarz: 'Poduszki można prać w pralce', data: '2024-01-12' }
      ]
    },
    {
      nazwa: 'Grill gazowy 4-palnikowy premium',
      cena: 1899.99,
      opis: 'Profesjonalny grill gazowy ze stali nierdzewnej, termometr, boczny palnik',
      ocena: 4.9,
      liczbaOcen: 145,
      recenzje: [
        { uzytkownik: 'Piotr L.', ocena: 5, komentarz: 'Grillowanie na najwyższym poziomie!', data: '2024-01-17' },
        { uzytkownik: 'Tomasz K.', ocena: 5, komentarz: 'Równomiernie rozprowadza ciepło', data: '2024-01-14' },
        { uzytkownik: 'Michał G.', ocena: 4, komentarz: 'Solidny i funkcjonalny', data: '2024-01-11' }
      ]
    },
    {
      nazwa: 'Parasol ogrodowy 3m z podstawą',
      cena: 599.99,
      opis: 'Duży parasol ogrodowy z funkcją uchylania, tkanina UV-protection, metalowa podstawa',
      ocena: 4.6,
      liczbaOcen: 267,
      recenzje: [
        { uzytkownik: 'Anna M.', ocena: 5, komentarz: 'Daje świetny cień, stabilny', data: '2024-01-16' },
        { uzytkownik: 'Karolina W.', ocena: 4, komentarz: 'Funkcja uchylania bardzo przydatna', data: '2024-01-13' },
        { uzytkownik: 'Ewa P.', ocena: 5, komentarz: 'Ochrona UV działa doskonale', data: '2024-01-10' }
      ]
    }
  ]
};

// Eksportuj obiekt domu - bez ES6 modules
window.dom = dom;