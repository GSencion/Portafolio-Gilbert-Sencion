// Almacenamos en una constante el formulario entero para su posterior envio
const formulario = document.querySelector('#formulario1');

// Crear un objeto y almacenamos las expresiones regulares para validar los campos
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-ZÀ-ÿ0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]{2,6}$/,
    telefono: /^([0-9]{3}[\s-]?){3}$/
}

// Estado inicioal de los campos de validación
const campos = {
    nombre: false,
    apellidos: false,
    correo: false,
    telefono: false
}

// Almacenar en un array todos los campos de tentrada
const inputs = document.querySelectorAll('#formulario1 input');

// Evaluar la entrada de datos
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

// Funcion para validar los campos del formulario
function validarFormulario(e){
    switch (e.target.name){
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case 'apellidos':
            validarCampo(expresiones.nombre, e.target, 'apellidos');
            break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
}

function validarCampo(expresion, input, campo){
    if (expresion.test(input.value)){
        document.querySelector(`#campo_${campo}`).classList.remove('campo_incorrecto');
        document.querySelector(`#campo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#campo_${campo}`).classList.add('campo_correcto');
        document.querySelector(`#campo_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#campo_${campo} .dato_entrada_error`).classList.remove('dato_entrada_error_activo');
        campos[campo] = true;
    }else{
        document.querySelector(`#campo_${campo}`).classList.add('campo_incorrecto');
        document.querySelector(`#campo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#campo_${campo}`).classList.remove('campo_correcto');
        document.querySelector(`#campo_${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#campo_${campo} .dato_entrada_error`).classList.add('dato_entrada_error_activo');
        campos[campo] = false;
    }
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const terminos = document.querySelector('#terminos');
    if (campos.nombre && campos.apellidos && campos.correo && campos.telefono && terminos.checked){
        formulario.submit();
    }else{
        document.querySelector('#mensaje_error').classList.add('mensaje_error_activo');
    }
});