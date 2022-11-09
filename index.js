const menuIcon = document.querySelector(".fa-bars");
const navRight = document.querySelector(".nav-right");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  navRight.classList.toggle("show-nav");
});

window.addEventListener("scroll", function () {
  nav.classList.toggle("nav-bg", window.scrollY > 0);
});
