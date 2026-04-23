/* ============================================================
   AA INVESTMENTS (HK) — Main JavaScript
   ============================================================ */

/* ─── NAV: Add 'scrolled' class on scroll ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── MOBILE MENU TOGGLE ─── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ─── SCROLL REVEAL ANIMATION ─── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

/* ─── CONTACT FORM: Demo submit handler ─── */
// NOTE: Wire this to a real backend (e.g. Formspree, EmailJS, or your own API)
// to receive messages. Replace the body of this function with your form service call.
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  const original = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#2a7a4f';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}
