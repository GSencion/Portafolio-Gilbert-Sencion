// Declaración de constantes
const trianguloDos = document.querySelector('#triangulo-hombre');
const submenuDos = document.querySelector('.submenu-hombre');
// console.log(triangulo);

// Escucha del evento
trianguloDos.addEventListener('click', muestraSubMenu);

// Función de añadir la clase al contenedor
function muestraSubMenu(){
    submenuDos.classList.toggle('activo');
}