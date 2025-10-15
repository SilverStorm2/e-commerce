export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:px-10">
        <p>(c) {new Date().getFullYear()} Modern Style. Wszystkie prawa zastrzezone.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="mailto:kontakt@modernstyle.pl">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
