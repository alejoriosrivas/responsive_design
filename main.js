// console.log('prove')
// Los selectores de 'clase' comienzan con .
const menu = document.querySelector('.menu')
console.log(menu)
// Los selectores de 'id' comienzan con #
const burgerBtn = document.querySelector('#menuBtn')
console.log(burgerBtn)

const movile = window.matchMedia('screen and (max-width: 768px)')
console.log(movile)

movile.addListener(validation)

function validation(event) {
    // console.log(movile.matches)
    if (event.matches) {
        // console.log(`La pantalla cumple el requisito`)
        burgerBtn.addEventListener('click', showHideMenu)
    } else {
        burgerBtn.removeEventListener('click', showHideMenu)
    }
}

validation(movile)

function showHideMenu() {
    menu.classList.contains('is-active') 
     ? 
        menu.classList.remove('is-active')
     :
        menu.classList.add('is-active')
}

// let height = window.innerHeight
// let width = window.innerWidth

// if (width <= 768 ) {
//     burgerBtn.addEventListener('click', showHideMenu)
    
//     // menu.classList.add('is-active')
//     // Equivalente a 
//     // menu
//     // .classList
//     // .add('is-active')
    
//     function showHideMenu() {
//         menu.classList.contains('is-active') 
//         ? 
//             menu.classList.remove('is-active') 
//         : 
//             menu.classList.add('is-active')
//     }
// }