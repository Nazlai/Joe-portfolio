
"use strict";

const Module = (function(){
  const hamburgerToggle = function(){
    const toggle = document.getElementById("hamburger-toggle");
    const navList = document.getElementById("navBar-list");
    toggle.classList.toggle("hamburger__toggle--active");
    navList.classList.toggle("navBar__list--active");
  }

  const hamburger = document.getElementById("hamburger");
  
  hamburger.addEventListener("click", hamburgerToggle);
  
  const navItem = document.querySelectorAll(".navBar__item");

  for (let i = 0; i < navItem.length; i++){
    navItem[i].addEventListener("click", hamburgerToggle);
  } 

})()