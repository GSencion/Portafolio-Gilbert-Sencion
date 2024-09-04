// Declaración de variables
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

// Situar la última imagen en la primera posición
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

let moverIzquierda = ()=>{
    // let sliderSectionLast = document.querySelectorAll('.slider-section')[length-1];
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500)
};


// Automatizar el movimiento

let contenedorSlider = document.querySelector('.container-slider');
let contenedorSliderEstilo = window.getComputedStyle(contenedorSlider);
let visualizacionSlider = contenedorSliderEstilo.getPropertyValue('display');
// console.log(visualizacionSlider);


if (visualizacionSlider !== 'none'){
    setInterval(moverIzquierda, 5000);
}

