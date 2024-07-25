const hamburgerIcon: any = document.querySelector("#hamburg-icon");
const mobileNavbar: any = document.querySelector("#mobile-navbar");
const closeButton:any = document.querySelector("#close-btn");

const openMenu = () => {
  hamburgerIcon.classList.add("hidden");
  mobileNavbar.classList.remove("hidden");
  console.log("Hamburger clicked");
}

const hideMenu = () => {
  mobileNavbar.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");
}

hamburgerIcon.addEventListener("click", openMenu);
closeButton.addEventListener("click", hideMenu)
