const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

