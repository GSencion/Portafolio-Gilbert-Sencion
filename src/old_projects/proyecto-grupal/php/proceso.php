<?php
    // Declaracion de variables para la recepcion de datos
    $_contador = 0;
    $_nombre = validaDato($_POST['nombre']);
    $_apellidos = validaDato($_POST['apellidos']);
    $_correo = validaDato($_POST['correo']);
    $_telefono = validaDato($_POST['telefono']);
    $_terminos = validaDato($_POST['terminos']);

    // Validación de datos
    function validaDato($_data){
        if (isset($_data) and !empty($_data)){
            return $_data;
        }else{
            $_data = null;
            return $_data;
        }
    }

    // Condicional para enviar el mail
    if ($_nombre == null or $_apellidos == null or $_correo == null or $_telefono == null or $_terminos == null){
        $_resultado = 'Los datos introducidos no son válidos, no se ha podido procesar el formulario';
    }else{
        $_resultado = 'Gracias por contactar con nosotros, en breve nos pondremos en contacto con usted';

        $_destinatario = 'asanjoseabadias@gmail.com';
        $_asunto = 'Enviado desde mi sitio web. Formulario de contacto';
        $_contenido = 'Nombre y apellidos: '.$_nombre.' '.$_apellidos."\n".
        'Correo Electrónico: '.$_correo."\n".
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
    <title>Recepción de Formulario</title>

     <!-- Font awesome -->
     <script src="https://kit.fontawesome.com/f0d7e7403f.js" crossorigin="anonymous"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bona+Nova&family=Cabin&display=swap" rel="stylesheet">

    <!-- Estilos Bootstrap -->
    <link rel="stylesheet" href="../css/bootstrap.css">
    <!-- Mis estilos -->
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header class="contenido">
            <!-- Menú de navegación -->
            <nav class="navbar navbar-expand-lg bg-dark z-3 position-absolute w-100 position-fixed p-3" data-bs-theme="dark">
                <a class="navbar-brand" href="#"><img src="../logos/logo.png" id="logo" alt="logo-principal" class="animacion"></a>
                <button class="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../index.php">Volver a Inicio</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- / .menu de navegación -->

            <!-- Carousel / slider -->
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../img/slider-1.jpg" class="d-block w-100" alt="aula">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="text-bg-light p-3 opacity-75 rounded"><?php echo $_resultado; ?></h3>
                        <p class="text-bg-light p-3 opacity-75 rounded">Iniciate con nosotros en los programas de desarrollo web.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../img/slider-2.jpg" class="d-block w-100" alt="clase">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="text-bg-light p-3 opacity-75 rounded"><?php echo $_resultado; ?></h3>
                        <p class="text-bg-light p-3 opacity-75 rounded">Iniciate con nosotros en los programas de desarrollo web.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../img/slider-3.jpg" class="d-block w-100" alt="aula-reformada">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="text-bg-light p-3 opacity-75 rounded"><?php echo $_resultado; ?></h3>
                        <p class="text-bg-light p-3 opacity-75 rounded">Iniciate con nosotros en los programas de desarrollo web.</p>
                    </div>
                </div>
                </div>
            </div>
        <!-- / .carousel -->
    </header>
    <!-- / .header -->

    <main>
    </main>

    <footer class="bg-dark p-5">
        <p class="text-center text-light">Web desarrollada por Alex San Jose, Dani Sainz-Rozas, Gilbert Sencion, Sara Arnedo para CIFOS La Violeta</p>
    </footer>

    <!-- Scripts de Bootstrap -->
    <script src="../js/bootstrap.bundle.js"></script>
    <!-- Mis Scripts -->
    <script src="../js/myscript.js"></script>
</body>
</html>