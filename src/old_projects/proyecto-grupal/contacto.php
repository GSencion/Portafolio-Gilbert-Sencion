<!-- Contenedor para el formulario -->
<div id="container-form">
    <form action="php/proceso.php" method="post" name="formulario1" id="formulario1">
        <!-- Campo para el nombre -->
        <fieldset id="campo_nombre">
            <label for="nombre" class="etiqueta_entrada">Nombre</label>
            <div class="entrada_campo">
                <input type="text" name="nombre" id="nombre" class="dato_entrada" autocomplete="off">
                <i class="estado_validacion fa-solid fa-circle-xmark fa-lg"></i>
            </div>
            <p class="dato_entrada_error">Introduzca un nombre válido</p>
        </fieldset>

        <!-- Campo para los apellidos -->
        <fieldset id="campo_apellidos">
            <label for="apellidos" class="etiqueta_entrada">Apellidos</label>
            <div class="entrada_campo">
                <input type="text" name="apellidos" id="apellidos" class="dato_entrada" autocomplete="off">
                <i class="estado_validacion fa-solid fa-circle-xmark fa-lg"></i>
            </div>
            <p class="dato_entrada_error">Introduzca unos apellidos válidos</p>
        </fieldset>

        <!-- Campo para el correo electronico -->
        <fieldset id="campo_correo">
            <label for="correo" class="etiqueta_entrada">Correo electrónico</label>
            <div class="entrada_campo">
                <input type="email" name="correo" id="correo" class="dato_entrada" autocomplete="off">
                <i class="estado_validacion fa-solid fa-circle-xmark fa-lg"></i>
            </div>
            <p class="dato_entrada_error">Introduzca un correo electrónico válido</p>
        </fieldset>

        <!-- Campo para el telefono -->
        <fieldset id="campo_telefono">
            <label for="telefono" class="etiqueta_entrada">Teléfono</label>
            <div class="entrada_campo">
                <input type="tel" name="telefono" id="telefono" class="dato_entrada" autocomplete="off">
                <i class="estado_validacion fa-solid fa-circle-xmark fa-lg"></i>
            </div>
            <p class="dato_entrada_error">Introduzca un teléfono válido</p>
        </fieldset>

        <!-- Campo para los Términos y la política de privacidad -->
        <fieldset id="campo_terminos">
            <label for="terminos" class="etiqueta_entrada">
                <input type="checkbox" name="terminos" id="terminos" class="terminos_checkbox">Acepto las condiciones y términos de la <a href="#section-form" id="abrir">Política de Privacidad</a>
            </label>
        </fieldset>

        <!-- Contenedor para la ventana modal -->
        <div class="modal oculta-modal" id="modal">
            <div class="modal-container">
                <header>
                    <h2>Política de privacidad</h2>
                    <i class="fa-solid fa-square-xmark" id="cerrar"></i>
                </header>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente id est pariatur cupiditate ipsam velit cum, delectus dicta, esse possimus, recusandae a praesentium autem unde error optio impedit in non.</p>
                </div>
                <footer>
                    <h3>Confección y Publicación de Páginas Web</h3>
                </footer>
            </div>
        </div>

        <!-- Mensaje de error -->
        <div class="mensaje_error" id="mensaje_error">
            <p><i class="fa-solid fa-triangle-exclamation"></i>&nbsp;<b>Revise los datos introducidos</b></p>
        </div>

        <!-- Boton de enviar y mensaje de exito -->
        <div class="campo_btn_enviar">
            <input type="submit" value="Enviar Formulario" class="btn_envio">
            <p class="mensaje_exito" id="mensaje_exito">MENSAJE ENVIADO CON ÉXITO</p>
        </div>
    </form>
</div>