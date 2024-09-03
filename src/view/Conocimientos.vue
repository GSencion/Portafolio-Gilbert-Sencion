<template>
    <section id="conocimientos">
            <h2>Conocimientos y habilidades</h2>
            <p>Aparte de cursar el grado en Multimedia en la <abbr title="Universitat Oberta de Catalunya" lang="ca">UOC</abbr>, en 2023 curse el certificado de profesionalidad de confección y publicacción de páginas web en el Cifo La violeta, el cual me acredita como <span lang="en">front end developer</span>, especificando las habilidades obtenidas son las siguientes:</p>
                <ul>
                    <li>
                        HTML5 
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        CSS3
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Javascript
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Bootstrap
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Wordpress
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Php
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Vue.js
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Illustrator
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Photoshop
                        <ul>
                            <li>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </li>
                </ul>
        </section>
</template>
<script>

</script>
<style scoped>
/* Conocimientos view */
#conocimientos{
    min-height: 80vh;
    color: var(--font-color-primary);
}

#conocimientos h2, #conocimientos p{
    padding: 0.5rem;
}
#conocimientos ul{
    list-style: none;
}
#conocimientos>ul>li{
    padding: 2rem;
}
#conocimientos>ul{
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(5,1fr);
    grid-template-columns: repeat(2,1fr);
    grid-auto-flow: column;
    padding: 1rem 0rem;
}
#conocimientos>ul>li:nth-child(odd){
    background-color: var(--color-complementary-primary);
    color: var(--font-color-secondary);
}

#conocimientos>ul>li:nth-child(even){
    background-color: var(--color-complementary-secondary);
    color: var(--font-color-primary);
}

#conocimientos > ul > li >ul{
    font-size: 0.8rem;
}

/* Media queries */
@media only screen and (min-width: 375px){

}

@media only screen and (min-width: 425px){

}

@media only screen and (min-width: 768px){
    #conocimientos>ul>li:nth-child(odd), #conocimientos>ul>li:nth-child(even){
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    #contacto form{
        max-width: 70%;
    }
}

@media only screen and (min-width: 1024px){

}

@media only screen and (min-width: 1440px){

}

@media only screen and (min-width: 2560px){

}
</style>