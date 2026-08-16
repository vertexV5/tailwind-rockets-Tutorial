import "./styles.css";
const hamburgerMenuButton = document.querySelector<HTMLButtonElement>("#humburger-button")!;

const mobileMenu = document.querySelector("#mobile-menu")!;
const toggleMenu = () => {
  mobileMenu.classList.toggle("hidden");
  
  hamburgerMenuButton.innerHTML = mobileMenu.classList.contains('hidden') ? "&#9776;" : "X";
};
hamburgerMenuButton.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);
