import { initHeader } from './header.js';
import { initFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize dynamic components
    initHeader();
    initFooter();

    // Scroll effects
    const hero = document.getElementById('home');
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        // Sticky header shadow
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Hero splash expansion on 20px scroll
        if (window.scrollY > 20) {
            hero?.classList.add('splash-filled');
        } else {
            hero?.classList.remove('splash-filled');
        }
    });

    // Handle form submissions
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form Data:', data);

            const isContact = form.classList.contains('contact-form');
            const message = isContact
                ? 'Thank you for your message! Our concierge will get back to you shortly.'
                : 'Thank you for your reservation! We will contact you shortly to confirm.';

            alert(message);
            form.reset();
        });
    });
});
