/*reviews-section styles LENA BOKHAN*/

import iziToast from "izitoast";
import Swiper from 'swiper';
/*import { Navigation, Pagination} from 'swiper/modules';*/
import axios from 'axios';
const swiperWrapper = document.querySelector(".wrap-card");

const loaderEl = document.querySelector('.loader');
let galleryTemplate;

import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.swiper-reviews', {
    modules: [Navigation, Keyboard, Mousewheel],
    loop: false,  // Отключаем бесконечную прокрутку
    // Управление клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: false,  // Позволяет листать даже если Swiper вне экрана
        pageUpDown: true,       // Включает прокрутку PageUp/PageDown
    },

    // Управление мышью (скроллом)
    mousewheel: {
        invert: false, // Обычное направление прокрутки
        forceToAxis: true, // Листает только по оси X или Y
    },

    navigation: {
        nextEl: '.swiper-button-next-rev',
        prevEl: '.swiper-button-prev-rev',
    },
    

    // Сенсорное управление (по умолчанию включено)
    simulateTouch: true,  // Включает сенсорные жесты на десктопе
    touchRatio: 1,        // Чувствительность свайпа
    touchAngle: 45,       // Угол свайпа (макс. угол перед отклонением)
    grabCursor: true,     // Курсор в виде "руки" при свайпе

    // Настройки для Tab и фокуса
    a11y: { // Доступность
        enabled: true,
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },


    
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    },
});
 // document.addEventListener('keydown', function (event) {
//     if (event.key === 'Tab') {
//         event.preventDefault();
//         event.shiftKey ? swiper.slidePrev() : swiper.slideNext();
//     }
// });
const showLoader = () => {
  loaderEl.style.display = 'block';
};

const  hideLoader = () => {
  loaderEl.style.display = 'none';
};


const searchReviewsSection = document.querySelector('.js-reviews-section');


const onScroll = async () => {
    
    try {
        const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
        const data = response.data;
        
        if (!data || data.length === 0) {
            throw new Error("No data available");
        }
        swiperWrapper.innerHTML = "";
        galleryTemplate = data.map(createReviewCardTemplate).join("");
            
        swiperWrapper.innerHTML = galleryTemplate;
        setTimeout(() => { swiper.update(); }, 100);
            hideLoader();
        } catch (err) {
            hideLoader();
            iziToast.show({
                backgroundColor: 'linear-gradient(90deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)',
                messageColor: ' #fafafa',
                message: 'Invalid request, try again!',
                close: 'true',
                
                messageSize: '32',
                pauseOnHover: 'true',
                animateInside: 'true',
                transitionIn: 'bounceInDown',
                position: 'center'
            });

            searchReviewsSection.innerHTML = '<p class ="error-title">Not found</p>';
            return;
        } 
    };


const createReviewCardTemplate = ({ author, avatar_url, review }) => `<li class ="swiper-slide swipe-review">
<img class="review-img" src="${avatar_url}" alt="${author}"/>
<h2 class="reviews-author">${author}</h2>
        <p class="info-review">
         ${review} 
        </p></li>`;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showLoader();
            onScroll().then(() => 
            observer.unobserve(entry.target));
        }
    });
}, { threshold: 1 });
if (searchReviewsSection) {
    observer.observe(searchReviewsSection);
} else {console.error("Section not found")};











