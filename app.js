/* ===== Application Logic ===== */

(function () {
  'use strict';

  // ===== DOM References =====
  const spotlightContent = document.getElementById('spotlight-content');
  const btnDiscover = document.getElementById('btn-discover');
  const btnViewAll = document.getElementById('btn-view-all');
  const filterButtons = document.getElementById('filter-buttons');
  const pioneersGrid = document.getElementById('pioneers-grid');
  const skeletonGrid = document.getElementById('skeleton-grid');
  const emptyState = document.getElementById('empty-state');
  const statTotal = document.getElementById('stat-total');
  const statCategories = document.getElementById('stat-categories');
  const statYears = document.getElementById('stat-years');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const searchResultsCount = document.getElementById('search-results-count');
  const btnGridView = document.getElementById('btn-grid-view');
  const btnTimelineView = document.getElementById('btn-timeline-view');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const btnOpenNominate = document.getElementById('btn-open-nominate');
  const nominateModal = document.getElementById('nominate-modal');
  const nominateOverlay = document.getElementById('nominate-overlay');
  const nominateClose = document.getElementById('nominate-close');
  const nominateCancel = document.getElementById('nominate-cancel');
  const nominateForm = document.getElementById('nominate-form');
  const nominateSuccess = document.getElementById('nominate-success');
  const detailModal = document.getElementById('detail-modal');
  const detailOverlay = document.getElementById('detail-overlay');
  const detailClose = document.getElementById('detail-close');
  const detailBody = document.getElementById('detail-body');
  const backToTopBtn = document.getElementById('back-to-top');
  const resourcesGrid = document.getElementById('resources-grid');

  // ===== State =====
  let currentFilter = 'All';
  let currentSearch = '';
  let currentView = 'grid';
  let lastSpotlightId = -1;
  let currentDetailPioneer = null;

  // ===== Resources Data =====
  const resources = [
    {
      icon: '🏛️',
      title: 'Black in AI',
      desc: 'A global community dedicated to increasing the representation and participation of Black individuals in the field of artificial intelligence.',
      tag: 'Community',
      link: 'https://blackinai.org',
      linkText: 'Visit Site →'
    },
    {
      icon: '🤝',
      title: 'NSBE (National Society of Black Engineers)',
      desc: 'Founded in 1975, NSBE supports Black engineering students and professionals, including those in AI and computer science.',
      tag: 'Organization',
      link: 'https://nsbe.org',
      linkText: 'Visit Site →'
    },
    {
      icon: '🎓',
      title: 'AI Mentorship Programs',
      desc: 'Connect with experienced AI professionals through mentorship programs like AI4ALL, Mentoring programs at Google, and Microsoft LEAP.',
      tag: 'Mentorship',
      link: '#',
      linkText: 'Learn More →'
    },
    {
      icon: '💰',
      title: 'Fellowships & Scholarships',
      desc: 'Explore fellowships like the Google PhD Fellowship, Microsoft Research Fellowship, and the Ford Foundation Fellowship for AI researchers.',
      tag: 'Fellowships',
      link: '#',
      linkText: 'Learn More →'
    },
    {
      icon: '📚',
      title: 'Recommended Reading',
      desc: 'Essential books and papers: "Algorithms of Oppression" by Safiya Noble, "Race After Technology" by Ruha Benjamin, "Atlas of AI" by Kate Crawford.',
      tag: 'Reading',
      link: '#',
      linkText: 'Explore →'
    },
    {
      icon: '🔬',
      title: 'Research Labs & Institutes',
      desc: 'Discover AI research labs focused on equity: DAIR Institute, AI Now Institute, and the Stanford Institute for Human-Centered AI.',
      tag: 'Research',
      link: '#',
      linkText: 'Explore →'
    },
    {
      icon: '👩‍💻',
      title: 'Women in AI',
      desc: 'Organizations supporting Black women in AI, including Black Women in AI, Women in Machine Learning, and AI4ALL.',
      tag: 'Community',
      link: '#',
      linkText: 'Learn More →'
    },
    {
      icon: '🌐',
      title: 'Open Source & Datasets',
      desc: 'Access open-source AI tools and curated datasets for fair and inclusive machine learning research.',
      tag: 'Resources',
      link: '#',
      linkText: 'Explore →'
    }
  ];

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
   * Get filtered pioneers based on current category and search query
   */
  function getFilteredPioneers() {
    let result = pioneers;

    // Apply category filter
    if (currentFilter !== 'All') {
      result = result.filter(function (p) {
        return p.category === currentFilter;
      });
    }

    // Apply search filter
    if (currentSearch.trim()) {
      var query = currentSearch.trim().toLowerCase();
      result = result.filter(function (p) {
        return (
          p.name.toLowerCase().indexOf(query) !== -1 ||
          p.category.toLowerCase().indexOf(query) !== -1 ||
          p.organization.toLowerCase().indexOf(query) !== -1 ||
          p.achievement.toLowerCase().indexOf(query) !== -1 ||
          p.role.toLowerCase().indexOf(query) !== -1
        );
      });
    }

    return result;
  }

  /**
   * Generate a DiceBear avataaars avatar URL for a pioneer
   */
  function getAvatarUrl(name, color) {
    var seed = name.replace(/\s/g, '');
    var hexColor = color.replace('#', '');
    return 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + encodeURIComponent(seed) + '&backgroundColor=' + hexColor + '&skinColor=neutral&hairColor=neutral&clotheColor=neutral';
  }

  /**
   * Get initials for avatar fallback
   */
  function getInitials(name) {
    var parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ===== Rendering Functions =====

  /**
   * Render a single pioneer card for the grid
   */
  function renderCard(pioneer, index) {
    var avatarUrl = getAvatarUrl(pioneer.name, pioneer.color);

    var card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'View details for ' + pioneer.name);
    card.style.setProperty('--card-accent', pioneer.color);
    card.style.animationDelay = (index * 0.06) + 's';
    card.dataset.pioneerId = pioneer.id;

    card.innerHTML =
      '<div class="card__header">' +
        '<img class="card__avatar" src="' + avatarUrl + '" alt="Portrait of ' + escapeHTML(pioneer.name) + ', ' + escapeHTML(pioneer.category) + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
        '<div class="card__avatar--fallback" style="display:none;" aria-hidden="true">' + getInitials(pioneer.name) + '</div>' +
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

    // Click handler for detail modal
    card.addEventListener('click', function () {
      openDetailModal(pioneer);
    });

    // Keyboard accessibility
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDetailModal(pioneer);
      }
    });

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
        '<img class="spotlight__avatar" src="' + avatarUrl + '" alt="Portrait of ' + escapeHTML(pioneer.name) + ', ' + escapeHTML(pioneer.category) + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
        '<div class="card__avatar--fallback" style="display:none;width:80px;height:80px;font-size:1.8rem;" aria-hidden="true">' + getInitials(pioneer.name) + '</div>' +
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
   * Update stats with animation
   */
  function updateStats() {
    animateCounter(statTotal, pioneers.length);
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
   * Animate a counter from 0 to target value
   */
  function animateCounter(element, target) {
    var duration = 800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      var eased = 1 - (1 - progress) * (1 - progress);
      element.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Render resource cards
   */
  function renderResources() {
    resourcesGrid.innerHTML = '';

    resources.forEach(function (resource) {
      var card = document.createElement('a');
      card.className = 'resource-card';
      card.href = resource.link;
      card.setAttribute('aria-label', resource.title + ' - ' + resource.desc);
      if (resource.link === '#') {
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', function (e) {
          e.preventDefault();
        });
      }

      card.innerHTML =
        '<span class="resource-card__icon" aria-hidden="true">' + resource.icon + '</span>' +
        '<h3 class="resource-card__title">' + escapeHTML(resource.title) + '</h3>' +
        '<p class="resource-card__desc">' + escapeHTML(resource.desc) + '</p>' +
        '<span class="resource-card__tag">' + escapeHTML(resource.tag) + '</span>' +
        '<span class="resource-card__link">' + escapeHTML(resource.linkText) + ' <span aria-hidden="true">→</span></span>';

      resourcesGrid.appendChild(card);
    });
  }

  // ===== Search Functionality (Prompt 2) =====

  function handleSearch() {
    currentSearch = searchInput.value;
    renderGrid();
    updateSearchCount();

    // Show/hide clear button
    if (currentSearch.trim()) {
      searchClear.classList.add('search__clear--visible');
    } else {
      searchClear.classList.remove('search__clear--visible');
    }
  }

  function updateSearchCount() {
    var filtered = getFilteredPioneers();
    if (currentSearch.trim()) {
      searchResultsCount.textContent = 'Showing ' + filtered.length + ' of ' + pioneers.length + ' pioneers';
    } else {
      searchResultsCount.textContent = '';
    }
  }

  // ===== View Toggle (Prompt 5) =====

  function setView(view) {
    currentView = view;

    if (view === 'timeline') {
      pioneersGrid.classList.add('timeline__inner');
      btnTimelineView.classList.add('view-toggle__btn--active');
      btnTimelineView.setAttribute('aria-pressed', 'true');
      btnGridView.classList.remove('view-toggle__btn--active');
      btnGridView.setAttribute('aria-pressed', 'false');
    } else {
      pioneersGrid.classList.remove('timeline__inner');
      btnGridView.classList.add('view-toggle__btn--active');
      btnGridView.setAttribute('aria-pressed', 'true');
      btnTimelineView.classList.remove('view-toggle__btn--active');
      btnTimelineView.setAttribute('aria-pressed', 'false');
    }

    // Re-render to apply correct styles
    renderGrid();
  }

  // ===== Detail Modal (Prompt 4) =====

  function openDetailModal(pioneer) {
    currentDetailPioneer = pioneer;
    var avatarUrl = getAvatarUrl(pioneer.name, pioneer.color);

    detailBody.innerHTML =
      '<div class="detail__hero">' +
        '<div class="detail__avatar-wrapper">' +
          '<img class="detail__avatar" src="' + avatarUrl + '" alt="Portrait of ' + escapeHTML(pioneer.name) + ', ' + escapeHTML(pioneer.category) + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
          '<div class="detail__avatar--fallback" style="display:none;" aria-hidden="true">' + getInitials(pioneer.name) + '</div>' +
        '</div>' +
        '<div class="detail__info">' +
          '<h2 class="detail__name" id="detail-modal-title">' + escapeHTML(pioneer.name) + '</h2>' +
          '<p class="detail__role">' + escapeHTML(pioneer.role) + '</p>' +
          '<p class="detail__org">📍 ' + escapeHTML(pioneer.organization) + '</p>' +
          '<span class="detail__badge" style="background-color: ' + pioneer.color + ';">' + escapeHTML(pioneer.category) + '</span>' +
          '<div style="margin-top:12px;display:flex;gap:16px;flex-wrap:wrap;">' +
            '<span style="color:var(--text-muted);font-size:0.85rem;">📅 ' + escapeHTML(pioneer.year) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<blockquote class="detail__quote">' +
        '<p class="detail__quote-text">"' + escapeHTML(pioneer.achievement) + '"</p>' +
        '<cite class="detail__quote-author">— ' + escapeHTML(pioneer.name) + '</cite>' +
      '</blockquote>' +
      '<div class="detail__body">' +
        '<div class="detail__section">' +
          '<h3 class="detail__section-title">Key Achievements</h3>' +
          '<p class="detail__achievement">' + escapeHTML(pioneer.achievement) + '</p>' +
        '</div>' +
        '<div class="detail__section">' +
          '<h3 class="detail__section-title">Links & Resources</h3>' +
          '<div class="detail__links">' +
            '<a href="https://www.google.com/search?q=' + encodeURIComponent(pioneer.name + ' ' + pioneer.organization) + '" target="_blank" rel="noopener noreferrer" class="detail__link detail__link--gold">🔍 Google Search</a>' +
            '<a href="https://scholar.google.com/scholar?q=' + encodeURIComponent(pioneer.name + ' ' + pioneer.achievement) + '" target="_blank" rel="noopener noreferrer" class="detail__link">📄 Google Scholar</a>' +
            '<a href="https://www.linkedin.com/search/result/?keywords=' + encodeURIComponent(pioneer.name) + '" target="_blank" rel="noopener noreferrer" class="detail__link">💼 LinkedIn</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    detailModal.classList.add('modal--active');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button
    detailClose.focus();
  }

  function closeDetailModal() {
    detailModal.classList.remove('modal--active');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentDetailPioneer = null;
  }

  // ===== Nomination Modal (Prompt 1) =====

  function openNominateModal() {
    nominateModal.classList.add('modal--active');
    nominateModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    nominateSuccess.style.display = 'none';
    nominateForm.reset();
    clearFormErrors();
    // Focus first input
    var firstInput = nominateForm.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  function closeNominateModal() {
    nominateModal.classList.remove('modal--active');
    nominateModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Clear all form error messages
   */
  function clearFormErrors() {
    var errors = nominateForm.querySelectorAll('.form__error');
    errors.forEach(function (el) {
      el.textContent = '';
    });
    var inputs = nominateForm.querySelectorAll('input, textarea');
    inputs.forEach(function (el) {
      el.classList.remove('input--error');
    });
  }

  /**
   * Validate the nomination form
   * Returns true if valid, false otherwise
   */
  function validateNominationForm() {
    var isValid = true;
    clearFormErrors();

    // Name validation
    var name = document.getElementById('nominate-name');
    if (!name.value.trim()) {
      document.getElementById('error-name').textContent = 'Please enter the pioneer\'s name.';
      name.classList.add('input--error');
      isValid = false;
    } else if (name.value.trim().length < 2) {
      document.getElementById('error-name').textContent = 'Name must be at least 2 characters.';
      name.classList.add('input--error');
      isValid = false;
    }

    // Field validation
    var field = document.getElementById('nominate-field');
    if (!field.value.trim()) {
      document.getElementById('error-field').textContent = 'Please enter the field or expertise.';
      field.classList.add('input--error');
      isValid = false;
    }

    // Achievement validation
    var achievement = document.getElementById('nominate-achievement');
    if (!achievement.value.trim()) {
      document.getElementById('error-achievement').textContent = 'Please describe key achievements.';
      achievement.classList.add('input--error');
      isValid = false;
    } else if (achievement.value.trim().length < 20) {
      document.getElementById('error-achievement').textContent = 'Please provide at least 20 characters describing achievements.';
      achievement.classList.add('input--error');
      isValid = false;
    }

    // Links validation (optional, but must be valid URL if provided)
    var links = document.getElementById('nominate-links');
    if (links.value.trim() && !isValidURL(links.value.trim())) {
      document.getElementById('error-links').textContent = 'Please enter a valid URL (e.g., https://example.com).';
      links.classList.add('input--error');
      isValid = false;
    }

    // Contact validation
    var contact = document.getElementById('nominate-contact');
    if (!contact.value.trim()) {
      document.getElementById('error-contact').textContent = 'Please enter your contact email.';
      contact.classList.add('input--error');
      isValid = false;
    } else if (!isValidEmail(contact.value.trim())) {
      document.getElementById('error-contact').textContent = 'Please enter a valid email address.';
      contact.classList.add('input--error');
      isValid = false;
    }

    return isValid;
  }

  /**
   * Validate email format
   */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * Validate URL format
   */
  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Handle form submission
   */
  function handleNominationSubmit(e) {
    e.preventDefault();

    if (!validateNominationForm()) {
      return;
    }

    // Simulate submission (in a real app, this would send to a server)
    var formData = {
      name: document.getElementById('nominate-name').value.trim(),
      field: document.getElementById('nominate-field').value.trim(),
      achievement: document.getElementById('nominate-achievement').value.trim(),
      links: document.getElementById('nominate-links').value.trim(),
      org: document.getElementById('nominate-org').value.trim(),
      contact: document.getElementById('nominate-contact').value.trim(),
      year: document.getElementById('nominate-year').value.trim()
    };

    console.log('Nomination submitted:', formData);

    // Show success message
    nominateForm.style.display = 'none';
    nominateSuccess.style.display = 'block';

    // Close modal after 3 seconds
    setTimeout(function () {
      closeNominateModal();
      nominateForm.style.display = '';
      nominateSuccess.style.display = 'none';
    }, 3000);
  }

  // ===== Skeleton Loaders (Prompt 3) =====

  function showSkeletons() {
    skeletonGrid.style.display = 'grid';
    pioneersGrid.style.display = 'none';
    emptyState.style.display = 'none';
  }

  function hideSkeletons() {
    skeletonGrid.style.display = 'none';
    pioneersGrid.style.display = '';
  }

  // ===== Dark/Light Mode Toggle (Prompt 7) =====

  function getPreferredTheme() {
    // Check localStorage first
    var saved = localStorage.getItem('theme');
    if (saved) return saved;

    // Fall back to OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // ===== Mobile Navigation (Prompt 10) =====

  function toggleNav() {
    var isOpen = navMenu.classList.contains('navbar__menu--open');
    if (isOpen) {
      navMenu.classList.remove('navbar__menu--open');
      navToggle.classList.remove('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navMenu.classList.add('navbar__menu--open');
      navToggle.classList.add('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeNav() {
    navMenu.classList.remove('navbar__menu--open');
    navToggle.classList.remove('navbar__toggle--active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  // ===== Back to Top (Prompt 10) =====

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== Event Handlers =====

  function handleDiscover() {
    var pioneer = getRandomPioneer();
    renderSpotlight(pioneer);
  }

  function handleViewAll(e) {
    e.preventDefault();
    currentFilter = 'All';
    currentSearch = '';
    searchInput.value = '';
    searchClear.classList.remove('search__clear--visible');
    updateFilterButtons();
    renderGrid();
    updateSearchCount();
    var gridSection = document.querySelector('.grid');
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleKeyboardNavigation(e) {
    // Allow Enter/Space to activate focused filter buttons
    if (e.key === 'Enter' || e.key === ' ') {
      var focused = document.activeElement;
      if (focused && focused.classList.contains('filter__btn')) {
        e.preventDefault();
        focused.click();
      }
    }

    // Close modals on Escape
    if (e.key === 'Escape') {
      if (detailModal.classList.contains('modal--active')) {
        closeDetailModal();
      }
      if (nominateModal.classList.contains('modal--active')) {
        closeNominateModal();
      }
      closeNav();
    }
  }

  // ===== Initialization =====

  function init() {
    // Show skeletons briefly then hide them (simulating data fetch)
    showSkeletons();

    // Use a short delay to show skeleton loaders, then render
    setTimeout(function () {
      hideSkeletons();
      renderFilters();
      renderGrid();
      updateStats();
      handleDiscover();
      renderResources();
    }, 600);

    // Event listeners
    btnDiscover.addEventListener('click', handleDiscover);
    btnViewAll.addEventListener('click', handleViewAll);
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Search
    searchInput.addEventListener('input', handleSearch);
    searchClear.addEventListener('click', function () {
      searchInput.value = '';
      currentSearch = '';
      renderGrid();
      updateSearchCount();
      searchClear.classList.remove('search__clear--visible');
      searchInput.focus();
    });

    // View toggle
    btnGridView.addEventListener('click', function () { setView('grid'); });
    btnTimelineView.addEventListener('click', function () { setView('timeline'); });

    // Mobile nav
    navToggle.addEventListener('click', toggleNav);

    // Close nav when clicking a link
    var navLinks = navMenu.querySelectorAll('.navbar__link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Apply saved/OS theme
    applyTheme(getPreferredTheme());

    // Nomination modal
    btnOpenNominate.addEventListener('click', openNominateModal);
    nominateClose.addEventListener('click', closeNominateModal);
    nominateCancel.addEventListener('click', closeNominateModal);
    nominateOverlay.addEventListener('click', closeNominateModal);
    nominateForm.addEventListener('submit', handleNominationSubmit);

    // Detail modal
    detailClose.addEventListener('click', closeDetailModal);
    detailOverlay.addEventListener('click', closeDetailModal);

    // Back to top
    backToTopBtn.addEventListener('click', scrollToTop);

    // Close nav on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeNav();
      }
    });
  }

  // Start the app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

