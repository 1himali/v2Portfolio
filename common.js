document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      this.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  function setTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    if (themeToggle) themeToggle.textContent = dark ? '☀' : '☾';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  if (themeToggle) {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme(true);
    }
    themeToggle.addEventListener('click', function () {
      setTheme(!document.documentElement.classList.contains('dark'));
    });
  }

  function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === this) closeModal(); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  window.closeModal = closeModal;
});
