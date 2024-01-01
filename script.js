let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');

}
let shopping = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shopping.classList.toggle('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
}
let menu = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}


var swiper = new Swiper(".product-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
   
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });



  var swiper = new Swiper(".review-slider", {
    loop: true,
   
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
   
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });