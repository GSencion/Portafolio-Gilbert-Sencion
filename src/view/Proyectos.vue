<template>
        <section id="proyectos">
            <h2>Galeria de proyectos</h2>
                <p>En esta sección puedes ver una galeria de imagenes,desplegada a traves de un <span lang="en">scroll-snap</span> horizontal, que te llevara a las páginas webs que he diseñado.</p>
            <div id="galeria">
                <figure>
                        <img src="../assets/img/keiyan-moda.png" alt="Página de Keiyan Moda">
                        <figcaption>
                            <a href="../old_projects/keiyan-moda/index.html" target="_blank">
                                <h2>Keiyan Moda</h2>
                            </a>
                        </figcaption>
                        <p>Kieyan Moda es un proyecto final del curso de Confección y publicación de Páginas Web que destaca por su maquetación en HTML y CSS, además de incluir scripts para un menú hamburguesa y validación de formularios del lado del cliente. La versión actual ha sido adaptada para <span lang="en">Github</span>, mientras que la versión anterior, desarrollada en PHP, incluía validación del lado del servidor.</p>
                </figure>
                <figure>
                        <img src="../assets/img/projecte-sensei.png" alt="Página de Projecte Sensei">
                        <figcaption>
                            <a href="../old_projects/projecte_sensei/index.html" target="_blank">
                                <h2><span lang="ca">Projecte Sensei</span></h2>
                            </a>
                        </figcaption>
                        <p><span lang="ca">Projecte</span> <span lang="ja">sensei</span> es un prototipo que realice durante las practicas del curso de Confección y publicación de Páginas Web. La finalidad de la web era la de ofrecer información a los profesores que quisieran mejorar sus habilidades y conocimientos a traves de una mentoria con otros colegas mas experimentados. Tanto el header como el footer fue realizado con php debido a las especificaciones de <span lang="en">Github</span>.</p>
                </figure>
                <figure>
                        <img src="../assets/img/proyecto-grupal.png" alt="Practica de proyecto grupal">
                        <figcaption>
                            <a href="../old_projects/proyecto-grupal/index.html" target="_blank">
                                <h2>Proyecto Grupal</h2>
                            </a>
                        </figcaption>
                        <p>Esta web fue hecha para promocionar el curso de Confección y publicación de páginas web, utilizamos <span lang="en">Bootstrap</span> para su confección y php para el formulario de contacto, al ser una <span lang="en">landing page</span> el objetivo del formulario es el de obtener los datos de los interesados y enviarlos a un correo electronico. Como en el caso de las anteriores esta se vio modificada para poder subir la web a <span lang="en">Github</span>.</p>
                </figure>
                <figure>
                        <img src="../assets/img/pere-bosch.png" alt="Página web de Pere Bosch">
                        <figcaption>
                            <a href="../old_projects/pere-bosch/index.html" target="_blank">
                                <h2>Pere Bosch</h2>
                            </a>
                        </figcaption>
                        <p>Esta web fue un examen del <abbr title="Certificado profesional">cp</abbr> de Confección de páginas web, para ser concretos fue el examen final del modulo 2 el cual esta dedicado a <span lang="en">Javascript</span>.El objetivo de esta web es la de modificar la web a traves del <span lang="en"><abbr title="Document object mode">DOM</abbr></span></p>
                </figure>
            </div>
        </section>
</template>
<script>

</script>
<style scoped>
    /* Proyectos */
    #galeria{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        width: 85vw;
        height: auto;
        overflow: auto;
        margin: auto;
        gap: 1rem;
        padding: 1.5rem 0rem;
        scroll-snap-type: x mandatory;
    }

    /* Estilo para cada elemento de la galería */
    #galeria figure {
        scroll-snap-align: center;
        padding: 1rem 0rem;
        margin: auto;
        width: 85vw;
    }

    #galeria figure img{
        width: 100%;
    }

/* Media queries */
@media only screen and (min-width: 375px){

}

@media only screen and (min-width: 425px){

}

@media only screen and (min-width: 768px){
}

@media only screen and (min-width: 1024px){
    #galeria, #galeria figure{
        width: 60vw;
    }
}

@media only screen and (min-width: 1440px){
}

@media only screen and (min-width: 2560px){

}
</style>