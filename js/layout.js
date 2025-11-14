(() => {
  const OFFER_LINKS = [
    { href: 'moda.html', label: 'Moda' },
    { href: 'dom.html', label: 'Dom' },
    { href: 'sport.html', label: 'Sport' },
    { href: 'elektronika.html', label: 'Elektronika' },
    { href: 'uroda.html', label: 'Uroda' },
    { href: 'stylowa-przygoda.html', label: 'Stylowa Przygoda' }
  ];

  const isHomePage = () => {
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.endsWith('/') || path.endsWith('index.html') || !path.includes('.');
  };

  const buildAnchor = (hash) => (isHomePage() ? hash : `index.html${hash}`);

  const isCurrentPage = (slug) =>
    window.location.pathname.replace(/\\/g, '/').includes(slug);

  const Navbar = () => {
    const header = document.querySelector('.top-bar');
    if (!header) {
      return null;
    }

    const container = header.querySelector('.container') || header;
    let nav = container.querySelector('.main-nav');

    if (!nav) {
      nav = document.createElement('nav');
      nav.className = 'main-nav';
      container.appendChild(nav);
    }

    if (nav.dataset.rendered === 'true') {
      return header;
    }

    const ofertaLinks = OFFER_LINKS.map((item) => {
      const active = isCurrentPage(item.href.replace('.html', ''))
        ? 'class="active"'
        : '';
      return `<a href="${item.href}" ${active}>${item.label}</a>`;
    }).join('');

    const homeTarget = isHomePage() ? '#home' : 'index.html#home';
    const ofertaTarget = buildAnchor('#oferta');

    const favoritesActive = isCurrentPage('ulubione') ? 'active' : '';
    const adminActive = isCurrentPage('admin') ? 'active' : '';

    nav.innerHTML = `
      <a href="${homeTarget}" class="${isHomePage() ? 'active' : ''}">Home</a>
      <div class="dropdown">
        <a href="${ofertaTarget}" class="dropdown-toggle">Oferta</a>
        <div class="dropdown-menu">
          ${ofertaLinks}
        </div>
      </div>
      <a href="ulubione.html" class="${favoritesActive}">Ulubione</a>
      <a href="${buildAnchor('#jak-to-dziala')}">Jak to działa</a>
      <a href="${buildAnchor('#kontakt')}">Kontakt</a>
      <a href="admin.html" class="admin-link ${adminActive}">Admin</a>
    `;

    nav.dataset.rendered = 'true';
    return header;
  };

  const Container = (children) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    children.forEach((child) => wrapper.appendChild(child));
    return wrapper;
  };

  const collectContent = (header, footer) => {
    if (!footer) {
      return [];
    }

    const nodes = [];
    let current =
      header && header.parentNode === document.body
        ? header.nextSibling
        : document.body.firstChild;

    while (current && current !== footer) {
      const next = current.nextSibling;
      if (current.nodeType === Node.ELEMENT_NODE) {
        nodes.push(current);
      }
      current = next;
    }

    return nodes;
  };

  const App = () => {
    if (document.querySelector('[data-page-container="true"]')) {
      return;
    }

    const header = Navbar();
    const footer = document.querySelector('.bottom-bar');
    if (!footer || !header) {
      return;
    }

    const toWrap = collectContent(header, footer);
    if (!toWrap.length) {
      return;
    }

    const container = Container(toWrap);
    container.setAttribute('data-page-container', 'true');
    footer.parentNode.insertBefore(container, footer);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App);
  } else {
    App();
  }
})();
