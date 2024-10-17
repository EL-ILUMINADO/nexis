const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn hamburger");
const dropDownMenu = document.querySelector(".dropdown");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>'
}