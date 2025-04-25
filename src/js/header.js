import '/js/header.js';

// MOBILE-MENU //

document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('[data-menu-close]');
  const body = document.body;

  function handleMobileEsc(event) {
    if (event.key === 'Escape') {
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleMobileEsc);
    }
  }

  // Відкриття мобільного меню
  burgerIcon.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    body.classList.add('no-scroll');
    document.addEventListener('keydown', handleMobileEsc);
  });

  // Закриття мобільного меню
  closeButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('no-scroll');
    document.removeEventListener('keydown', handleMobileEsc);
  });

  // Закриття меню при кліку на посилання
  const menuLinks = document.querySelectorAll('.mobile-menu-link');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleMobileEsc);
    });
  });
});

// MENU //

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');

function handleDesktopEsc(event) {
  if (event.key === 'Escape') {
    closeDesktopMenu();
  }
}

function openDesktopMenu() {
  nav.classList.add('is-open');
  navList.classList.add('is-open');
  document.addEventListener('keydown', handleDesktopEsc);
}

function closeDesktopMenu() {
  nav.classList.remove('is-open');
  navList.classList.remove('is-open');
  document.removeEventListener('keydown', handleDesktopEsc);
}

// Клик по кнопке меню
menuBtn.addEventListener('click', () => {
  const isMenuOpen = nav.classList.contains('is-open');
  if (isMenuOpen) {
    closeDesktopMenu();
  } else {
    openDesktopMenu();
  }
});

// Клик по ссылке в меню
const navLinks = navList.querySelectorAll('a');
navLinks.forEach(a => {
  a.addEventListener('click', () => {
    closeDesktopMenu();
  });
});

// Клик вне меню
document.addEventListener('click', event => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnBtn = menuBtn.contains(event.target);

  if (!isClickInsideNav && !isClickOnBtn) {
    closeDesktopMenu();
  }
});
