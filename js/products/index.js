// Importuj wszystkie kategorie produktów
const { elektronika } = require('./elektronika.js');
const { moda } = require('./moda.js');
const { sport } = require('./sport.js');
const { dom } = require('./dom.js');
const { uroda } = require('./uroda.js');
const { stylowaPrzygoda } = require('./stylowa-przygoda.js');

// Połącz wszystkie kategorie w jeden obiekt produktów
const produkty = Object.assign({},
  elektronika,
  moda,
  sport,
  dom,
  uroda,
  stylowaPrzygoda
);

// Eksportuj obiekt produktów
module.exports = produkty;

