document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");
    const desktopLinks = document.querySelectorAll(".nav-list a");
  
    // Відкриття/закриття меню на десктопі
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  
    // Відкриття мобільного меню
    burgerMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  
    // Закриття мобільного меню
    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  
    // Закриття мобільного меню при натисканні на посилання
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
      });
    });
  
    // Закриття десктопного меню при натисканні на посилання
    desktopLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
      });
    });
  });
  
console.log("hello");