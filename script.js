(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  const form = document.querySelector('#quote-form');
  const feedback = document.querySelector('#form-feedback');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.querySelector('.menu-label').textContent = 'Menu';
      navigation.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.querySelector('.menu-label').textContent = isOpen ? 'Menu' : 'Close';
      navigation.classList.toggle('is-open', !isOpen);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  document.querySelectorAll('[data-product]').forEach(link => {
    link.addEventListener('click', () => {
      const category = document.querySelector('[name="category"]');
      if (category) {
        const requested = link.dataset.product;
        const option = [...category.options].find(item => item.textContent.trim() === requested);
        if (option) category.value = option.value || option.textContent;
      }
    });
  });

  if (!form) return;
  const requiredFields = [...form.querySelectorAll('input[required]:not([type="radio"]), select[required]')];
  const clearError = field => {
    const wrapper = field.closest('.field');
    if (!wrapper) return;
    wrapper.classList.remove('has-error');
    wrapper.querySelector('.field-error').textContent = '';
    field.removeAttribute('aria-invalid');
  };
  const markError = (field, message) => {
    const wrapper = field.closest('.field');
    if (!wrapper) return;
    wrapper.classList.add('has-error');
    wrapper.querySelector('.field-error').textContent = message;
    field.setAttribute('aria-invalid', 'true');
  };
  requiredFields.forEach(field => field.addEventListener('input', () => clearError(field)));
  requiredFields.forEach(field => field.addEventListener('change', () => clearError(field)));
  form.querySelectorAll('[name="contact"]').forEach(radio => radio.addEventListener('change', () => {
    feedback.textContent = 'Details look good. This is a demo, so your request has not been sent.';
    feedback.className = 'form-feedback';
  }));

  form.addEventListener('submit', event => {
    event.preventDefault();
    let firstInvalid = null;
    let invalidCount = 0;
    requiredFields.forEach(field => {
      const valid = field.value.trim() !== '' && field.checkValidity();
      clearError(field);
      if (!valid) {
        markError(field, field.value.trim() ? 'Please check this field.' : 'Please fill in this required field.');
        firstInvalid ??= field;
        invalidCount++;
      }
    });
    const contactSelected = form.querySelector('[name="contact"]:checked');
    if (!contactSelected) {
      const legend = form.querySelector('.contact-choice legend');
      legend.setAttribute('aria-label', 'Choose how we should contact you. This field is required.');
      firstInvalid ??= form.querySelector('[name="contact"]');
      invalidCount++;
    }
    if (invalidCount) {
      feedback.textContent = `Please complete the required details above (${invalidCount} ${invalidCount === 1 ? 'item' : 'items'}).`;
      feedback.className = 'form-feedback error';
      firstInvalid?.focus();
      return;
    }
    const data = new FormData(form);
    feedback.textContent = `Thanks, ${data.get('name')}. Your details are ready to review, but this demo has not sent them. Connect a form service to receive quote requests.`;
    feedback.className = 'form-feedback success';
  });
})();
