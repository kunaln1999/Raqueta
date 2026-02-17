export function initFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-main">Raqueta</span>
            <span class="logo-sub">Cafetería</span>
          </div>
          <p class="footer-tagline">Experience the tradition and refinement of artisan coffee at Raqueta. Sourced ethically, brewed artistically.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="menu.html">Menu</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="index.html#reservations">Reservations</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Info</h4>
          <ul class="footer-contact">
            <li>123 Luxury Lane, Metropolis</li>
            <li>+1 (555) 0123 4567</li>
            <li>hello@raquetacafe.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Raqueta Cafetería. All rights reserved.</p>
      </div>
    </div>
  `;
}
