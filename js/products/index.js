// Importuj wszystkie kategorie produktów
import { elektronika } from './elektronika.js';
import { moda } from './moda.js';
import { sport } from './sport.js';
import { dom } from './dom.js';
import { uroda } from './uroda.js';
import { stylowaPrzygoda } from './stylowa-przygoda.js';

// Połącz wszystkie kategorie w jeden obiekt produktów
const produkty = {
  ...elektronika,
  ...moda,
  ...sport,
  ...dom,
  ...uroda,
  ...stylowaPrzygoda
};

// Eksportuj obiekt produktów
export { produkty };

// Dla kompatybilności z CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = produkty;
}

