const hamburger = document.querySelector(".navigation__toggle");
const modal = document.querySelector(".hidden");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("hidden");
});
