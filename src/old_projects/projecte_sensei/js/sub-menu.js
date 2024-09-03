// Declaració de variables
const flechas = document.querySelectorAll('.arrow');
const submenus = document.querySelectorAll('.submenu');

// console.log(flechas);
// console.log(submenus);

flechas.forEach((item,position)=>{
    // console.log(item);
    // console.log(position);
    item.addEventListener('click', ()=>{
        switch(position){
            case 0:
                submenus[position].classList.toggle('activo');
                submenus[1].classList.remove('activo');
                submenus[2].classList.remove('activo');
                submenus[3].classList.remove('activo');
                break;
            case 1:
                submenus[position].classList.toggle('activo');
                submenus[0].classList.remove('activo');
                submenus[2].classList.remove('activo');
                submenus[3].classList.remove('activo');
                break;
            case 2:
                submenus[position].classList.toggle('activo');
                submenus[0].classList.remove('activo');
                submenus[1].classList.remove('activo');
                submenus[3].classList.remove('activo');
                break;
            case 3:
                submenus[position].classList.toggle('activo');
                submenus[0].classList.remove('activo');
                submenus[1].classList.remove('activo');
                submenus[2].classList.remove('activo');
                break;
            default:
                submenus[0].classList.remove('activo');
                submenus[1].classList.remove('activo');
                submenus[2].classList.remove('activo');
                submenus[3].classList.remove('activo');
                break;
        }
    })
})