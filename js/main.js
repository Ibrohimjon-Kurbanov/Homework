const headerToggleBtn = document.querySelector(".header__toggle-btn");
const headerToggleBtnMenu = document.querySelector("#menu");
const sitenav = document.querySelector(".sitenav");

headerToggleBtn.addEventListener("click", () => {
  sitenav.classList.toggle("show-nav");
  menu.classList.toggle("bx-x");
});
