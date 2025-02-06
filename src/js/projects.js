const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Scrollbar], // Вказуємо потрібні модулі
  slidesPerView: 1,
  spaceBetween: 32,
  loop: false, // Вимикаємо нескінченну прокрутку
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
