/*reviews-section styles LENA BOKHAN*/

import iziToast from "izitoast";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
const swiperWrapper = document.querySelector(".wrap-card");
console.log(swiperWrapper);

const loaderEl = document.querySelector('.loader');
let galleryTemplate;
const showLoader = () => {
  loaderEl.style.display = 'block';
};

const  hideLoader = () => {
  loaderEl.style.display = 'none';
};


const searchReviewsSection = document.querySelector('.js-reviews-section');


const onScroll = async () => {
    showLoader();
    try {
        const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
        const data = response.data;
        
        if (!data || data.legth === 0) {
            throw new Error("No data available");
        }
            swiperWrapper.innerHTML = "";
            galleryTemplate = data.map(createReviewCardTemplate).join("");
            
            swiperWrapper.innerHTML = galleryTemplate;
        swiper.update();
            hideLoader();
        } catch (err) {
            hideLoader();
            iziToast.show({
                backgroundColor: 'linear-gradient(90deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)',
                messageColor: ' #fafafa',
                message: 'Invalid request, try again!',
                close: 'true',
            });

            searchReviewsSection.innerHTML = '<p class ="error-title">Not found</p>';
            return;
        } finally { hideLoader(); }
    };


const createReviewCardTemplate = ({ author, avatar_url, review }) => `<li class ="swiper-slide swipe-review">
<img class="review-img" src="${avatar_url}" alt="${author}"/>
<h2 class="reviews-author">${author}</h2>
        <p class="info-review">
         ${review} 
        </p></li>`;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {onScroll();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
if (searchReviewsSection) {
    observer.observe(searchReviewsSection);
} else {console.error("Section not found")};



const swiper = new Swiper('.swiper-reviews', {
    modules: [Navigation, Pagination],  
    
    navigation: {
        nextEl: '.swiper-button-next-rev',
        prevEl: '.swiper-button-prev-rev',
    },
    pagination: {
            el: '.swiper-pagination-rev',
        clickable: true,
            
    },
    spaceBetween: 16,  
    
    slidesPerView: 1, 
    breakpoints: {
        768: { 
            slidesPerView: 2,
            spaceBetween: 20
        },
       
        1440: { 
            slidesPerView: 4,
            spaceBetween: 32
        }
    },
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    loop: false,  
});











