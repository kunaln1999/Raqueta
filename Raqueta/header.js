export function initHeader() {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) return;

  const currentPath = window.location.pathname;
  const isContactPage = currentPath.includes('contact.html');
  const isAboutPage = currentPath.includes('about.html');
  const isMenuPage = currentPath.includes('menu.html');

  headerContainer.innerHTML = `
    <header class="main-header">
      <div class="container">
        <div class="header-inner">
          <a href="index.html" class="logo">
            <span class="logo-main">Raqueta</span>
            <span class="logo-sub">Cafetería</span>
          </a>
          <nav class="desktop-nav">
            <ul class="nav-links">
              <li><a href="menu.html" class="nav-link ${isMenuPage ? 'active' : ''}">Menu</a></li>
              <li><a href="about.html" class="nav-link ${isAboutPage ? 'active' : ''}">About</a></li>
              <li><a href="index.html#reservations" class="nav-link">Reservations</a></li>
              <li><a href="contact.html" class="nav-link ${isContactPage ? 'active' : ''}">Contact</a></li>
            </ul>
          </nav>
          <button class="hamburger" id="hamburger-menu" aria-label="Open Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu-overlay" id="mobile-menu">
      <div class="mobile-menu-header">
        <a href="index.html" class="logo">
          <span class="logo-main logo-white">Raqueta</span>
          <span class="logo-sub logo-white">Cafetería</span>
        </a>
      </div>
      <nav class="mobile-nav">
        <ul class="mobile-nav-links">
          <li style="--i: 1"><a href="menu.html" class="mobile-nav-link ${isMenuPage ? 'active' : ''}">Menu</a></li>
          <li style="--i: 2"><a href="about.html" class="mobile-nav-link ${isAboutPage ? 'active' : ''}">About</a></li>
          <li style="--i: 3"><a href="index.html#reservations" class="mobile-nav-link">Reservations</a></li>
          <li style="--i: 4"><a href="contact.html" class="mobile-nav-link ${isContactPage ? 'active' : ''}">Contact</a></li>
        </ul>
      </nav>
      <div class="mobile-menu-footer">
        <div class="mobile-footer-divider"></div>
        <a href="tel:+1234567890" class="mobile-contact-item">+1 (234) 567-890</a>
        <a href="https://instagram.com" target="_blank" class="mobile-social-link">Instagram</a>
      </div>
    </div>
  `;

  // Menu Toggle Logic
  const hamburger = document.getElementById('hamburger-menu');
  const overlay = document.getElementById('mobile-menu');
  const body = document.body;

  function toggleMenu(forceClose = false) {
    const isOpening = forceClose ? false : !overlay.classList.contains('is-open');

    if (isOpening) {
      overlay.classList.add('is-open');
      hamburger.classList.add('is-active');
      body.style.overflow = 'hidden';
    } else {
      overlay.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      body.style.overflow = '';
    }
  }

  if (hamburger) hamburger.addEventListener('click', () => toggleMenu());

  // Close menu when clicking links
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });
}
