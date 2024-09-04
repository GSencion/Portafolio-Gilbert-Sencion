// Declaración de constantes
const triangulo = document.querySelector('#triangulo-mujer');
const submenu = document.querySelector('.submenu-mujer');
// console.log(triangulo);

// Escucha del evento
triangulo.addEventListener('click', muestraSubMenu);

// Función de añadir la clase al contenedor
function muestraSubMenu(){
    submenu.classList.toggle('activo');
}