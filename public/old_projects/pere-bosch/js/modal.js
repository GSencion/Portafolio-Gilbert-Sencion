// Declaración de variables
let modal = document.querySelector('#modal');
let abrir = document.querySelector('#abrir');
let cerrar = document.querySelector('#cerrar');

// Función para abrir la ventana modal
abrir.addEventListener('click', ()=>modal.classList.remove('oculta-modal'));

// Función para cerrar la ventana modal
cerrar.addEventListener('click', ()=> modal.classList.add('oculta-modal'));

// Función cerrar la ventan modal haciendo click fuera del modal
window.addEventListener('click', (e)=>{
    if(e.target == modal){
        modal.classList.add('oculta-modal');
    }
});