const menu = document.querySelector(".menu-btn")
const nav = document.querySelector("nav")
const menu_btn_line = document.querySelectorAll(".menu-btn-line")
const menuOpenClass = document.querySelectorAll(".menuOpen")
menu.addEventListener("click",menuOpen)
menu.addEventListener("touchstart",menuOpen)
function menuOpen () {
  menu.classList.toggle("active")
  nav.classList.toggle("active-nav")
}
