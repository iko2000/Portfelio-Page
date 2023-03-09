"use strict";

const burgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".central-header");
let sum;
console.log(sum);
burgerMenu.addEventListener("click", () => {
  console.log("Button clicked");
  menu.classList.remove("central-header");
  menu.classList.add("activate");
});

