// Selecciomos los botones
let botones = document.querySelectorAll('.tablinks');

// Esperamos que se produzca el 'click' y pasamos a una funcion el evento y el contenido del nodo
botones.forEach(boton => boton.addEventListener('click', (event) => openTab(event, boton.textContent)));

const openTab = (evt, tabName) =>{
    // Declaracion de variables
    let tabcontent = document.querySelectorAll('.tabcontent');
    let tablinks = document.querySelectorAll('.tablinks');

    // Inicializamos los nodos ".tabcontent" con "display: none"
    tabcontent.forEach(element => element.style.display = 'none');

    // Inicializamos los nodos ".tablinks" borrando la clase "active"
    tablinks.forEach(element => element.className = element.className.replace(' active', ''));
// console.log(tablinks);
    // Visualizamos la pestaña clickada y añadimos la clase "active" al boton que abre la pestaña
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
};