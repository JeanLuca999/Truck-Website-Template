const menu = document.querySelector('.header--menu')
const navMenu = document.querySelector('#navMenu')
menu.addEventListener('click', () => {
    navMenu.classList.toggle('menu-active')
})