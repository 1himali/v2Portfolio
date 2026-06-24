document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      this.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  function setTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    if (themeToggle) themeToggle.textContent = dark ? '☀' : '☾';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀' : '☾';
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
