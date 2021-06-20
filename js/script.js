const menu = document.querySelector('.header--menu')
const navMenu = document.querySelector('#navMenu')
const closeButton = document.querySelector('#close-button')

menu.addEventListener('click', () => {
    navMenu.classList.toggle('menu-active')
})

closeButton.addEventListener('click', () => {
    navMenu.classList.toggle('menu-active')
})