const sidebarToggle = document.querySelector(".sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const btnClose = document.querySelector(".close-btn");


sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

btnClose.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})