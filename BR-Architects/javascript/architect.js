// Hamburger
const toggleHamburg = document.getElementById("hamburger");
let menu = document.getElementById("nav-links");

toggleHamburg.addEventListener("click", () => {
menu.classList.toggle("active")
    })