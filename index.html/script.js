// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Smooth-scroll handled natively via CSS-less anchor; ensure offset works
document.documentElement.style.scrollBehavior = 'smooth';

// Contact form
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks! I'll be in touch.");
  e.target.reset();
});
