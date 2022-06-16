const btnMobile = document.getElementById('btn-mobile')
const loginMenu = document.getElementById('menu')

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector(".topbar")
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    nav.style.backgroundColor = "#fff00"
    event.currentTarget.setAttribute('aria-expanded', active)    
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
