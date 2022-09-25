// Getting elements

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

//Opening menu and changing style of hamburger on click

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  overlay.classList.toggle("open");
  menu.classList.toggle("show");
  body.classList.toggle("fixed");
});
