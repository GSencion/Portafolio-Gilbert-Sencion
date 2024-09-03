// Declaración de evento

document.querySelector('#botonEnvia').addEventListener('click', validarTotal);


function validarTotal(){
    nombreApellido();
    correoElectronico();
    telefono();
    politica();

    let contador = 0;
    if(nombreApellido() == true){
        contador++;
        if(correoElectronico() == true){
            contador++;
            if(telefono() == true){
                contador++;
                if(politica() == true){
                    contador++;
                    alert('Formulario enviado correctamente, gracias');
                    document.formulario.submit();
                }else{
                    alert('Has introducido mal los datos');
                }
            }else{
                alert('Has introducido mal los datos');
            }
        }else{
            alert('Has introducido mal los datos');
        }
    }
};

// Validar nombre
function nombreApellido(){
    // Declaración de variables
    let entrada = document.querySelector('#nombreApellidos');
    let nombreUsuario = document.querySelector('#nombreApellidos').value;
    let spanError = document.querySelector('#nombreApellidosError');
    // Condicional de comparación 
    if(nombreUsuario == null || nombreUsuario.length == 0 || /^\w+\s\w+\s\w+|\w+\s\w+$/.test(nombreUsuario)){
        spanError.innerHTML = '* Introduzca un nombre, por favor';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    }else{
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        // alert('Formulario enviado correctamente, gracias');
        // document.formulario1.submit();
        return true;
    }
}

// Función para validar el correo
function correoElectronico(){
    let entrada = document.querySelector('#correo');
    let correoUsuario = document.querySelector('#correo').value;
    let spanError = document.querySelector('#correoError');

    if(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})$/.test(correoUsuario)){
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        // alert('Formulario enviado correctamente, gracias');
        // document.formulario1.submit();
        return true;
    }else{
        spanError.innerHTML = '* El correo introducido no es válido';
        spanError.className = 'error'
        entrada.className = 'borderror';
        return false;
    }
}

// Función para validar el número de telefono
function telefono(){
    let entrada = document.querySelector('#telefon');
    let telefonoUsuario = document.querySelector('#telefon').value;
    let spanError = document.querySelector('#telefonError');

    if(telefonoUsuario == null || telefonoUsuario.length == 0 || /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/.test(telefonoUsuario)){
        spanError.innerHTML = '* El telefon introduit no es valid';
        spanError.className = 'error';
        entrada.className = 'borderror';
    }else{
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        // alert('Formulario enviado correctamente, gracias');
        // document.formulario1.submit();
        return true;
    }
}

// Función para validar checkbox
function politica(){
    let politicaPrivacidad = document.querySelector('#condiciones');
    let spanError = document.querySelector('#politicaError');

    if(!politicaPrivacidad.checked){
        spanError.innerHTML = '* Debe aceptar nuestra politica de privacidad';
        spanError.className = 'error'
        return false;
    }else{
        spanError.className = 'noError';
        // alert('Formulario enviado correctamente, gracias');
        // document.formulario1.submit();
        return true;
    }
}

