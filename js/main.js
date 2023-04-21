AOS.init();

const body = document.querySelector('body');

//* Menu 
const menu = document.querySelector('.menu')
const menuBurger = document.querySelector('.burger-menu')

menuBurger.addEventListener('click', () => {
    const isOpen = menuBurger.getAttribute('aria-expanded')
    if(isOpen === 'false'){
        menuBurger.setAttribute('aria-expanded', 'true')
    } else {
        menuBurger.setAttribute('aria-expanded', 'false')
    }

    menu.classList.toggle('menu--active')
})


//* Modal
const modal = document.querySelector('.modal-form');
const btnModal = document.querySelectorAll('.home-slider__btn');
const closeModal = document.querySelector('.modal-form__close');

body.addEventListener('click', (e) => {
    btnModal.forEach((btn) => {
        if (e.target === btn){
            modal.classList.add('modal-form--active');
            body.classList.add('lock');
        }
    })
    if (e.target === closeModal || e.target === closeModal.querySelector('.modal-form__close-img')){
        modal.classList.remove('modal-form--active');
        body.classList.remove('lock');
    }
})


//* Swiper Slider
const swiperHome = new Swiper('.home-slider', {
    pagination: {
        el: '.home-slider__pagination',
    },
    effect: 'fade',
    autoplay: {
        delay: 6000,
    },
    loop: true,
})  
const swiperServices = new Swiper('.services__list', {
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
        420: {
            slidesPerView: 2,
        },
        680: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
})  
const swiperPortfolio = new Swiper('.portfolio__slider', {
    pagination: {
        el: '.portfolio__slider-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.portfolio__slider-next',
        prevEl: '.portfolio__slider-prev',
    },
})  

//* scrollToTop
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', trackScroll)

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}); 

function trackScroll(){
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords){
        scrollToTopBtn.classList.add('scroll-to-top__show');
    } else {
        scrollToTopBtn.classList.remove('scroll-to-top__show');
    }
}