document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    const desktopLinks = document.querySelectorAll('.nav-list a');
    const orderBtnMobile = document.querySelector('.order-btn-mobile');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    burgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-active'); 
    });
  
    closeMenu.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-active'); 
    });
  
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-active'); 
      });
    });
  
    orderBtnMobile.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-active'); 
    });
  
    desktopLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
      });
    });
  });
  