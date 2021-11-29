// const hamburger = document.querySelector("#hamburger-container");
const nav = document.querySelector("#nav");

// hamburger.addEventListener("click", () => {
//   nav.classList.toggle("mobile-nav");
//   // alert("Joseph Madras");
// });

const menuBtn = document.querySelector(".hamburger-container");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  // alert("Joseph Madras de Luluabourg");
  nav.classList.toggle("mobile-nav");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
