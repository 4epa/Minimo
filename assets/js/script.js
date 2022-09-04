// DOM elements
const iconMenu = document.querySelector('.burger__logo');
const menuBody = document.querySelector('.navigate');
const header = document.querySelector('.header');

// CONSTANTS
const scrollTrigger = 60

// CHECK DEVICE
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/IOS/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return(
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Windows() ||
      isMobile.Opera());
  }
}
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

// BURGER MENU
iconMenu.addEventListener("click", function(e) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
});

// STICKY HEADER
window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    header.classList.add('_sticky');
  } else {
    header.classList.remove('_sticky');
  }
};
