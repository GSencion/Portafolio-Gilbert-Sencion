// Declaración de variables
let btnMenu = document.querySelector('#cruz');
let aspa = document.querySelector('#cruz');
let menu = document.querySelector('#menu');

// console.log(btnMenu);
// console.log(aspa);
// console.log(menu);

// Generador de eventos
btnMenu.addEventListener('click', muestraMenu);

// Función mostrar menú
function muestraMenu(){
    menu.classList.toggle('mostrar');
    aspa.classList.toggle('fa-xmark');
}