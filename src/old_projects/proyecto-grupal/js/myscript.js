// Decalración de variables
let logo = document.querySelector('#logo');


function animation(){
    logo.classList.toggle('activo');
}

setInterval(animation, 800);