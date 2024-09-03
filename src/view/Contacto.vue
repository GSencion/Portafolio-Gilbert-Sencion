<template>
        <section id="contacto">
            <h2>Contacta conmigo</h2>
            <!-- <p>Si deseas ponerte en contacto conmigo aquí tienes el siguiente formulario</p> -->
            <form action="https://formspree.io/f/xpzvpvej" method="post" name="formulario" id="formulario" @submit.prevent="validarForm">
                <!-- Campo para el nombre -->
                <fieldset>
                    <fieldset id="campo_nombre" :class="{'campo_incorrecto' : errores.nombre ===  true, 'campo_correcto' : errores.nombre === false}">
                        <label for="nombre" class="etiqueta_entrada">Nombre</label>
                        <div class="entrada_campo">
                            <input type="text" name="nombre" id="nombre" class="dato_entrada" autocomplete="off" v-model="nombre" @input="validarCampoNombre">
                            <i class="estado_validacion fa-solid fa-lg" :class="{'fa-circle-xmark' : errores.nombre,
                                'fa-circle-check': !errores.nombre }"></i>
                        </div>
                        <p class="dato_entrada_error" :class="{'dato_entrada_error_activo' : errores.nombre === true}">Introduzca un nombre válido</p>
                    </fieldset>

                    <!-- Campo para el correo -->
                    <fieldset id="campo_correo" :class="{'campo_incorrecto' : errores.correo ===  true, 'campo_correcto' : errores.correo === false}">
                        <label for="correo" class="etiqueta_entrada">Correo</label>
                        <div class="entrada_campo">
                            <input type="text" name="correo" id="correo" class="dato_entrada" autocomplete="off" v-model="correo" @input="validarCampoCorreo">
                            <i class="estado_validacion fa-solid fa-lg" :class="{'fa-circle-xmark' : errores.correo,
                                'fa-circle-check': !errores.correo }"></i>
                        </div>
                        <p class="dato_entrada_error" :class="{'dato_entrada_error_activo' : errores.correo === true}">Introduzca un correo electronico válido</p>
                    </fieldset>    

                    <!-- Campo para el textarea -->
                    <fieldset id="campo_mensaje">
                        <label for="mensaje" class="etiqueta_entrada">Comentario</label>
                            <div class="entrada_campo">
                                <textarea name="mensaje" id="mensaje" maxlength="300" class="dato_entrada" v-model="mensaje"></textarea>
                                <i class="estado_validacion fa-solid fa-circle-xmark fa-lg"></i>
                            </div>
                    </fieldset>

                    <!-- Campo para los Términos y Politica de Privacidad -->
                    <fieldset id="campo_terminos">
                        <label for="terminos" class="etiqueta_entrada">
                            <input type="checkbox" name="terminos" id="terminos" class="terminos_checkbox" v-model="terminos" @change="validarCampoTerminos">Acepto las <a href="https://www.privacypolicies.com/live/d6ebe4f6-c977-4bf2-ba9b-6e9577316288" target="_blank" >condiciones y términos de la Politica de Privacidad</a>
                            <i class="estado_validacion fa-solid fa-lg" :class="{'fa-circle-xmark' : errores.terminos,'fa-circle-check': !errores.terminos }"></i>
                        </label>
                        <p class="dato_entrada_error" :class="{'dato_entrada_error_activo' : errores.terminos === true}">Debe acceptar la politica de privacidad antes de enviar el formulario</p>
                    </fieldset>

                    <!-- Mensaje de error -->
                    <div class="mensaje_error" id="mensaje_error">
                        <p><i class="fa-solid fa-triangle-exclamation"></i>&nbsp;<b>Revise los datos introducidos</b></p>
                    </div>

                    <!-- Campo oculto para evitar spam -->
                    <input type="text" name="_gotcha" class="spam">

                    <!-- Campo oculto para especificar el asunto del correo electrónico -->
                    <input type="text" name="_subject" value="Nuevo mensaje del formulario de contacto" class="spam">

                    <!-- Botón de enviar y mensaje de éxito -->
                    <div class="campo_btn_enviar">
                        <input type="submit" value="Enviar Formulario" class="btn_envio">
                        <p class="mensaje_exito" id="mensaje_exito">MENSAJE ENVIADO CON ÉXITO</p>
                    </div>
                </fieldset>
            </form>
        </section>
</template>
<script>
    export default{
        data(){
            return{
                nombre:'',
                correo:'',
                mensaje:'',
                terminos:false,
                expresiones: {
                    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]{2,6}$/,
                },
                errores: {
                    nombre: null,
                    correo: null,
                    terminos: null,
                },
            }
        },
        methods:{
            validarForm(){
                this.validarCampoNombre();
                this.validarCampoCorreo();
                this.validarCampoTerminos();
                if(this.errores.nombre === false && this.errores.correo === false && this.errores.terminos === false){
                    const formulario = document.getElementById('formulario');
                    formulario.submit();
                }
            },
            validarCampoNombre(){
                if(!this.expresiones.nombre.test(this.nombre) || this.nombre === null){
                    this.errores.nombre = true;
                }else{
                    this.errores.nombre = false;
                }
            },
            validarCampoCorreo(){
                if(!this.expresiones.correo.test(this.correo) || this.correo === null){
                    this.errores.correo = true;
                }else{
                    this.errores.correo = false;
                }
            },
            validarCampoTerminos(){
                if(this.terminos === false){
                    this.errores.terminos = true;
                }else{  
                    this.errores.terminos = false;
                }
            }
        }
    }
</script>
<style scoped>
#contacto form{
    max-width: 100%;
    margin:auto;
}
#contacto form fieldset{
    border: none;
}
.entrada_campo{
    position: relative;
}

.dato_entrada{
    width: 100%;
    border: 3px solid var(--color-primary);
    border-radius: 5px;
    /* height: 45px; */
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
}

.dato_entrada>textarea{
    height: 200px;
}

.dato_entrada:focus{
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 3px 0px 30px var(--color-shadow);
}

.dato_entrada_error{
    font-size: 0.8rem;
    margin: 10px 0;
    display: none;
}

.dato_entrada_error_activo{
    display: block;
}

.estado_validacion{
    position: absolute;
    right: 10px;
    bottom: 50%;
    font-size: 2rem;
    z-index: 1;
    opacity: 0;
}

.terminos_checkbox{
    margin-right: 10px;
}

#campo_terminos, .mensaje_error, .campo_btn_enviar{
    grid-column: span 2;
}

.mensaje_error{
    height: 45px;
    line-height: 45px;
    background-color: var(--color-warning);
    padding: 0 15px;
    border-radius: 5px;
    display: none;
}

.mensaje_error_activo{
    display: block;
}

.campo_btn_enviar{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

.btn_envio{
    height: 45px;
    line-height: 45px;
    width: 70%;
    background-color: var(--color-primary);
    color: var(--font-color-secondary);
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color ease 1s;
    font-size: var(--font-size-primary);
}

.btn_envio:hover{
    background-color: var(--color-complementary-secondary);
    color: var(--font-color-primary);
    border: 1px solid #fff;
}

.mensaje_exito{
    font-size: 2rem;
    color: var(--color-send);
    display: none;
}

.mensaje_exito_activo{
    display: block;
}

.campo_correcto .estado_validacion{
    color: var(--color-send);
    opacity: 1;
}

.campo_incorrecto .etiqueta_entrada{
    color:var(--color-warning);
}

.campo_incorrecto .estado_validacion{
    color: var(--color-warning);
    opacity: 1;
}

.campo_incorrecto .dato_entrada{
    border: 3px solid var(--color-warning);
}

.spam{
    display: none;
}

/* Media queries */
@media only screen and (min-width: 375px){

}

@media only screen and (min-width: 425px){

}

@media only screen and (min-width: 768px){
}

@media only screen and (min-width: 1024px){
    #contacto form{
        margin:3rem auto;
        max-width: 100%;
    }
}

@media only screen and (min-width: 1440px){
}

@media only screen and (min-width: 2560px){

}
</style>