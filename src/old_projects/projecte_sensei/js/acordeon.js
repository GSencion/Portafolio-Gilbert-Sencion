const contenedores = document.querySelectorAll('.container');
console.log(contenedores);
contenedores.forEach(contenedor => contenedor.addEventListener('click', ()=>{
    contenedor.classList.toggle('activa');
}));