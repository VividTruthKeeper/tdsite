// Swiper
const partnerSwiper = new Swiper(".partnerSwiper", {
  slidesPerView: 4,
  // spaceBetween: 60,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  loop: true,
  navigation: {
    prevEl: ".partner-prev",
    nextEl: ".partner-next",
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});
