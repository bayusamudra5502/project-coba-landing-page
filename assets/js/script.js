// Header
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const nav = document.querySelector("header nav");
    const menuImg = document.querySelector("#menu-img");
    const closeImg = document.querySelector("#close-img");
    nav.classList.toggle("show");
    menuImg.classList.toggle("hide");
    closeImg.classList.toggle("hide");
}
