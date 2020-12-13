const navPanel = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__button-toggle');

navPanel.classList.add('page-header--close');

navToggle.addEventListener('click', function () {
  if (navPanel.classList.contains('page-header--close')) {
    navPanel.classList.remove('page-header--close');
  } else {
    navPanel.classList.add('page-header--close');
  }
});
