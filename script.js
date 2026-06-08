document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSearch();
  initCursorGlow();
  initFeaturedCarousel();
  initTrendingCarousel();
  initCategories();
  initAllGames();
  initGameModal();
  initScrollAnimations();
  initSmoothScroll();
  initKeyboardNav();
});

let currentTheme = localStorage.getItem('nexusTheme') || 'dark';
const searchInput = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');
const searchOverlay = document.getElementById('searchOverlay');

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const icon = toggle.querySelector('i');
  icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  toggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('nexusTheme', currentTheme);
    icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    showToast(`Switched to ${currentTheme} mode`, 'info');
  });
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  document.body.appendChild(overlay);

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  const header = document.querySelector('.header');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    header.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
  });
}

function initSearch() {
  const trigger = document.getElementById('searchTrigger');
  const closeBtn = document.getElementById('searchClose');

  trigger.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 200);
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchOverlay.classList.contains('active') ? closeSearch() : trigger.click();
    }
  });

  searchInput.addEventListener('input', performSearch);
}

function closeSearch() {
  searchOverlay.classList.remove('active');
  document.body.style.overflow = '';
  searchInput.value = '';
  searchResults.innerHTML = '';
}

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = `
      <div class="search-empty">
        <i class="fas fa-search"></i>
        <h3>Search any game</h3>
        <p>Start typing to find games instantly.</p>
      </div>
    `;
    return;
  }

  const results = gamesDB.filter(game =>
    game.title.toLowerCase().includes(query) ||
    game.category.toLowerCase().includes(query) ||
    game.genre.toLowerCase().includes(query) ||
    game.developer.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-empty">
        <i class="fas fa-search-minus"></i>
        <h3>No games found</h3>
        <p>Try a different search term.</p>
      </div>
    `;
    return;
  }

  searchResults.innerHTML = results.slice(0, 10).map(game => {
    const titleHighlighted = highlightText(game.title, query);
    const categoryHighlighted = highlightText(game.category, query);
    return `
      <div class="search-result-item" data-id="${game.id}">
        <img src="${game.image}" alt="${game.title}" loading="lazy">
        <div class="result-info">
          <h4>${titleHighlighted}</h4>
          <p>${categoryHighlighted} &middot; ${game.year}</p>
        </div>
        <div class="result-price ${game.price === 'Free' ? 'free' : ''}">${game.salePrice || game.price}</div>
      </div>
    `;
  }).join('');

  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.dataset.id);
      closeSearch();
      openGameModal(id);
    });
  });
}

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

function createGameCard(game) {
  const ratingStars = '<i class="fas fa-star"></i>'.repeat(Math.floor(game.rating)) +
    (game.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '');
  const priceHtml = game.salePrice
    ? `<span class="text-neon">${game.salePrice}</span> <span class="original">${game.price}</span>`
    : game.price === 'Free'
      ? `<span class="free">Free</span>`
      : `<span>${game.price}</span>`;

  return `
    <div class="game-card fade-up" data-id="${game.id}">
      <div class="game-image">
        <img src="${game.image}" alt="${game.title}" loading="lazy">
        <div class="game-overlay">
          <button class="btn btn-primary btn-sm quick-view" data-id="${game.id}">
            <i class="fas fa-eye"></i> Quick View
          </button>
        </div>
        ${game.salePrice ? '<div class="game-badge">Sale</div>' : ''}
      </div>
      <div class="game-body">
        <div class="game-category">${game.category}</div>
        <h3>${game.title}</h3>
        <div class="game-meta">
          <span class="game-rating">${ratingStars} ${game.rating}</span>
          <span>&middot; ${game.year}</span>
        </div>
        <div class="game-price">${priceHtml}</div>
      </div>
    </div>
  `;
}

function initFeaturedCarousel() {
  const carousel = document.getElementById('featuredCarousel');
  if (!carousel) return;
  carousel.innerHTML = featuredGames.map(createGameCard).join('');
  attachCardClick(carousel);
  initCarouselScroll('featured');
}

function initTrendingCarousel() {
  const carousel = document.getElementById('trendingCarousel');
  if (!carousel) return;
  carousel.innerHTML = trendingGames.map(createGameCard).join('');
  attachCardClick(carousel);
  initCarouselScroll('trending');
}

function attachCardClick(container) {
  container.querySelectorAll('.game-card, .quick-view').forEach(el => {
    el.addEventListener('click', (e) => {
      const card = el.closest('.game-card') || el;
      const id = parseInt(card.dataset.id);
      if (!isNaN(id)) openGameModal(id);
    });
  });
}

function initCarouselScroll(id) {
  const carousel = document.getElementById(id + 'Carousel');
  const btns = document.querySelectorAll(`[data-scroll="${id}"]`);
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.dir;
      const scrollAmount = 300;
      carousel.scrollBy({
        left: dir === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    });
  });
}

function initCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = categories.map(cat => {
    const count = gamesDB.filter(g => g.category === cat.name).length;
    return `
      <div class="category-card fade-up" data-category="${cat.name}">
        <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
        <h3>${cat.name}</h3>
        <div class="category-count">${count} games</div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      document.getElementById('genreFilter').value = category;
      renderAllGames(category);
      document.getElementById('all-games').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initAllGames() {
  const filter = document.getElementById('genreFilter');
  const categories_list = [...new Set(gamesDB.map(g => g.category))].sort();
  filter.innerHTML = '<option value="all">All Genres</option>' +
    categories_list.map(c => `<option value="${c}">${c}</option>`).join('');

  filter.addEventListener('change', () => renderAllGames(filter.value));
  renderAllGames('all');
}

function renderAllGames(genre) {
  const grid = document.getElementById('allGamesGrid');
  if (!grid) return;
  const filtered = genre === 'all' ? gamesDB : gamesDB.filter(g => g.category === genre);
  grid.innerHTML = filtered.length
    ? filtered.map(createGameCard).join('')
    : '<div style="text-align:center;padding:60px 0;color:var(--text-muted)"><i class="fas fa-gamepad" style="font-size:3rem;margin-bottom:16px;display:block"></i><h3>No games found</h3><p>Try a different genre.</p></div>';
  attachCardClick(grid);
  observeFadeElements();
}

function initGameModal() {
  const overlay = document.getElementById('gameModalOverlay');
  const modal = document.getElementById('gameModal');
  const close = document.getElementById('modalClose');

  close.addEventListener('click', closeGameModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeGameModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeGameModal();
    }
  });
}

function openGameModal(id) {
  const game = gamesDB.find(g => g.id === id);
  if (!game) return;

  const overlay = document.getElementById('gameModalOverlay');
  const modalContent = document.getElementById('modalContent');
  document.body.style.overflow = 'hidden';

  const ratingStars = '<i class="fas fa-star"></i>'.repeat(Math.floor(game.rating)) +
    (game.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '');

  const priceHtml = game.salePrice
    ? `<span class="text-neon" style="font-size:1.8rem;font-weight:800">${game.salePrice}</span>
       <span style="font-size:1.2rem;color:var(--text-muted);text-decoration:line-through;margin-left:12px">${game.price}</span>`
    : `<span style="font-size:1.8rem;font-weight:800">${game.price}</span>`;

  const reqHtml = game.requirements
    ? Object.entries(game.requirements).map(([key, val]) =>
        `<div class="modal-req-item"><span class="req-label">${key}:</span><span class="req-value">${val}</span></div>`
      ).join('')
    : '<div class="modal-req-item"><span style="color:var(--text-muted)">Check official site for requirements</span></div>';

  const screenshotsHtml = game.screenshots
    ? game.screenshots.map(src => `<img src="${src}" alt="${game.title} screenshot" loading="lazy">`).join('')
    : '';

  const relatedHtml = gamesDB
    .filter(g => g.category === game.category && g.id !== game.id)
    .slice(0, 3)
    .map(g => createGameCard(g))
    .join('');

  modalContent.innerHTML = `
    <div class="modal-banner">
      <img src="${game.banner}" alt="${game.title}">
    </div>
    <div class="modal-body">
      <div class="modal-header">
        <div class="modal-thumb">
          <img src="${game.image}" alt="${game.title}">
        </div>
        <div class="modal-title">
          <h2>${game.title}</h2>
          <div class="modal-meta">
            <span class="stars">${ratingStars}</span>
            <span><i class="fas fa-star"></i> ${game.rating}</span>
            <span><i class="fas fa-calendar"></i> ${game.year}</span>
            <span><i class="fas fa-tag"></i> ${game.category}</span>
            <span><i class="fas fa-code-branch"></i> ${game.genre}</span>
          </div>
        </div>
      </div>

      <div class="modal-info-grid">
        <div class="modal-description">
          <h3 class="modal-section-title"><i class="fas fa-info-circle"></i> About</h3>
          <p>${game.description}</p>
        </div>
        <div>
          <h3 class="modal-section-title"><i class="fas fa-clipboard-list"></i> Details</h3>
          <div class="modal-details">
            <div class="modal-detail-item">
              <div class="detail-label">Developer</div>
              <div class="detail-value">${game.developer}</div>
            </div>
            <div class="modal-detail-item">
              <div class="detail-label">Publisher</div>
              <div class="detail-value">${game.publisher}</div>
            </div>
            <div class="modal-detail-item">
              <div class="detail-label">Release Year</div>
              <div class="detail-value">${game.year}</div>
            </div>
            <div class="modal-detail-item">
              <div class="detail-label">Category</div>
              <div class="detail-value">${game.category}</div>
            </div>
            <div class="modal-detail-item">
              <div class="detail-label">Genre</div>
              <div class="detail-value">${game.genre}</div>
            </div>
            <div class="modal-detail-item">
              <div class="detail-label">Rating</div>
              <div class="detail-value"><i class="fas fa-star" style="color:var(--warning)"></i> ${game.rating}/5</div>
            </div>
          </div>
        </div>
      </div>

      ${screenshotsHtml ? `
      <h3 class="modal-section-title"><i class="fas fa-images"></i> Screenshots</h3>
      <div class="modal-screenshots">${screenshotsHtml}</div>` : ''}

      <h3 class="modal-section-title"><i class="fas fa-desktop"></i> System Requirements</h3>
      <div class="modal-reqs">${reqHtml}</div>

      <div class="modal-actions">
        <a href="${game.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fas fa-download"></i> Get Game
        </a>
        <button class="btn btn-secondary modal-close-btn">
          <i class="fas fa-times"></i> Close
        </button>
      </div>

      ${relatedHtml ? `
      <div class="modal-related">
        <h3 class="modal-section-title"><i class="fas fa-link"></i> Related Games</h3>
        <div class="modal-related-grid">${relatedHtml}</div>
      </div>` : ''}
    </div>
  `;

  modalContent.querySelectorAll('.quick-view, .game-card').forEach(el => {
    el.addEventListener('click', (e) => {
      const card = el.closest('.game-card') || el;
      const nid = parseInt(card.dataset.id);
      if (!isNaN(nid)) { openGameModal(nid); }
    });
  });

  modalContent.querySelector('.modal-close-btn')?.addEventListener('click', closeGameModal);

  overlay.classList.add('active');
  modal.scrollTop = 0;
}

function closeGameModal() {
  document.getElementById('gameModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function initScrollAnimations() {
  observeFadeElements();
}

function observeFadeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-in, .fade-up').forEach(el => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('[data-genre]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const genre = link.dataset.genre;
      const filter = document.getElementById('genreFilter');
      if (filter) {
        filter.value = genre;
        filter.dispatchEvent(new Event('change'));
      }
      const el = document.getElementById('all-games');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'f' || e.key === 'F') {
      document.getElementById('searchTrigger')?.click();
    }
  });
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
