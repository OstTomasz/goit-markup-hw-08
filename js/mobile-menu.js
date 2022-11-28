const menuOverlay = document.querySelector(".mobile-menu");
const menuCloseButton = document.querySelector(".close-button");
const menuOpenButton = document.querySelector(".mobile-menu-button");

menuOpenButton.addEventListener("click", (e) => {
  menuOverlay.classList.remove("is-hidden");
});
menuCloseButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("is-hidden");
});
