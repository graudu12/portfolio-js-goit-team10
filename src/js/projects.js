import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },
  spaceBetween: 32,
  slidesPerView: 'auto',
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  loop: false,
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    if (event.shiftKey) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  }
});

document
  .querySelector('.projects-button')
  .addEventListener('click', function () {
    window.open(
      'https://github.com/graudu12/portfolio-js-goit-team10',
      '_blank'
    );
  });
