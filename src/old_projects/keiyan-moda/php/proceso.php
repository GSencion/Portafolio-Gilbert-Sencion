<?php 
    // Declaración de variables para la recepción de datos
    $_contador = 0;
    $_nombre = validaDato($_POST['nombre']);
    $_apellidos = validaDato($_POST['apellidos']);
    $_correo = validaDato($_POST['correo']);
    $_telefono = validaDato($_POST['telefono']);
    $_terminos = validaDato($_POST['terminos']);

    print_r($_POST);
    
    // Validación de datos
    function validaDato($_data){
        if(isset($_data) and !empty($_data)){
            return $_data;
        }else{
            $_data = null;
            return $_data;
        }
    }

    // Condicional para enviar el mail
    if($_nombre == null or $_apellidos == null or $_correo == null or $_telefono == null or $_terminos == null){
        $_resultado = 'Los datos introducidos no son válidos, no se ha podido procesar el formulario';
    }else{
        $_resultado = 'Gracias por contactar con nosotros, en breve nos pondremos en contacto con usted';

        $_destinatario = 'gsdmfsencion@gmail.com';
        $_asunto = 'Enviado desde mi sitio web. Formulario de contacto';
        $_contenido = 'Nombre y apellidos:'.$_nombre.' '.$_apellidos."\n". 
        'Correo Electrónico: '.$correo."\n".
        'Teléfono de Contacto: '.$_telefono."\n".
        'Acepta los términos y condiciones: '.$_terminos."\n";

        mail($_destinatario, $_asunto, $_contenido);
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento de Recepción de formulario</title>

    <!-- Font awesome -->
    <script src="https://kit.fontawesome.com/8e561d3dc2.js" crossorigin="anonymous"></script>

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto&display=swap" rel="stylesheet">

    <!-- Mis estilos -->
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <header>
        <?php include('php/header.php');?>
    </header>
    <main>
        <h1>Recogida de datos</h1>
        <h2><?php echo $_resultado; ?></h2>
    </main>
    <footer>
        <?php include('php/footer.php'); ?>
    </footer>

    <!-- Mis scripts -->
    <script src="js/menu-hamburguesa.js"></script>

    
</body>
</html>