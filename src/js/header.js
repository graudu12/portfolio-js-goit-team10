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
        closeMobileMenu();
    });

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-active');
    }

    function closeDesktopMenu() {
        nav.classList.remove('active');
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        if (window.innerWidth < 768) {
            closeMobileMenu();
        } else {
            closeDesktopMenu();
        }
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    desktopLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    orderBtnMobile.addEventListener('click', function () {
        closeMobileMenu();
    });
});

