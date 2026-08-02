/* ===== Application Logic ===== */

(function () {
  'use strict';

  // ===== DOM References =====
  const spotlightContent = document.getElementById('spotlight-content');
  const btnDiscover = document.getElementById('btn-discover');
  const btnViewAll = document.getElementById('btn-view-all');
  const filterButtons = document.getElementById('filter-buttons');
  const pioneersGrid = document.getElementById('pioneers-grid');
  const emptyState = document.getElementById('empty-state');
  const statTotal = document.getElementById('stat-total');
  const statCategories = document.getElementById('stat-categories');
  const statYears = document.getElementById('stat-years');

  // ===== State =====
  let currentFilter = 'All';
  let lastSpotlightId = -1;

  // ===== Utility Functions =====

  /**
   * Get a random integer between min and max (inclusive)
   */
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Pick a random pioneer, ensuring we don't repeat the last one
   */
  function getRandomPioneer() {
    let idx;
    do {
      idx = randomInt(0, pioneers.length - 1);
    } while (pioneers[idx].id === lastSpotlightId && pioneers.length > 1);
    lastSpotlightId = pioneers[idx].id;
    return pioneers[idx];
  }

  /**
   * Get filtered pioneers based on current category
   */
  function getFilteredPioneers() {
    if (currentFilter === 'All') return pioneers;
    return pioneers.filter(function (p) {
      return p.category === currentFilter;
    });
  }

  // ===== Rendering Functions =====

  /**
   * Generate a DiceBear avataaars avatar URL for a pioneer
   */
  function getAvatarUrl(name, color) {
    var seed = name.replace(/\s/g, '');
    var hexColor = color.replace('#', '');
    return 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + encodeURIComponent(seed) + '&backgroundColor=' + hexColor + '&skinColor=neutral&hairColor=neutral&clotheColor=neutral';
  }

  /**
   * Render a single pioneer card for the grid
   */
  function renderCard(pioneer, index) {
    var avatarUrl = getAvatarUrl(pioneer.name, pioneer.color);

    var card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.style.setProperty('--card-accent', pioneer.color);
    card.style.animationDelay = (index * 0.06) + 's';

    card.innerHTML =
      '<div class="card__header">' +
        '<img class="card__avatar" src="' + avatarUrl + '" alt="Portrait of ' + escapeHTML(pioneer.name) + '" loading="lazy" />' +
        '<div class="card__info">' +
          '<h3 class="card__name">' + escapeHTML(pioneer.name) + '</h3>' +
          '<p class="card__role">' + escapeHTML(pioneer.role) + '</p>' +
        '</div>' +
      '</div>' +
      '<span class="card__category" style="background-color: ' + pioneer.color + ';">' + escapeHTML(pioneer.category) + '</span>' +
      '<p class="card__achievement">' + escapeHTML(pioneer.achievement) + '</p>' +
      '<div class="card__footer">' +
        '<span class="card__org">📍 ' + escapeHTML(pioneer.organization) + '</span>' +
        '<span class="card__year">' + escapeHTML(pioneer.year) + '</span>' +
      '</div>';

    return card;
  }

  /**
   * Render the spotlight card with a pioneer's details
   */
  function renderSpotlight(pioneer) {
    var avatarUrl = getAvatarUrl(pioneer.name, pioneer.color);

    spotlightContent.innerHTML =
      '<div class="spotlight__badge" style="background-color: ' + pioneer.color + ';">Spotlight</div>' +
      '<div class="spotlight__avatar-wrapper">' +
        '<img class="spotlight__avatar" src="' + avatarUrl + '" alt="Portrait of ' + escapeHTML(pioneer.name) + '" />' +
      '</div>' +
      '<h2 class="spotlight__name">' + escapeHTML(pioneer.name) + '</h2>' +
      '<p class="spotlight__role">' + escapeHTML(pioneer.role) + '</p>' +
      '<div class="spotlight__org">' +
        '<span aria-hidden="true">🏛️</span> ' + escapeHTML(pioneer.organization) +
      '</div>' +
      '<p class="spotlight__achievement">' + escapeHTML(pioneer.achievement) + '</p>' +
      '<div class="spotlight__meta">' +
        '<div class="spotlight__meta-item">' +
          '<svg class="spotlight__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
            '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>' +
            '<line x1="16" y1="2" x2="16" y2="6"></line>' +
            '<line x1="8" y1="2" x2="8" y2="6"></line>' +
            '<line x1="3" y1="10" x2="21" y2="10"></line>' +
          '</svg>' +
          ' ' + escapeHTML(pioneer.year) +
        '</div>' +
        '<div class="spotlight__meta-item">' +
          '<svg class="spotlight__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
            '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>' +
            '<polyline points="22 4 12 14.01 9 11.01"></polyline>' +
          '</svg>' +
          ' ' + escapeHTML(pioneer.category) +
        '</div>' +
      '</div>';

    // Re-trigger animation
    var card = document.getElementById('spotlight-card');
    card.style.animation = 'none';
    card.offsetHeight; // force reflow
    card.style.animation = 'fadeInUp 0.5s ease forwards';
  }

  /**
   * Render all pioneer cards in the grid
   */
  function renderGrid() {
    var filtered = getFilteredPioneers();
    pioneersGrid.innerHTML = '';

    if (filtered.length === 0) {
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    filtered.forEach(function (pioneer, index) {
      var card = renderCard(pioneer, index);
      pioneersGrid.appendChild(card);
    });
  }

  /**
   * Render filter buttons
   */
  function renderFilters() {
    filterButtons.innerHTML = '';

    categories.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.className = 'filter__btn';
      if (cat === currentFilter) {
        btn.classList.add('filter__btn--active');
      }
      btn.textContent = cat;
      btn.setAttribute('aria-pressed', cat === currentFilter ? 'true' : 'false');
      btn.addEventListener('click', function () {
        currentFilter = cat;
        updateFilterButtons();
        renderGrid();
        // Scroll to grid section
        pioneersGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      filterButtons.appendChild(btn);
    });
  }

  /**
   * Update active state on filter buttons
   */
  function updateFilterButtons() {
    var buttons = filterButtons.querySelectorAll('.filter__btn');
    buttons.forEach(function (btn) {
      var isActive = btn.textContent === currentFilter;
      btn.classList.toggle('filter__btn--active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /**
   * Update stats
   */
  function updateStats() {
    statTotal.textContent = pioneers.length;
    statCategories.textContent = categories.length - 1; // exclude "All"

    var minYear = Infinity;
    var maxYear = 0;
    pioneers.forEach(function (p) {
      var yearMatch = p.year.match(/(\d{4})/);
      if (yearMatch) {
        var year = parseInt(yearMatch[1], 10);
        if (year < minYear) minYear = year;
        if (year > maxYear) maxYear = year;
      }
    });

    if (minYear !== Infinity && maxYear > 0) {
      statYears.textContent = (maxYear - minYear) + '+';
    } else {
      statYears.textContent = '0';
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ===== Event Handlers =====

  function handleDiscover() {
    var pioneer = getRandomPioneer();
    renderSpotlight(pioneer);
  }

  function handleViewAll() {
    currentFilter = 'All';
    updateFilterButtons();
    renderGrid();
    // Scroll to grid section
    var gridSection = document.querySelector('.grid');
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ===== Keyboard Navigation =====

  function handleKeyboardNavigation(e) {
    // Allow Enter/Space to activate focused filter buttons
    if (e.key === 'Enter' || e.key === ' ') {
      var focused = document.activeElement;
      if (focused && focused.classList.contains('filter__btn')) {
        e.preventDefault();
        focused.click();
      }
    }
  }

  // ===== Initialization =====

  function init() {
    renderFilters();
    renderGrid();
    updateStats();
    handleDiscover();

    btnDiscover.addEventListener('click', handleDiscover);
    btnViewAll.addEventListener('click', handleViewAll);
    document.addEventListener('keydown', handleKeyboardNavigation);
  }

  // Start the app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
