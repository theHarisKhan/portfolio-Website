const ToggleBtn = document.querySelector('.toggle--menu')
const NavContainer = document.querySelector('.nav--links')

ToggleBtn.addEventListener('click', ()=> {
    ToggleBtn.classList.toggle('active')
    NavContainer.classList.toggle('active')
})

var Btn = document.getElementsByClassName('Btn')
var Slides = document.getElementById('slides')

Btn[0].onclick = () =>{
    Slides.style.transform = `translateX(0px)`
    for(i=0; i<4; i++){
        Btn[i].classList.remove('Active')
    }
    Btn[0].classList.add('Active')
}
Btn[1].onclick = () =>{
    Slides.style.transform = `translateX(-800px)`
    for(i=0; i<4; i++){
        Btn[i].classList.remove('Active')
    }
    Btn[1].classList.add('Active')
}
Btn[2].onclick = () =>{
    Slides.style.transform = `translateX(-1600px)`
    for(i=0; i<4; i++){
        Btn[i].classList.remove('Active')
    }
    Btn[2].classList.add('Active')
}
Btn[3].onclick = () =>{
    Slides.style.transform = `translateX(-2400px)`
    for(i=0; i<4; i++){
        Btn[i].classList.remove('Active')
    }
    Btn[3].classList.add('Active')
}