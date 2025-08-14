// Import produktów z modułów ES6
import { produkty } from './products/index.js';
console.log('Produkty załadowane:', produkty);

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
    gwiazdkiHTML += '<span class="gwiazdka polowa">★</span>';
  }
  
  // Puste gwiazdki
  for (let i = 0; i < pusteGwiazdki; i++) {
    gwiazdkiHTML += '<span class="gwiazdka pusta">☆</span>';
  }
  
  return gwiazdkiHTML;
}

// Funkcja tworząca menu z ocenami
function pokazMenu(kategoria) {
  const listaProduktow = produkty[kategoria];
  if (!listaProduktow) {
    console.log('Nie znaleziono produktów dla kategorii:', kategoria);
    return;
  }

  // Usuń istniejące menu i overlay
  const stareMenu = document.querySelectorAll('.menu-produktow');
  const stareOverlay = document.querySelectorAll('.menu-overlay');
  stareMenu.forEach(menu => menu.remove());
  stareOverlay.forEach(overlay => overlay.remove());
  
  // Usuń też istniejące modalne okna recenzji
  const istniejaceModal = document.querySelector('.modal-recenzje');
  if (istniejaceModal) {
    istniejaceModal.remove();
  }
  
  // Usuń też istniejące modalne okna koszyka
  const istniejaceKoszykModal = document.getElementById('koszyk-modal');
  if (istniejaceKoszykModal) {
    istniejaceKoszykModal.style.display = 'none';
  }

  // Sprawdź czy menu już jest otwarte
  const istniejeMenu = document.querySelector('.menu-produktow');
  const istniejeOverlay = document.querySelector('.menu-overlay');
  if (istniejeMenu && istniejeOverlay) {
    istniejeMenu.remove();
    istniejeOverlay.remove();
    return;
  }

  // Utwórz overlay (tło)
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  
  // Utwórz nowe menu
  const menu = document.createElement('div');
  menu.className = 'menu-produktow';
  
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
          <button class="dodaj-do-koszyka" data-nazwa="${produkt.nazwa}" data-cena="${produkt.cena}" data-kategoria="${kategoria}">
            Dodaj do koszyka
          </button>
          <button class="zobacz-recenzje" data-nazwa="${produkt.nazwa}" data-kategoria="${kategoria}">
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

  // Dodaj event listenery
  const zamknijBtn = menu.querySelector('.zamknij-menu');
  zamknijBtn.addEventListener('click', () => {
    menu.remove();
    overlay.remove();
  });

  // Dodaj event listenery do przycisków "Dodaj do koszyka"
  const przyciskiDodaj = menu.querySelectorAll('.dodaj-do-koszyka');
  przyciskiDodaj.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
      const nazwa = this.getAttribute('data-nazwa');
      const cena = parseFloat(this.getAttribute('data-cena'));
      const kategoria = this.getAttribute('data-kategoria');
      dodajDoKoszyka(nazwa, cena, kategoria);
    });
  });

  // Dodaj event listenery do przycisków "Zobacz recenzje"
  const przyciskiRecenzje = menu.querySelectorAll('.zobacz-recenzje');
  przyciskiRecenzje.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
      const nazwa = this.getAttribute('data-nazwa');
      const kategoria = this.getAttribute('data-kategoria');
      pokazRecenzje(nazwa, kategoria);
    });
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

  // Usuń też istniejące menu produktów jeśli jest otwarte
  const istniejaceMenu = document.querySelector('.menu-produktow');
  const istniejaceOverlay = document.querySelector('.menu-overlay');
  if (istniejaceMenu && istniejaceOverlay) {
    istniejaceMenu.remove();
    istniejaceOverlay.remove();
  }
  
  // Usuń też istniejące modalne okna koszyka
  const istniejaceKoszykModal = document.getElementById('koszyk-modal');
  if (istniejaceKoszykModal) {
    istniejaceKoszykModal.style.display = 'none';
  }

  // Sprawdź czy modal już jest otwarty
  const istniejeModal = document.querySelector('.modal-recenzje');
  if (istniejeModal) {
    istniejeModal.remove();
    return;
  }

  // Utwórz modal
  const modal = document.createElement('div');
  modal.className = 'modal-recenzje';
  
  let modalHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Recenzje - ${produkt.nazwa}</h3>
        <button class="zamknij-modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="produkt-info">
          <h4>${produkt.nazwa}</h4>
          <div class="oceny-sekcja">
            <div class="gwiazdki">
              ${stworzGwiazdki(produkt.ocena)}
            </div>
            <span class="ocena-liczba">${produkt.ocena.toFixed(1)}</span>
            <span class="liczba-ocen">(${produkt.liczbaOcen} ocen)</span>
            </div>
        </div>
        <div class="recenzje-lista">
          <h4>Recenzje użytkowników</h4>
  `;

  produkt.recenzje.forEach(recenzja => {
    modalHTML += `
      <div class="recenzja">
              <div class="recenzja-header">
          <span class="uzytkownik">${recenzja.uzytkownik}</span>
                <div class="gwiazdki">
                  ${stworzGwiazdki(recenzja.ocena)}
                </div>
          <span class="data">${recenzja.data}</span>
              </div>
              <p class="komentarz">${recenzja.komentarz}</p>
            </div>
    `;
  });

  modalHTML += `
        </div>
        <div class="dodaj-recenzje">
          <h4>Dodaj swoją recenzję</h4>
          <form id="form-recenzja">
            <div class="ocena-input">
              <label>Twoja ocena:</label>
              <select name="ocena" required>
                <option value="">Wybierz ocenę</option>
                <option value="5">5 gwiazdek</option>
                <option value="4">4 gwiazdki</option>
                <option value="3">3 gwiazdki</option>
                <option value="2">2 gwiazdki</option>
                <option value="1">1 gwiazdka</option>
              </select>
            </div>
            <div class="komentarz-input">
              <label>Twój komentarz:</label>
              <textarea name="komentarz" placeholder="Napisz swoją opinię..." required></textarea>
          </div>
            <button type="submit" class="dodaj-recenzje-btn">Dodaj recenzję</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  modal.innerHTML = modalHTML;
  document.body.appendChild(modal);

  // Dodaj event listenery
  const zamknijBtn = modal.querySelector('.zamknij-modal');
  zamknijBtn.addEventListener('click', () => {
    modal.remove();
  });

  // Zamknij modal po kliknięciu poza nim
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Obsługa formularza recenzji
  const form = modal.querySelector('#form-recenzja');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const ocena = parseInt(form.ocena.value);
    const komentarz = form.komentarz.value;
    
    if (ocena && komentarz) {
      // Dodaj nową recenzję
    const nowaRecenzja = {
      uzytkownik: 'Użytkownik',
        ocena: ocena,
      komentarz: komentarz,
      data: new Date().toISOString().split('T')[0]
    };

    produkt.recenzje.push(nowaRecenzja);
    
    // Aktualizuj średnią ocenę
    const sumaOcen = produkt.recenzje.reduce((sum, r) => sum + r.ocena, 0);
    produkt.ocena = sumaOcen / produkt.recenzje.length;
    produkt.liczbaOcen = produkt.recenzje.length;

      // Zamknij modal i pokaż ponownie z nową recenzją
    modal.remove();
      pokazRecenzje(nazwaProduktu, kategoria);
  }
  });
}

// Funkcja pobierania nazwy kategorii
function pobierzNazweKategorii(kategoria) {
  const nazwyKategorii = {
    'komputery': 'Komputery',
    'smartfony': 'Smartfony',
    'audio': 'Audio',
    'tv': 'Telewizory',
    'gaming': 'Gaming',
    'smart-home': 'Smart Home',
    'casual': 'Moda Casual',
    'eleganckie': 'Moda Elegancka',
    'sportowe': 'Odzież Sportowa',
    'akcesoria': 'Akcesoria',
    'zimowe': 'Odzież Zimowa',
    'pilka-nozna': 'Piłka Nożna',
    'koszykowka': 'Koszykówka',
    'fitness': 'Fitness',
    'plywanie': 'Pływanie',
    'rowerowe': 'Rowerowe',
    'salon': 'Salon',
    'kuchnia': 'Kuchnia',
    'sypialnia': 'Sypialnia',
    'lazienka': 'Łazienka',
    'ogrod': 'Ogród'
  };
  
  return nazwyKategorii[kategoria] || kategoria;
}

// Funkcja pobierania kategorii produktu
function pobierzKategorie(nazwaProduktu) {
  for (const [kategoria, produkty] of Object.entries(produkty)) {
    if (produkty.find(p => p.nazwa === nazwaProduktu)) {
      return kategoria;
    }
  }
  return null;
}

// Funkcja dodawania do koszyka
function dodajDoKoszyka(nazwaProduktu, cena, kategoria) {
  // Usuń istniejące modalne okna
  const istniejaceModal = document.querySelector('.modal-recenzje');
  if (istniejaceModal) {
    istniejaceModal.remove();
  }
  
  const istniejaceMenu = document.querySelector('.menu-produktow');
  const istniejaceOverlay = document.querySelector('.menu-overlay');
  if (istniejaceMenu && istniejaceOverlay) {
    istniejaceMenu.remove();
    istniejaceOverlay.remove();
  }

  const istniejącyProdukt = koszyk.find(item => item.nazwa === nazwaProduktu);
  
  if (istniejącyProdukt) {
    istniejącyProdukt.ilosc += 1;
  } else {
    koszyk.push({
      nazwa: nazwaProduktu,
      cena: cena,
      ilosc: 1,
      kategoria: kategoria
    });
  }
  
  // Zapisz w localStorage
  localStorage.setItem('koszyk', JSON.stringify(koszyk));
  
  // Aktualizuj licznik koszyka
  aktualizujKoszyk();
  
  // Pokaż powiadomienie
  pokazPowiadomienie(`Dodano do koszyka!`);
}

// Funkcja usuwania z koszyka
function usunZKoszyka(index) {
  koszyk.splice(index, 1);
  localStorage.setItem('koszyk', JSON.stringify(koszyk));
  aktualizujKoszyk();
  
  // Zaktualizuj modal koszyka zamiast go pokazywać ponownie
  const modal = document.getElementById('koszyk-modal');
  if (modal) {
    modal.remove();
    pokazKoszyk();
  }
}

// Funkcja zmiany ilości
function zmienIlosc(index, zmiana) {
  const produkt = koszyk[index];
  produkt.ilosc += zmiana;
  
  if (produkt.ilosc <= 0) {
    usunZKoszyka(index);
  } else {
    localStorage.setItem('koszyk', JSON.stringify(koszyk));
    aktualizujKoszyk();
    
    // Zaktualizuj modal koszyka zamiast go pokazywać ponownie
    const modal = document.getElementById('koszyk-modal');
    if (modal) {
      modal.remove();
      pokazKoszyk();
    }
  }
}

// Funkcja aktualizacji koszyka
function aktualizujKoszyk() {
  const licznik = document.querySelector('.koszyk-licznik');
  if (licznik) {
    const sumaProduktow = koszyk.reduce((sum, item) => sum + item.ilosc, 0);
    licznik.textContent = sumaProduktow;
  }
}

// Funkcja pokazywania koszyka
function pokazKoszyk() {
  console.log('Funkcja pokazKoszyk została wywołana');
  
  // Usuń istniejące modalne okna
  const istniejaceModal = document.querySelector('.modal-recenzje');
  if (istniejaceModal) {
    istniejaceModal.remove();
  }
  
  const istniejaceMenu = document.querySelector('.menu-produktow');
  const istniejaceOverlay = document.querySelector('.menu-overlay');
  if (istniejaceMenu && istniejaceOverlay) {
    istniejaceMenu.remove();
    istniejaceOverlay.remove();
  }

  // Sprawdź czy modal już jest otwarty
  const istniejeModal = document.getElementById('koszyk-modal');
  if (istniejeModal) {
    istniejeModal.style.display = 'flex';
    return;
  }
  
  // Utwórz modal koszyka
  const modal = document.createElement('div');
  modal.id = 'koszyk-modal';
  modal.className = 'modal-koszyk';
  
  let modalHTML = `
    <div class="modal-koszyk-content">
      <div class="modal-koszyk-header">
        <h3>Koszyk (${koszyk.reduce((sum, item) => sum + item.ilosc, 0)} produktów)</h3>
        <button class="zamknij-modal">&times;</button>
    </div>
      <div class="modal-body">
  `;

  if (koszyk.length === 0) {
    modalHTML += '<p>Twój koszyk jest pusty.</p>';
  } else {
    modalHTML += '<div class="koszyk-produkty">';
    
    koszyk.forEach((item, index) => {
      modalHTML += `
      <div class="koszyk-produkt">
        <div class="produkt-info">
            <h4>${item.nazwa}</h4>
            <p>${item.cena.toFixed(2)} zł</p>
        </div>
                    <div class="ilosc-kontrolki">
            <button class="zmniejsz-ilosc" data-index="${index}">-</button>
            <span>${item.ilosc}</span>
            <button class="zwieksz-ilosc" data-index="${index}">+</button>
          </div>
          <div class="cena-calkowita">
            ${(item.cena * item.ilosc).toFixed(2)} zł
          </div>
          <button class="usun-produkt" data-index="${index}">Usuń</button>
      </div>
    `;
  });
  
    modalHTML += '</div>';
    
    const cenaCalkowita = koszyk.reduce((sum, item) => sum + (item.cena * item.ilosc), 0);
    modalHTML += `
    <div class="koszyk-podsumowanie">
        <h4>Cena całkowita: ${cenaCalkowita.toFixed(2)} zł</h4>
        <button class="wyczysc-koszyk">Wyczyść koszyk</button>
        <button class="finalizuj-zamowienie">Finalizuj zamówienie</button>
      </div>
    `;
  }

  modalHTML += `
      </div>
    </div>
  `;
  
  modal.innerHTML = modalHTML;
  document.body.appendChild(modal);
  
  console.log('Modal został utworzony i dodany do DOM:', modal);
  
  // Pokaż modal
  modal.style.display = 'flex';
  console.log('Modal display ustawiony na flex');

  // Dodaj event listenery dla przycisków w modalu koszyka
  const zamknijBtn = modal.querySelector('.zamknij-modal');
  if (zamknijBtn) {
    zamknijBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Event listenery dla kontrolek ilości
  const przyciskiZmniejsz = modal.querySelectorAll('.zmniejsz-ilosc');
  przyciskiZmniejsz.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      zmienIlosc(index, -1);
    });
  });

  const przyciskiZwieksz = modal.querySelectorAll('.zwieksz-ilosc');
  przyciskiZwieksz.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      zmienIlosc(index, 1);
    });
  });

  // Event listenery dla przycisków usuwania
  const przyciskiUsun = modal.querySelectorAll('.usun-produkt');
  przyciskiUsun.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      usunZKoszyka(index);
    });
  });

  // Event listener dla przycisku wyczyść koszyk
  const przyciskWyczysc = modal.querySelector('.wyczysc-koszyk');
  if (przyciskWyczysc) {
    przyciskWyczysc.addEventListener('click', wyczyscKoszyk);
  }

  // Zamknij modal po kliknięciu poza nim
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Funkcja czyszczenia koszyka
function wyczyscKoszyk() {
    koszyk = [];
  localStorage.setItem('koszyk', JSON.stringify(koszyk));
    aktualizujKoszyk();
  
  // Zaktualizuj modal koszyka zamiast go pokazywać ponownie
  const modal = document.getElementById('koszyk-modal');
  if (modal) {
    modal.remove();
    pokazKoszyk();
  }
}

// Funkcja pokazywania powiadomień
function pokazPowiadomienie(wiadomosc) {
  const powiadomienie = document.createElement('div');
  powiadomienie.className = 'powiadomienie';
  powiadomienie.textContent = wiadomosc;
  
  document.body.appendChild(powiadomienie);
  
  setTimeout(() => {
    powiadomienie.remove();
  }, 3000);
}

// Funkcja filtrowania produktów
function applyFilters() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;
  
  const products = document.querySelectorAll('.product');
  
  products.forEach(product => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    const productCategory = product.getAttribute('data-category');
    const productPrice = parseFloat(product.querySelector('p').textContent.match(/[\d.]+/)[0]);
    
    let showProduct = true;
    
    // Filtrowanie po nazwie
    if (searchTerm && !productName.includes(searchTerm)) {
      showProduct = false;
    }
    
    // Filtrowanie po kategorii
    if (categoryFilter && categoryFilter !== 'all' && productCategory !== categoryFilter) {
      showProduct = false;
    }
    
    // Filtrowanie po cenie
    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
      if (maxPrice && (productPrice < minPrice || productPrice > maxPrice)) {
        showProduct = false;
      } else if (!maxPrice && productPrice < minPrice) {
        showProduct = false;
      }
    }
    
    product.style.display = showProduct ? 'block' : 'none';
  });
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM załadowany');
  // Wczytaj koszyk z localStorage
  const zapisanyKoszyk = localStorage.getItem('koszyk');
  if (zapisanyKoszyk) {
    koszyk = JSON.parse(zapisanyKoszyk);
    aktualizujKoszyk();
  }
  
  // Dodaj event listener do przycisku koszyka
  const koszykBtn = document.querySelector('.koszyk-btn');
  console.log('Przycisk koszyka znaleziony:', koszykBtn);
  if (koszykBtn) {
    koszykBtn.addEventListener('click', pokazKoszyk);
    console.log('Event listener dodany do przycisku koszyka');
  } else {
    console.log('Przycisk koszyka nie został znaleziony!');
  }
  
  // Dodaj event listenery do przycisków "Zobacz więcej"
  const przyciskiZobaczWiecej = document.querySelectorAll('.button-main');
  przyciskiZobaczWiecej.forEach(przycisk => {
      if (przycisk.textContent === 'Zobacz więcej') {
      przycisk.addEventListener('click', function() {
        const produktDiv = this.closest('.product');
        const kategoria = produktDiv.getAttribute('data-category');
        pokazMenu(kategoria);
        });
      }
    });
  
  // Dodaj event listenery do filtrów (jeśli istnieją)
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', applyFilters);
  }
  
  if (priceFilter) {
    priceFilter.addEventListener('change', applyFilters);
  }
  

});
