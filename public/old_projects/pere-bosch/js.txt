// Decalración de variables
let obraGran = ['obres-art/GransFormats1.jpg','obres-art/GransFormats2.jpg','obres-art/GransFormats3.jpg','obres-art/GransFormats4.jpg'];
let obraModels = ['obres-art/Models1.jpg','obres-art/Models2.jpg', 'obres-art/Models3.jpg', 'obres-art/Models4.jpg', 'obres-art/Models5.jpg'];
let obrasRetrats = ['obres-art/Retrats1.jpg', 'obres-art/Retrats2.jpg', 'obres-art/Retrats3.jpg', 'obres-art/Retrats4.jpg'];
let obrasSantJoan = ['obres-art/SantJoan1.jpg', 'obres-art/SantJoan2.jpg', 'obres-art/SantJoan3.jpg','obres-art/SantJoan4.jpg'];

let obras = [obraGran, obraModels, obrasRetrats, obrasSantJoan];

const contenedorExposicion = document.querySelector('.exposicions');

// Escucha de eventos e instrucciones a realizar a traves de funciones anonimas
    // Funcion mostrar todas al cargar la página
    function mostrarTodas(){
        let i = 0;
        while(i < obras.length){
            for(let j = 0; j < obras[i].length; j++){
                let imagen = obras[i][j];
                let tarjeta =`
                <figure>
                <img src="${imagen}" alt="Imatge ${j+1}" />
                </figure>
                `;
                contenedorExposicion.innerHTML += tarjeta;
            }
            i++;
        }
    }

    //Llamada a la función 
    mostrarTodas();

    // Mostrar totes les obres
        const boton1 = document.querySelector('.totes').addEventListener('click', function (){
            contenedorExposicion.innerHTML = ' ';
            let i = 0;
            while(i < obras.length){
                for(let j = 0; j < obras[i].length; j++){
                    let imagen = obras[i][j];
                    let tarjeta =`
                    <figure>
                    <img src="${imagen}" alt="Imatge ${j+1}" />
                    </figure>
                    `;
                    contenedorExposicion.innerHTML += tarjeta;
                }
                i++;
            }
        });
    // Mostrar Grans formats
        const boton2 = document.querySelector('.grans').addEventListener('click', function(){
            contenedorExposicion.innerHTML = ' ';
            for(let i = 0; i < obraGran.length; i++){
                let imagen = obras[0][i];
                let tarjeta =`
                <figure>
                <img src="${imagen}" alt="Gran Format ${i+1}" />
                </figure>
                `;
                contenedorExposicion.innerHTML += tarjeta;
            }
        });
    // Mostrar Models
        const boton3 = document.querySelector('.models').addEventListener('click', function(){
            contenedorExposicion.innerHTML = ' ';
            for(let i = 0; i < obraGran.length; i++){
                let imagen = obras[1][i];
                let tarjeta =`
                <figure>
                <img src="${imagen}" alt="Models ${i+1}" />
                </figure>
                `;
                contenedorExposicion.innerHTML += tarjeta;
            }
        });
    // Mostrar Retrats
        const boton4 = document.querySelector('.retrats').addEventListener('click', function(){
            contenedorExposicion.innerHTML = ' ';
            for(let i = 0; i < obraGran.length; i++){
                let imagen = obras[2][i];
                let tarjeta =`
                <figure>
                <img src="${imagen}" alt="Retrats ${i+1}" />
                </figure>
                `;
                contenedorExposicion.innerHTML += tarjeta;
            }
        });
    // Mostrar Sant Joan
        const boton5 = document.querySelector('.santJoan').addEventListener('click', function(){
            contenedorExposicion.innerHTML = ' ';
            for(let i = 0; i < obraGran.length; i++){
                let imagen = obras[3][i];
                let tarjeta =`
                <figure>
                <img src="${imagen}" alt="Sant Joan ${i+1}" />
                </figure>
                `;
                contenedorExposicion.innerHTML += tarjeta;
            }
        });