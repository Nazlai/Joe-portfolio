
"use strict";

(function(){

  const navToggle = function(event){
    const navList = document.getElementById("js-list");
    const toggle = document.getElementById("js-toggle");

    if (event.target.closest('#js-hamburger')){
      navList.classList.toggle("navBar__list--active");
      toggle.classList.toggle("hamburger__toggle--active");
    }

    if (event.target.matches(".navBar__item")){
      navList.classList.remove("navBar__list--active");
      toggle.classList.remove("hamburger__toggle--active");
    }
  }

  document.addEventListener("click", navToggle);
})();