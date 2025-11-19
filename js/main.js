// Burger Menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = burger.classList.contains("active")
    ? "hidden"
    : "";
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});



// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  freeModeSticky: true,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // har doim 3 ta dot yaratamiz
      const dotIndex = index % 3; // modulo 3
      return '<span class="' + className + '"></span>';
    },
  },

  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
    1280: { slidesPerView: 6, spaceBetween: 40 },
  },
});







    // modal 

const modal = document.getElementById("modalOverlay");
const openButtons = document.querySelectorAll(".openModal");

// Har bir buttonni modalga ulab chiqamiz
openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

// Fonga bosganda yopiladi
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// ------------------     fixed   --------------

const header = document.getElementById("main-header");

function updateHeader() {
  if (window.scrollY > 0) {
    header.classList.add("shadow-lg", "bg-white", "bg-transparent");
  } else {
    header.classList.remove("shadow-lg", "bg-white", "bg-transparent");
  }
}

// Sahifa scroll bo‘lganda ishlaydi
window.addEventListener("scroll", updateHeader);

// Sahifa to‘liq yuklanganda ham tekshiramiz
window.addEventListener("load", updateHeader);