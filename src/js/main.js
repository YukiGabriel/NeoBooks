const nav = document.getElementById('navbar-default');
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

