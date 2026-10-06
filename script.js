const cartCount = document.querySelector('#cart-count');
let itemCount = 0;

const signinDialog = document.querySelector('#signin-dialog');
const signinForm = document.querySelector('#signin-form');

document.querySelector('#signin-button')?.addEventListener('click', () => {
  signinDialog?.showModal();
  document.querySelector('#signin-username')?.focus();
});

document.querySelector('.signin-close')?.addEventListener('click', () => {
  signinDialog?.close();
});

signinForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#signin-status').textContent = 'Sign-in is not connected yet.';
});

document.querySelectorAll('.add-to-bag').forEach((button) => {
  button.addEventListener('click', () => {
    itemCount += 1;
    cartCount.textContent = itemCount;
    button.innerHTML = 'Added to bag <span>✓</span>';
    button.setAttribute('aria-label', `${button.dataset.product} added to bag`);
    window.setTimeout(() => {
      button.innerHTML = 'Add to bag <span>+</span>';
    }, 1800);
  });
});

const contactForm = document.querySelector('#contact-form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`DWRICK message from ${data.get('name')}`);
  const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
  window.location.href = `mailto:hello@dwrick.com?subject=${subject}&body=${body}`;
  document.querySelector('#form-status').textContent = 'Your email app is ready to send this message.';
  form.reset();
});
