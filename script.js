const ToggleBtn = document.querySelector('.toggle--menu')
const NavContainer = document.querySelector('.nav--links')

ToggleBtn.addEventListener('click', ()=> {
    ToggleBtn.classList.toggle('active')
    NavContainer.classList.toggle('active')
})