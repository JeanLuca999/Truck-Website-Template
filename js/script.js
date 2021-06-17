const navMenu = document.querySelectorAll('.header-nav')[0]
const menu = document.querySelectorAll('.header-menu')[0]

menu.addEventListener('click', () => {
    navMenu.classList.toggle('header-nav-open')
})