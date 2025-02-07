import{S as f,N as g,K as L,P as E,a as v,i as u}from"./assets/vendor-DRtIqfvQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-toggle"),e=document.querySelector(".nav"),s=document.querySelector(".burger-menu"),r=document.querySelector(".mobile-menu"),o=document.querySelector(".close-menu"),n=document.querySelectorAll(".mobile-nav a"),i=document.querySelectorAll(".nav-list a"),h=document.querySelector(".order-btn-mobile");t.addEventListener("click",()=>{e.classList.toggle("active")}),s.addEventListener("click",function(){r.classList.toggle("active")}),o.addEventListener("click",function(){r.classList.remove("active")}),n.forEach(function(a){a.addEventListener("click",function(){r.classList.remove("active")})}),h.addEventListener("click",function(){r.classList.remove("active")}),i.forEach(function(a){a.addEventListener("click",function(){e.classList.remove("active")})})});const p=new f(".swiper-projects",{modules:[g,L],spaceBetween:64,slidesPerView:"auto",loop:!1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev",disabledClass:"projects-swiper-button-disabled"},allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0}});document.addEventListener("keydown",function(t){t.key==="Tab"&&(t.preventDefault(),t.shiftKey?p.slidePrev():p.slideNext())});document.querySelector(".projects-button").addEventListener("click",function(){window.open("https://github.com/graudu12/portfolio-js-goit-team10","_blank")});const l=document.querySelector(".wrap-card");console.log(l);const w=document.querySelector(".loader");let m;const S=()=>{w.style.display="block"},c=()=>{w.style.display="none"},d=document.querySelector(".js-reviews-section"),q=async()=>{S();try{const e=(await v.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(!e||e.legth===0)throw new Error("No data available");l.innerHTML="",m=e.map(M).join(""),l.innerHTML=m,k.update(),c()}catch{c(),u.show({backgroundColor:"linear-gradient(90deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)",messageColor:" #fafafa",message:"Invalid request, try again!",close:"true"}),d.innerHTML='<p class ="error-title">Not found</p>';return}finally{c()}},M=({author:t,avatar_url:e,review:s})=>`<li class ="swiper-slide swipe-review">
<img class="review-img" src="${e}" alt="${t}"/>
<h2 class="reviews-author">${t}</h2>
        <p class="info-review">
         ${s} 
        </p></li>`,y=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(q(),y.unobserve(e.target))})},{threshold:.2});d?y.observe(d):console.error("Section not found");const k=new f(".swiper-reviews",{modules:[g,E],navigation:{nextEl:".swiper-button-next-rev",prevEl:".swiper-button-prev-rev"},pagination:{el:".swiper-pagination-rev",clickable:!0},spaceBetween:16,slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:4,spaceBetween:32}},keyboard:{enabled:!0,pageUpDown:!0},loop:!1});(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalTitle:document.querySelector(".modal h3"),modalMessage:document.querySelector(".modal p")};t.closeModalBtn.addEventListener("click",e),t.modal.addEventListener("click",o=>{o.target===o.currentTarget&&e()});function e(){t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-open")?document.addEventListener("keydown",s):document.removeEventListener("keydown",s)}function s(o){o.code==="Escape"&&e()}function r(o,n){t.modalTitle.textContent=o,t.modalMessage.textContent=n,e()}window.showModal=r})();const b=document.querySelector(".contact-form"),P=document.getElementById("email"),T=document.getElementById("comments");b.addEventListener("submit",t=>{t.preventDefault();const e=P.value.trim(),s=T.value.trim();if(!e||!s){u.warning({title:"Warning",message:"Please fill in all fields!",position:"topRight"});return}j({email:e,comment:s})});async function j(t){try{const e=await v.post("https://portfolio-js.b.goit.study/api/requests",t);e.status===201&&(B(e.data),b.reset())}catch(e){I(e)}}function B({title:t,message:e}){window.showModal(t,e)}function I(t){let e="An error occurred! Please try again later.";t.response&&(t.response.status===400?e="Invalid form data. Please check your input!":t.response.status===404?e="Server not found!":t.response.status===500&&(e="Server error! Please try again later.")),u.error({title:"Error",message:e,position:"topRight"})}
//# sourceMappingURL=index.js.map
