// Panel Administracyjny - Modern Style
let adminData = {
  orders: [],
  products: [],
  discounts: [],
  analytics: {
    pageViews: 0,
    conversionRate: 0,
    avgOrderValue: 0,
    bounceRate: 0
  }
};

// Inicjalizacja panelu administracyjnego
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicjalizacja panelu administracyjnego...');
  
  // Załaduj dane z localStorage
  loadAdminData();
  
  // Inicjalizuj nawigację
  initAdminNavigation();
  
  // Załaduj dane do dashboard
  loadDashboardData();
  
  // Załaduj produkty
  loadProducts();
  
  // Załaduj zamówienia
  loadOrders();
  
  // Załaduj rabaty
  loadDiscounts();
  
  // Załaduj analytics
  loadAnalytics();
  
  console.log('✅ Panel administracyjny zainicjalizowany');
});

// Nawigacja między sekcjami
function initAdminNavigation() {
  const navButtons = document.querySelectorAll('.admin-nav-btn');
  const sections = document.querySelectorAll('.admin-section');
  
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-section');
      
      // Usuń aktywną klasę z wszystkich przycisków i sekcji
      navButtons.forEach(btn => btn.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));
      
      // Dodaj aktywną klasę do klikniętego przycisku i odpowiedniej sekcji
      this.classList.add('active');
      document.getElementById(targetSection).classList.add('active');
    });
  });
}

// Załaduj dane z localStorage
function loadAdminData() {
  const savedData = localStorage.getItem('adminData');
  if (savedData) {
    adminData = JSON.parse(savedData);
  } else {
    // Inicjalizuj przykładowe dane
    initSampleData();
  }
}

// Inicjalizuj przykładowe dane
function initSampleData() {
  adminData = {
    orders: [
      {
        id: 'ORD-001',
        customer: 'Jan Kowalski',
        email: 'jan@example.com',
        products: ['MacBook Air M3', 'Mysz bezprzewodowa'],
        total: 5299.99,
        status: 'delivered',
        date: '2024-01-15',
        address: 'ul. Przykładowa 1, Warszawa'
      },
      {
        id: 'ORD-002',
        customer: 'Anna Nowak',
        email: 'anna@example.com',
        products: ['Bluza hoodie', 'Jeansy mom fit'],
        total: 439.98,
        status: 'processing',
        date: '2024-01-18',
        address: 'ul. Testowa 2, Kraków'
      },
      {
        id: 'ORD-003',
        customer: 'Piotr Wiśniewski',
        email: 'piotr@example.com',
        products: ['Komputer Gaming RTX 4070'],
        total: 6999.99,
        status: 'shipped',
        date: '2024-01-20',
        address: 'ul. Główna 3, Gdańsk'
      }
    ],
    products: [],
    discounts: [
      {
        code: 'WELCOME10',
        type: 'percentage',
        value: 10,
        uses: 15,
        limit: 100,
        expires: '2024-12-31',
        active: true
      },
      {
        code: 'SAVE50',
        type: 'fixed',
        value: 50,
        uses: 8,
        limit: 50,
        expires: '2024-06-30',
        active: true
      }
    ],
    analytics: {
      pageViews: 12543,
      conversionRate: 3.2,
      avgOrderValue: 2456.78,
      bounceRate: 42.1
    }
  };
  
  saveAdminData();
}

// Zapisz dane do localStorage
function saveAdminData() {
  localStorage.setItem('adminData', JSON.stringify(adminData));
}

// Załaduj dane dashboard
function loadDashboardData() {
  const totalOrders = adminData.orders.length;
  const totalRevenue = adminData.orders.reduce((sum, order) => sum + order.total, 0);
  const totalProducts = adminData.products.length;
  const activeUsers = new Set(adminData.orders.map(order => order.email)).size;
  
  document.getElementById('total-orders').textContent = totalOrders;
  document.getElementById('total-revenue').textContent = totalRevenue.toFixed(2) + ' zł';
  document.getElementById('total-products').textContent = totalProducts;
  document.getElementById('active-users').textContent = activeUsers;
  
  // Generuj wykres sprzedaży
  generateSalesChart();
}

// Generuj wykres sprzedaży
function generateSalesChart() {
  const canvas = document.getElementById('salesChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Przykładowe dane sprzedaży (ostatnie 30 dni)
  const salesData = generateSalesData();
  
  // Rysuj prosty wykres słupkowy
  const maxValue = Math.max(...salesData);
  const barWidth = canvas.width / salesData.length;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#667eea';
  
  salesData.forEach((value, index) => {
    const barHeight = (value / maxValue) * (canvas.height - 40);
    const x = index * barWidth;
    const y = canvas.height - barHeight - 20;
    
    ctx.fillRect(x + 5, y, barWidth - 10, barHeight);
  });
  
  // Dodaj etykiety
  ctx.fillStyle = '#333';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  
  salesData.forEach((value, index) => {
    const x = index * barWidth + barWidth / 2;
    ctx.fillText(value.toString(), x, canvas.height - 5);
  });
}

// Generuj przykładowe dane sprzedaży
function generateSalesData() {
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push(Math.floor(Math.random() * 1000) + 100);
  }
  return data;
}

// Załaduj produkty
function loadProducts() {
  // Załaduj produkty z głównego systemu
  if (typeof window.produkty !== 'undefined') {
    adminData.products = [];
    
    for (const [kategoria, podkategorie] of Object.entries(window.produkty)) {
      for (const [podkategoria, produktyLista] of Object.entries(podkategorie)) {
        produktyLista.forEach(produkt => {
          adminData.products.push({
            id: generateProductId(),
            nazwa: produkt.nazwa,
            kategoria: kategoria,
            podkategoria: podkategoria,
            cena: produkt.cena,
            ocena: produkt.ocena,
            opis: produkt.opis,
            status: 'active',
            dataDodania: new Date().toISOString().split('T')[0]
          });
        });
      }
    }
  }
  
  displayProducts();
}

// Wyświetl produkty w tabeli
function displayProducts() {
  const tbody = document.getElementById('products-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  adminData.products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.nazwa}</td>
      <td>${product.kategoria}</td>
      <td>${product.cena.toFixed(2)} zł</td>
      <td>${product.ocena.toFixed(1)} ⭐</td>
      <td><span class="status-badge status-${product.status}">${product.status === 'active' ? 'Aktywny' : 'Nieaktywny'}</span></td>
      <td>
        <button class="btn-admin warning" onclick="editProduct('${product.id}')">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-admin danger" onclick="deleteProduct('${product.id}')">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Załaduj zamówienia
function loadOrders() {
  displayOrders();
}

// Wyświetl zamówienia w tabeli
function displayOrders() {
  const tbody = document.getElementById('orders-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  adminData.orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.customer}<br><small>${order.email}</small></td>
      <td>${order.products.join(', ')}</td>
      <td>${order.total.toFixed(2)} zł</td>
      <td><span class="status-badge status-${order.status}">${getStatusText(order.status)}</span></td>
      <td>${order.date}</td>
      <td>
        <button class="btn-admin" onclick="updateOrderStatus('${order.id}')">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-admin warning" onclick="viewOrderDetails('${order.id}')">
          <i class="fas fa-eye"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Pobierz tekst statusu
function getStatusText(status) {
  const statusMap = {
    'pending': 'Oczekujące',
    'processing': 'W trakcie',
    'shipped': 'Wysłane',
    'delivered': 'Dostarczone',
    'cancelled': 'Anulowane'
  };
  return statusMap[status] || status;
}

// Załaduj rabaty
function loadDiscounts() {
  displayDiscounts();
}

// Wyświetl rabaty w tabeli
function displayDiscounts() {
  const tbody = document.getElementById('discounts-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  adminData.discounts.forEach(discount => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${discount.code}</strong></td>
      <td>${discount.type === 'percentage' ? 'Procentowy' : 'Stały'}</td>
      <td>${discount.type === 'percentage' ? discount.value + '%' : discount.value + ' zł'}</td>
      <td>${discount.uses}</td>
      <td>${discount.limit}</td>
      <td>${discount.expires}</td>
      <td><span class="status-badge status-${discount.active ? 'active' : 'inactive'}">${discount.active ? 'Aktywny' : 'Nieaktywny'}</span></td>
      <td>
        <button class="btn-admin warning" onclick="editDiscount('${discount.code}')">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-admin danger" onclick="deleteDiscount('${discount.code}')">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Załaduj analytics
function loadAnalytics() {
  document.getElementById('page-views').textContent = adminData.analytics.pageViews.toLocaleString();
  document.getElementById('conversion-rate').textContent = adminData.analytics.conversionRate + '%';
  document.getElementById('avg-order-value').textContent = adminData.analytics.avgOrderValue.toFixed(2) + ' zł';
  document.getElementById('bounce-rate').textContent = adminData.analytics.bounceRate + '%';
  
  // Generuj wykresy
  generateProductsChart();
  generateTrafficChart();
}

// Generuj wykres produktów
function generateProductsChart() {
  const canvas = document.getElementById('productsChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Przykładowe dane produktów
  const productData = [
    { name: 'Elektronika', value: 45 },
    { name: 'Moda', value: 30 },
    { name: 'Dom', value: 15 },
    { name: 'Sport', value: 10 }
  ];
  
  // Rysuj wykres kołowy
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;
  
  let currentAngle = 0;
  const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
  
  productData.forEach((item, index) => {
    const sliceAngle = (item.value / 100) * 2 * Math.PI;
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[index];
    ctx.fill();
    
    // Dodaj etykietę
    const labelAngle = currentAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(labelAngle) * (radius + 20);
    const labelY = centerY + Math.sin(labelAngle) * (radius + 20);
    
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(item.name + ' (' + item.value + '%)', labelX, labelY);
    
    currentAngle += sliceAngle;
  });
}

// Generuj wykres ruchu
function generateTrafficChart() {
  const canvas = document.getElementById('trafficChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Przykładowe dane ruchu
  const trafficData = [
    { source: 'Google', value: 45 },
    { source: 'Facebook', value: 25 },
    { source: 'Instagram', value: 20 },
    { source: 'Inne', value: 10 }
  ];
  
  // Rysuj wykres słupkowy
  const maxValue = Math.max(...trafficData.map(item => item.value));
  const barWidth = canvas.width / trafficData.length;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  trafficData.forEach((item, index) => {
    const barHeight = (item.value / maxValue) * (canvas.height - 40);
    const x = index * barWidth;
    const y = canvas.height - barHeight - 20;
    
    ctx.fillStyle = `hsl(${index * 90}, 70%, 50%)`;
    ctx.fillRect(x + 10, y, barWidth - 20, barHeight);
    
    // Dodaj etykietę
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(item.source, x + barWidth / 2, canvas.height - 5);
    ctx.fillText(item.value + '%', x + barWidth / 2, y - 5);
  });
}

// Funkcje zarządzania produktami
window.showAddProductForm = function() {
  alert('Funkcja dodawania produktów będzie dostępna w następnej wersji');
};

window.editProduct = function(productId) {
  alert(`Edycja produktu ${productId} - funkcja w rozwoju`);
};

window.deleteProduct = function(productId) {
  if (confirm('Czy na pewno chcesz usunąć ten produkt?')) {
    adminData.products = adminData.products.filter(p => p.id !== productId);
    saveAdminData();
    displayProducts();
  }
};

// Funkcje zarządzania zamówieniami
window.updateOrderStatus = function(orderId) {
  const order = adminData.orders.find(o => o.id === orderId);
  if (order) {
    const newStatus = prompt('Nowy status:', order.status);
    if (newStatus && newStatus !== order.status) {
      order.status = newStatus;
      saveAdminData();
      displayOrders();
    }
  }
};

window.viewOrderDetails = function(orderId) {
  const order = adminData.orders.find(o => o.id === orderId);
  if (order) {
    alert(`Szczegóły zamówienia ${orderId}:\n\nKlient: ${order.customer}\nEmail: ${order.email}\nProdukty: ${order.products.join(', ')}\nWartość: ${order.total.toFixed(2)} zł\nStatus: ${getStatusText(order.status)}\nData: ${order.date}\nAdres: ${order.address}`);
  }
};

window.filterOrders = function() {
  // Implementacja filtrowania zamówień
  displayOrders();
};

// Funkcje zarządzania rabatami
window.showAddDiscountForm = function() {
  const code = prompt('Kod promocyjny:');
  const type = prompt('Typ (percentage/fixed):');
  const value = prompt('Wartość:');
  
  if (code && type && value) {
    const discount = {
      code: code,
      type: type,
      value: parseFloat(value),
      uses: 0,
      limit: 100,
      expires: '2024-12-31',
      active: true
    };
    
    adminData.discounts.push(discount);
    saveAdminData();
    displayDiscounts();
  }
};

window.editDiscount = function(code) {
  alert(`Edycja rabatu ${code} - funkcja w rozwoju`);
};

window.deleteDiscount = function(code) {
  if (confirm('Czy na pewno chcesz usunąć ten kod promocyjny?')) {
    adminData.discounts = adminData.discounts.filter(d => d.code !== code);
    saveAdminData();
    displayDiscounts();
  }
};

// Pomocnicze funkcje
function generateProductId() {
  return 'PROD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Zapisz ustawienia
document.addEventListener('DOMContentLoaded', function() {
  const settingsForm = document.querySelector('#settings form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Ustawienia zapisane!');
    });
  }
});
