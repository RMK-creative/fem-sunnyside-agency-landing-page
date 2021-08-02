const hamburger = document.querySelector(".toggle-box");
const modal = document.querySelector(".navbar__modal");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("active");
});

// function showMenu() {
//   document.querySelector(".navbar__modal").classList.toggle("active");
//   document.querySelector(".menu").classList.toggle("hide");
//   document.querySelector(".close").classList.toggle("show");
// }
