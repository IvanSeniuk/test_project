"use strict";

//document.addEventListener("DOMContentLoaded", function () {
//	document.body.classList.add("ready");
//});
//Burger
var burgerBtn = document.querySelector(".burger__button");
var burgerMenu = document.querySelector(".header__menu");
burgerBtn.addEventListener("click", function () {
  if (burgerBtn.classList.contains("active")) {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("active-burger");
  } else {
    burgerBtn.classList.add("active");
    burgerMenu.classList.add("active-burger");
  }
}); // Header Scroll

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
var listInner = document.querySelector(".projects__list-inner");
var items = listInner.querySelectorAll(".projects__item");
items.forEach(function (item, index) {
  item.addEventListener("mouseover", function () {
    if (index === 2) {
      var nextSibling = this.nextElementSibling;
      var nextNextSibling = nextSibling ? nextSibling.nextElementSibling : null;

      if (nextSibling) {
        nextSibling.classList.add("hovered");
      }

      if (nextNextSibling) {
        nextNextSibling.classList.add("hovered");
      }
    }

    if (index === 3) {
      var prevSibling = this.previousElementSibling;
      var _nextSibling = this.nextElementSibling;

      if (prevSibling) {
        prevSibling.classList.add("hovered");
      }

      if (_nextSibling) {
        _nextSibling.classList.add("hovered");
      }
    }

    if (index === 4) {
      var _prevSibling = this.previousElementSibling;
      var prevPrevSibling = _prevSibling ? _prevSibling.previousElementSibling : null;

      if (_prevSibling) {
        _prevSibling.classList.add("hovered");
      }

      if (prevPrevSibling) {
        prevPrevSibling.classList.add("hovered");
      }
    }
  });
  item.addEventListener("mouseout", function () {
    items.forEach(function (item) {
      item.classList.remove("hovered");
    });
  });
});
var heroSlider = new Swiper(".hero__slider", {
  speed: 1600,
  spaceBetween: 0,
  slidesPerView: 1,
  //autoHeight: true,
  loopPreventsSlide: false,
  lazy: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 4500 //disableOnInteraction: false,

  },
  loop: false,
  pagination: {
    el: ".hero__slider-pagination",
    type: "custom",
    renderCustom: function renderCustom(swiper, current, total) {
      var currentFormatted = current.toString().padStart(2, "0");
      var totalFormatted = total.toString().padStart(2, "0");
      return '<span class="current">' + currentFormatted + "</span>" + '<span class="center">' + "/" + "</span>" + '<span class="total">' + totalFormatted + "</span>";
    }
  },
  navigation: {
    nextEl: ".hero__slider-next",
    prevEl: ".hero__slider-prev"
  }
});
heroSlider.on("slideChangeTransitionStart", function () {
  $(".hero__slider").find(".swiper-slide").find("img").css("transform", "scale(1)").css("transition", "5s linear");
  $(".hero__slider").find(".swiper-slide-active").find("img").css("transform", "scale(1.12)").css("transition", "19s");
}); // ANIMATION FOR SECTION TITLE ======================================================================

var titles = document.querySelectorAll(".section__title");
titles.forEach(function (title) {
  var titleItemsTl = gsap.timeline({
    scrollTrigger: {
      trigger: title,
      toggleActions: "play none none none",
      start: "top+=120 bottom"
    }
  });
  titleItemsTl.to(title, {
    y: 0,
    duration: 0.5,
    opacity: 1,
    stagger: 0.5
  });
}); // ANIMATION FOR ABOUT ======================================================================

var teamItemsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "play none none none"
  }
});
teamItemsTl.to(".about img", {
  y: 0,
  x: 0,
  scale: 1.15,
  duration: 0.7,
  opacity: 1,
  stagger: 0.35
}); // ANIMATION FOR Contact SECTION ============================================================

var contacts = document.querySelectorAll(".contact-us__row");
contacts.forEach(function (contact) {
  var contactLeft = contact.querySelector(".left");
  var contactRight = contact.querySelector(".right");
  var contactSectionTl = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      toggleActions: "play none none none",
      start: "top+=150 bottom"
    }
  });
  contactSectionTl.to(contactLeft, {
    x: 0,
    duration: 1,
    opacity: 1
  }).to(contactRight, {
    x: 0,
    duration: 1,
    opacity: 1
  }, 0);
}); // ANIMATION FOR PLAN AND PRICING ======================================================================

var plamsItemsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about__inner",
    toggleActions: "play none none none",
    start: "top+=120 bottom"
  }
});
plamsItemsTl.to(".about__desc", {
  y: 0,
  x: 0,
  duration: 0.75,
  opacity: 1,
  stagger: 0
}).to(".about__inner .a-btn", {
  y: 0,
  x: 0,
  opacity: 1,
  duration: 0,
  stagger: 0
}); // ANIMATION FOR projects ITEMS ======================================================================

var projectsItemsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects__list-inner",
    toggleActions: "play none none none"
  }
});
projectsItemsTl.to(".projects__item", {
  y: 0,
  duration: 0.6,
  opacity: 1,
  stagger: 0.3
}).to(".projects .a-btn", {
  y: 0,
  x: 0,
  opacity: 1,
  duration: 0,
  stagger: 0
}); // ANIMATION FOR Tasks ITEMS ======================================================================

var tasksItems = document.querySelectorAll(".tasks__item");
var tasksItemsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tasks__list",
    toggleActions: "play none none none",
    start: "top+=120 bottom"
  }
});
tasksItemsTl.to(".tasks__item-inner", {
  x: 0,
  "--beforeOpacity": 1,
  "--beforeX": 0,
  duration: 0.5,
  opacity: 1,
  stagger: 0.25
}).to(".tasks__item-inner .desc", {
  y: 0,
  duration: 0.35,
  opacity: 1,
  stagger: 0.25
});
var containers = document.querySelectorAll(".image-container");
var images = document.querySelectorAll(".image-container img");
window.addEventListener("mousemove", function (e) {
  var _document$documentEle = document.documentElement,
      clientWidth = _document$documentEle.clientWidth,
      clientHeight = _document$documentEle.clientHeight;
  var pageX = e.pageX,
      pageY = e.pageY;
  var distanceX = pageX - clientWidth / 2;
  var distanceY = pageY - clientHeight / 2;
  containers.forEach(function (container, index) {
    var shiftX = distanceX * (index + 1) / 200;
    var shiftY = distanceY * (index + 1) / 200;
    images[index].style.transform = "translate(".concat(shiftX, "px, ").concat(shiftY, "px) scale(1.15)");
  });
});