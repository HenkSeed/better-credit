import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import replaceSVGImages from "./replaceSVGImages.js";
import modal from "./modal.js";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-prev",
  //     prevEl: ".swiper-button-next",
  //   },

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  //   spaceBetween: 30,
  speed: 600,
  pagination: {
    el: ".empower__pagination",
    clickable: true,
  },
});

replaceSVGImages();
modal();
