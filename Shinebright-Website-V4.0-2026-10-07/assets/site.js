(() => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (button && menu) {
    const closeMenu = () => {
      menu.dataset.open = 'false';
      button.setAttribute('aria-expanded', 'false');
    };

    button.addEventListener('click', () => {
      const open = menu.dataset.open !== 'true';
      menu.dataset.open = String(open);
      button.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = new FormData(form);
      const fr = form.dataset.language === 'fr';
      const subject = fr ? 'Demande de tutorat — site Web' : 'Tutoring inquiry — website';
      const labels = fr
        ? { name: 'Nom du parent', email: 'Courriel', phone: 'Téléphone', level: 'Niveau', subjectNeeded: 'Matière', format: 'Format', message: 'Message' }
        : { name: 'Parent name', email: 'Email', phone: 'Phone', level: 'Student level', subjectNeeded: 'Subject', format: 'Format', message: 'Message' };
      const body = Object.entries(labels)
        .map(([key, label]) => `${label}: ${values.get(key) || ''}`)
        .join('\n');
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = fr ? 'Votre application de courriel va maintenant s’ouvrir.' : 'Your email application will now open.';
      window.location.href = `mailto:shinebrighttutoringmtl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
