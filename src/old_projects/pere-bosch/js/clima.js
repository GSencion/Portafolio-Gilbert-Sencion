// Almacenamos la api key de la página open weather maps
const apiClave = '74b3fad6ce50d1b448c7f8f71be6a6cc';

// Consulta por la ubicación del usuario
window.addEventListener('load', ()=>{
    // Declaración de variables para mostrar los datos en el DOM
        let temperaturaValor = document.querySelector('.temperatura');
        let ubicacion = document.querySelector('.ubicacion');
        let iconDom = document.querySelector('#icono-animado');
    // Obtener permiso del usuario de su geolocalización
    if(navigator.geolocation){
        // console.log(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(posicion =>{
            // console.log(posicion);
            let longitud = posicion.coords.longitude;
            let latitud = posicion.coords.latitude;
            // console.log(longitud);
            // console.log(latitud);

            // Almacenar la url del endpoint
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiClave}&units=metric&lang=ca`;
            // console.log(url);
            // Petición de datos con FETCH
            fetch(url)
                .then (response => response.json())
                // .then (json => console.log(json))
                .then(datos =>{
                    // console.log(datos);
                    let temperatura = Math.round(datos.main.temp);
                    temperaturaValor.textContent = `${temperatura}°C`;
                    // console.log(temperatura);
                    
                    let localizacion = datos.name;
                    ubicacion.textContent = `${localizacion}`;

                    let icono = datos.weather[0].main;
                    // console.log(icono);
                    switch(icono){
                        case 'Clouds':
                            iconDom.src = 'img/cloudy-day-1.svg';
                            break;
                        case 'Snow':
                            iconDom.src = 'img/snowy-1.svg';
                            break;
                        case 'Rain':
                            iconDom.src = 'img/rainy-1.svg';
                            break;
                        case 'Drizzle':
                            iconDom.src = 'img/rainy-2.svg';
                            break;
                        case 'thunderstrom':
                            iconDom.src = 'img/thunder.svg';
                            break;
                        case 'Atmosphere':
                            iconDom.src = 'img/weather.svg';
                            break;
                        case 'Clear':
                            iconDom.src = 'img/day.svg';
                            break;
                        default:
                            iconDom.src = 'img/cloudy.svg';
                    }        

                })
                .catch (err => console.error('Descripcion de errores: ', err))
        });
    }
});