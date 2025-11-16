(() => {
  const OFFER_LINKS = [
    { href: 'moda.html', label: 'Moda' },
    { href: 'dom.html', label: 'Dom' },
    { href: 'sport.html', label: 'Sport' },
    { href: 'elektronika.html', label: 'Elektronika' },
    { href: 'uroda.html', label: 'Uroda' },
    { href: 'stylowa-przygoda.html', label: 'Stylowa Przygoda' }
  ];

  const normalisePath = () => window.location.pathname.replace(/\\/g, '/');

  const isHomePage = () => {
    const path = normalisePath().replace(/\/+$/, '');
    return (
      path === '' ||
      path === '/' ||
      path.endsWith('/index') ||
      path.endsWith('/index.html')
    );
  };

  const buildAnchor = (hash) => (isHomePage() ? hash : `index.html${hash}`);

  const isCurrentPage = (href) => {
    const path = normalisePath();
    if (!href) {
      return false;
    }
    return path.endsWith(`/${href}`);
  };

  const composeAttrs = (isActive, baseClass = '') => {
    const classes = [];
    if (baseClass) {
      classes.push(baseClass);
    }
    if (isActive) {
      classes.push('active');
    }
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';
    const ariaAttr = isActive ? ' aria-current="page"' : '';
    return `${classAttr}${ariaAttr}`;
  };

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

    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Główna nawigacja');

    const ofertaLinks = OFFER_LINKS.map(
      (item) =>
        `<a href="${item.href}"${composeAttrs(isCurrentPage(item.href))}>${item.label}</a>`
    ).join('');

    const homeTarget = isHomePage() ? '#home' : 'index.html#home';
    const ofertaTarget = buildAnchor('#oferta');

    nav.innerHTML = `
      <a href="${homeTarget}"${composeAttrs(isHomePage())}>Home</a>
      <div class="dropdown" data-dropdown>
        <a href="${ofertaTarget}" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Oferta</a>
        <div class="dropdown-menu">
          ${ofertaLinks}
        </div>
      </div>
      <a href="ulubione.html"${composeAttrs(isCurrentPage('ulubione.html'))}>Ulubione</a>
      <a href="${buildAnchor('#jak-to-dziala')}">Jak to dzia�'a</a>
      <a href="${buildAnchor('#kontakt')}">Kontakt</a>
      <a href="admin.html"${composeAttrs(isCurrentPage('admin.html'), 'admin-link')}>Admin</a>
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
