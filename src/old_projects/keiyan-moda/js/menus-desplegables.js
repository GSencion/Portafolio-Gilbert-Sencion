const TRIANGULOS = document.querySelectorAll('.triangulos');
const SUBMENUS = document.querySelectorAll('.submenus');

// console.log(TRIANGULOS);
// console.log(SUBMENUS);

TRIANGULOS.forEach((item, position)=>{
    // console.log(item);
    // console.log(position);
    item.addEventListener('click', ()=>{
        // SUBMENUS[position].classList.toggle('activo');
        if (position === 0){
            SUBMENUS[0].classList.toggle('activo');
            SUBMENUS[1].classList.remove('activo');
        }else{
            SUBMENUS[1].classList.toggle('activo');
            SUBMENUS[0].classList.remove('activo');
        }
        // SUBMENUS[position].removeAttribute('.activo');
        
    })
})

// window.addEventListener('click', (e)=>{
//     if(e.target == SUBMENUS){
//         SUBMENUS.classList.toggle('activo');
//     }
// })

// TRIANGULOS.forEach((item, position)=>{
//     position.addEventListener('click', ()=>{
//         SUBMENUS[position].classList.toggle('activo');
//     })
// })