import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const projectSwiper = new Swiper('.swiper-projects', {
  modules: [Navigation, Keyboard],
  spaceBetween: 32,
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
    disabledClass: 'projects-swiper-button-disabled',
  },
  allowTouchMove: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
