const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const motionPreference = typeof window.matchMedia === 'function'
  ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
const activeAnimations = new Set();
function animateEntrance(element, delay = 0) {
  if (motionPreference?.matches || typeof element.animate !== 'function') return;
  const animation = element.animate([
    { opacity: 0, transform: 'translateY(18px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], { duration: 650, delay, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'backwards' });
  activeAnimations.add(animation);
  animation.onfinish = animation.oncancel = () => activeAnimations.delete(animation);
}
// Immediately restore the static page if motion preferences change mid-session.
motionPreference?.addEventListener?.('change', event => {
  if (event.matches) activeAnimations.forEach(animation => animation.cancel());
});
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    projects.forEach(project => {
      const visible = button.dataset.filter === 'all' || project.dataset.category === button.dataset.filter;
      const wasHidden = project.hidden;
      project.hidden = !visible;
      if (visible && wasHidden) animateEntrance(project, Math.min(count, 3) * 60);
      if (visible) count++;
    });
    document.getElementById('filter-status').textContent = `${count} projects shown.`;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
// Enhance the navigation without hiding content when JavaScript is unavailable.
if ('IntersectionObserver' in window) {
  const navLinks = document.querySelectorAll('nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  // Elements stay visible by default, including without JS or animation support.
  const reveals = new IntersectionObserver(entries => {
    let stagger = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      reveals.unobserve(entry.target);
      if (!entry.target.contains(document.activeElement)) {
        animateEntrance(entry.target, Math.min(stagger++, 3) * 70);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .project, .publication, .timeline-item, .education, .skill-list > div, .leadership-list article, .contact-section h2')
    .forEach(element => reveals.observe(element));
}
