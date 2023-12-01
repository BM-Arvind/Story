


var swiper = new Swiper(".book-slider", {
   loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

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