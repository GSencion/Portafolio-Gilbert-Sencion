// Selección del lugar
const fechaActual = document.querySelector('.dia');
// Función
function fechaLocal(){
    // Declaración de variables
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anyo = fecha.getFullYear();
    let fechaLocal =`
    <p>Data Actual: ${dia}/${mes+1}/${anyo}</p>`;
    fechaActual.innerHTML = fechaLocal;
}
// LLamada a la función
fechaLocal();