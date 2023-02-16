// MAIN HEADER
// SEARCH BAR

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchBarEl = searchEl.querySelector("span");
let isFocused = false;

// searchEl.addEventListener("click", function () {
//   searchInputEl.focus();
// });

searchBarEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", // 사실 굳이 안 써도 됨. 기본값임
  slidesPerView: 3, // 3장 보여줄것
  spaceBetween: 10,
  centeredSlides: true,
  loop: true, // 무한으로 돌기
  touchRatio: 0, // 터치해서 강제로 움직이지 않게
  autoplay: {
    delay: 2000, // 2초
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AUTOPLAY 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// TOGGLE PROMOTION
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
promotionToggleBtn.addEventListener("click", function () {
  console.log("!");
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// ANIMATION PART 애니메이션 파트
// 페이지가 켜지자마자 !
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// ANIMATION SCROLL
let scrollYpos;
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 380) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
  if (window.scrollY > 880) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 1300) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 2100) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if (window.scrollY > 2500) {
    const findStoreSection = document.querySelector(".find-store");
    findStoreSection.classList.add("animate");
  }
});
