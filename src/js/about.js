
import Accordion from "accordion-js";

import Swiper from 'swiper';
import { Navigation, Keyboard  } from 'swiper/modules';
import 'swiper/css';

new Accordion(".accordion-container-about-me", {
  elementClass: "ac-about-me",
  triggerClass: "ac-trigger-about-me",
  panelClass: "ac-panel-about-me",
  activeClass: "is-active-about-me",
  duration: 800,   
  showMultiple: true,   
  collapse: true,
  openOnInit: [0],
});


const swiper = new Swiper('.swiper-one', {
    modules: [Navigation, Keyboard],
    containerModifierClass: 'swiper-one',
    slidesPerView: 2,
    allowTouchMove: true,
    loop: true,
    preventClicks: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.about-swiper-button-next',
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 6,
      }
    },
    on: {
      init: function () {
        highlightActiveSlide();
      },
      slideChangeTransitionEnd: function () {
        highlightActiveSlide();
      }
    }
  });
  
  function highlightActiveSlide() {
    document
      .querySelectorAll('.swiper-slide')
      .forEach(slide => slide.classList.remove('about-swiper-slide-active'));
  
    let visibleSlides = document.querySelectorAll('.swiper-slide-active, .swiper-slide-visible');
  
    if (visibleSlides.length > 0) {
      visibleSlides[0].classList.add('about-swiper-slide-active');
    }
  }
  
  

