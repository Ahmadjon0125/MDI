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
      // Slaydlar orasidagi masofa (masofani ham belgilash tavsiya etiladi)
      spaceBetween: 30, 
      loop: "true",

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Avtomatik aylanish sozlamalari
      autoplay: {
        delay: 0, // Har bir slaydning pauza vaqti 0ms
        // disableOnInteraction: false, // Foydalanuvchi tugmani bossa ham to'xtamaydi
      },

      // Slayd tezligi (avtomatik aylanadigan slayderlar uchun muhim)
      speed: 10000, // Misol uchun, 4000ms (4 soniya) da bitta to'liq aylanish
      
      // Responsive sozlamalar (Har xil ekran o'lchamlari uchun)
      breakpoints: {
        // 320px dan boshlab (Mobile)
        320: {
          slidesPerView: 2, // Bir vaqtda 2 ta logotip
          spaceBetween: 20
        },
        // 768px dan boshlab (Tablet)
        768: {
          slidesPerView: 4, // Bir vaqtda 4 ta logotip
          spaceBetween: 30
        },
        // 1024px dan boshlab (Laptop/Kattaroq ekran)
        1024: {
          slidesPerView: 5, // Bir vaqtda 5 ta logotip (Siz so'raganingiz)
          spaceBetween: 30
        },
        // Agar juda katta ekran bo'lsa, 6 ta ko'rsatishi mumkin
        1280: {
          slidesPerView: 6, 
          spaceBetween: 40
        }
      }
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