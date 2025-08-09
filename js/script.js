document.addEventListener('DOMContentLoaded', () => {
  const isSportPage = document.querySelector('.sport-hero') !== null;
  if (!isSportPage) return;

  const form = document.getElementById('sportFilters');
  if (!form) return;

  const categorySelect = document.getElementById('filterCategory');
  const typeSelect = document.getElementById('filterType');
  const resetBtn = document.getElementById('resetFilters');
  const productCards = Array.from(document.querySelectorAll('.products .product'));

  const applyFilters = () => {
    const selectedCategory = (categorySelect && categorySelect.value) || '';
    const selectedType = (typeSelect && typeSelect.value) || '';

    productCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTags = (card.getAttribute('data-tags') || '').split(',').map((t) => t.trim());

      const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
      const matchesType = !selectedType || cardTags.includes(selectedType);

      const shouldShow = matchesCategory && matchesType;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilters();
  });

  if (categorySelect) categorySelect.addEventListener('change', applyFilters);
  if (typeSelect) typeSelect.addEventListener('change', applyFilters);
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (categorySelect) categorySelect.value = '';
      if (typeSelect) typeSelect.value = '';
      applyFilters();
    });
  }

  // Initial state
  applyFilters();
});


