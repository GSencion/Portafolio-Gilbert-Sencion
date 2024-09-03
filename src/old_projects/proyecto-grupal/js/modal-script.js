// Ventana Modal
let modal = document.querySelector('#modal');
let abrir = document.querySelector('#abrir');
let cerrar = document.querySelector('#cerrar');

// Función para abrir la ventana modal
abrir.addEventListener('click', ()=> modal.classList.remove('oculta-modal'));

// Funcion para cerrar la ventana modal
cerrar.addEventListener('click', ()=> modal.classList.add('oculta-modal'));

// Funcion cerrar la ventana modal haciendo click fuera de la ventana
window.addEventListener('click', (e) =>{
    if (e.target == modal){
        modal.classList.add('oculta-modal');
    }
})