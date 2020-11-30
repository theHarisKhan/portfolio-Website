const ToggleBtn = document.querySelector('.navbar_container_toggle')
const MenuBar = document.querySelector('.navbar_container_menu')

ToggleBtn.addEventListener('click', ()=> {
    MenuBar.classList.toggle('active')
    ToggleBtn.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);