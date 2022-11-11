const menuIcon = document.querySelector(".fa-bars");
const navRight = document.querySelector(".nav-right");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-right > li a");
const scrollEl = document.querySelector(".scroll-up");

menuIcon.addEventListener("click", function () {
  navRight.classList.toggle("show-nav");
});

window.addEventListener("scroll", function () {
  nav.classList.toggle("nav-bg", window.scrollY > 0);
});

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navRight.classList.remove("show-nav");
  })
);

window.addEventListener("scroll", function () {
  scrollEl.classList.toggle("active", window.scrollY > 800);
});
