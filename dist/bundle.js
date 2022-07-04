/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// ------------------------------ Cards Flip with switch click -----------------------
var flips = document.querySelectorAll(".flip");

togglePlan = function togglePlan() {
  flips.forEach(function (flip) {
    console.log(flip);

    if (flip.classList.contains("active")) {
      flip.classList.remove("active");
    } else {
      flip.classList.add("active");
    }
  });
}; // ---------- Change text on download btns and testimonial jobs according to the width of the screen --------


var mac = document.querySelector(".mac-btn");
var windows = document.querySelector(".windows-btn");
var linux = document.querySelector(".linux-btn");
var jobs = document.querySelectorAll(".testimonial-job");

function changeText() {
  var w = window.innerWidth;

  if (w <= 999) {
    mac.innerHTML = "For Mac";
    windows.innerHTML = "For Windows";
    linux.innerHTML = "For Linux";

    if (w <= 767) {
      mac.innerHTML = "Download For Mac";
      windows.innerHTML = "Download For Windows";
      linux.innerHTML = "Download For Linux";
      jobs.forEach(function (job) {
        job.innerHTML = "Project Manager";
      });
    } else {
      jobs.forEach(function (job) {
        job.innerHTML = "- Project Manager";
      });
    }
  } else {
    mac.innerHTML = "Download for Mac";
    windows.innerHTML = "Download For Windows";
    linux.innerHTML = "Download For Linux";
    jobs.forEach(function (job) {
      job.innerHTML = "- Project Manager";
    });
  }
}

changeText();
window.addEventListener("resize", changeText); // ------------- make benefits scrollable in mobile view ---------------

function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".benefits-container");

  if (checkWidth > 767) {
    if (typeof owlPost.data("owl.carousel") != "undefined") {
      owlPost.data("owl.carousel").destroy();
    }

    owlPost.removeClass("owl-carousel");
  } else if (checkWidth < 768) {
    owlPost.addClass("owl-carousel");
    owlPost.owlCarousel({
      margin: 10,
      autoWidth: true,
      items: 2,
      dots: false
    });
  }
}

postsCarousel();
$(window).resize(postsCarousel); // ------------- Hamburger for the teblet and mobile version ---------------

var menu = document.querySelector(".links");
var hamburger = document.querySelector(".nav-icon");

handleMenu = function handleMenu() {
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.className = "nav-icon fa-solid fa-xmark";
  } else {
    hamburger.className = "nav-icon fa-solid fa-bars";
  }

  if (menu.classList.contains("active")) {
    menu.style.setProperty("opacity", "0");
    setTimeout(function () {
      menu.classList.remove("active");
    }, 300);
  } else {
    menu.classList.add("active");
    setTimeout(function () {
      menu.style.setProperty("opacity", "1");
    }, 0);
  }
}; // ------------------ Drop down menu  --------------------


handleSubLink = function handleSubLink(id) {
  var subMenu = document.getElementById(id);

  if (subMenu.classList.contains("active")) {
    subMenu.classList.remove("active");
  } else {
    for (i = 1; i < 3; i++) {
      document.getElementById(i).classList.remove("active");
    }

    subMenu.classList.add("active");
  }
}; // -------------- start the testimonoal carousel --------------------


$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  nav: true,
  navText: ["<img class='testimonial-icon' src='../src/assets/icon-chevron-right.svg' alt='prev-arrow'>", "<img class='testimonial-icon' src='../src/assets/icon-chevron-right.svg' alt='next-arrow'>"],
  navSpeed: 500,
  responsive: {
    0: {
      items: 1
    }
  }
});
/******/ })()
;