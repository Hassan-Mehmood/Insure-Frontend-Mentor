const hamburgerIcon = document.querySelector(".menu-icon");
const navLinksParent = document.querySelector(".nav-links-parent");

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerIcon.src.includes("/images/icon-hamburger.svg")) {
    hamburgerIcon.src = "./images/icon-close.svg";
    navLinksParent.classList.toggle("transform");
  } else {
    hamburgerIcon.src = "./images/icon-hamburger.svg";
    navLinksParent.classList.toggle("transform");
  }
});
