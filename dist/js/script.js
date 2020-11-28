const ToggleBtn = document.querySelector('.navbar_container_toggle')
const MenuBar = document.querySelector('.navbar_container_menu')

ToggleBtn.addEventListener('click', ()=> {
    MenuBar.classList.toggle('active')
    ToggleBtn.classList.toggle('active')
})