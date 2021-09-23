$(document).ready(function(){
    $('.header__mobile--btn').on('click', ()=>{
       $('.header__logo').toggleClass('header__logo--close')
    })

   
});
let listItems = document.querySelectorAll('.specialization__item');

listItems.forEach((it)=>{
    it.addEventListener('click', function(){
        it.classList.toggle('specialization__item--active');
        it.querySelector('.specialization__text').classList.toggle('specialization__text--hidden');
})
})
const swiper = new Swiper ('.swiper',{
    direction: 'horizontal',
    loop: true, 
    slidesPerView: 4.5,
    spaceBetween: 30,
    grabCursor: true,

})

const mainSwiper = new Swiper ('.project__swiper',{
    direction: 'horizontal',
    slidesPerView: 'auto', 
    spaceBetween: 30,
    navigation: {
        nextEl: '.btn__next',
        prevEl: '.btn__prev',
    },
    grabCursor: true,
    longSwipes: false,
    // mousewheel: true,
    // releaseOnEdges: true,
    // draggable: true,
    

})