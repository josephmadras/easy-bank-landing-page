const nav = document.querySelector("#nav");
const menuBtn = document.querySelector(".hamburger-container");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile-nav");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
