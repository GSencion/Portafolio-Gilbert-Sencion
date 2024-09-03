<script>
export default{
  data(){
    return{
      isActive: false,
      xmark: false
    };
  },
  methods:{
    toggleMenu(){
      this.isActive = !this.isActive;
      this.xmark = !this.xmark;
    },
    closeMenu(){
      if(this.isActive !== false || this.xmark !== false){
        this.isActive = false;
        this.xmark = false;
      }
    },
  },
}
</script>
<template>
    <header>
      <div class="title">
        <h1>Gilbert Sencion Perez</h1>
        <!-- <h2>Desarrollador web</h2> -->
        <span class="nav-bar" @click="toggleMenu">
            <i class="fa-solid fa-bars" id="cruz" :class="{'fa-xmark' : xmark}"></i>
        </span>
      </div>
      <nav class="main-nav">
            <ul class="menu" :class="{ 'mostrar' : isActive === true, 'ocultar' : isActive === false}" id="menu">
                <li>
                  <router-link to="/" :class="{ active: $route.path === '/'}" @click="closeMenu">Inicio</router-link>
                </li>
                <li>
                  <router-link to="/conocimientos" :class="{ active: $route.path === '/conocimientos'}" @click="closeMenu">Conocimientos</router-link>
                </li>
                <li>
                  <router-link to="/proyectos" :class="{ active: $route.path === '/proyectos'}" @click="closeMenu">Proyectos</router-link>
                </li>
                <li>
                  <router-link to="/contacto" :class="{ active: $route.path === '/contacto'}" @click="closeMenu">Contacto</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer>
      <div>
        <p>Puedes encontrarme en <span lang="en">LinkedIn</span> <a href="https://www.linkedin.com/in/gilbert-sencion-perez-b4a908247" target="_blank" title="Mi LinkedIn"><i class="fa-brands fa-linkedin" id="linkedin"></i></a>
        </p>

      </div>
      <div>
        <p>La atribución de derechos de autor se encuentra en el footer de su respectiva página</p>
      </div>        
    </footer>
</template>

<style>
@import './assets/styles/styles.scss';
/* Estilos generales */
body{
  max-width: 100vw;
  font-family: var(--font-family-text);
}

#app{
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

header{
  flex: 0 0 auto;
  background-color: var(--color-complementary-primary);
  color: var(--font-color-secondary);
}

main{
  flex:1 0 auto;
}

h1, h2, h3{
  font-family: var(--font-family-headeing);
}

/* Header */
header div:first-child{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
}

.title{
  padding: 1rem;
}

nav ul{
  padding: 0rem 1rem;
}

#cruz{
  transition: all 0.5s;
}

nav ul li{
  padding: 1rem 0rem;
}

ul a{
  text-decoration: none;
  color: var(--font-color-primary);
  padding: 0.5rem;
}

ul a:hover{
  color: var(--font-color-primary);
  background-color: var(--font-color-secondary);
}

header nav ul{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nav-bar{
  z-index: 2;
}

.menu{
  list-style: none;
  background: var(--color-primary);
  position: absolute;
  z-index: 1;
  margin-left: 0;
  width: 100%;
  height:100vh;
  top: 0rem;
  align-items: center;
  transition: clip-path 1.5s ease;
}

.ocultar{
  clip-path: circle(0% at 100% 0%);
}

.mostrar{
  clip-path: circle(150% at 100% 0%);
}

.active{
  border-top: 1px solid var(--font-color-secondary);
  border-bottom: 1px solid var(--font-color-secondary);
}

/* Main */
main section{
  margin: 1rem;
}

main section p, main section h2, main section h3{
  padding: 1rem;
}

footer{
  flex: 0 0 auto;
  display: grid;
  grid-template-rows: repeat(2,1fr);
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: var(--color-complementary-primary);
  color: var(--font-color-secondary);
}

#linkedin{
  font-size: 1.5rem;
  margin: 0.5rem;
  color: var(--font-color-secondary);
}

#linkedin:hover{
  background-color: var(--font-color-primary);
}

/* Media queries */
@media only screen and (min-width: 375px){

}

@media only screen and (min-width: 425px){

}

@media only screen and (min-width: 768px){

}

@media only screen and (min-width: 1024px){
  header{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
  }
  main{
        max-width: 90vw;
        margin: auto;
  }
  footer{
        grid-template-rows: repeat(1,1fr);
        grid-template-columns: repeat(2,1fr);
  }
  .menu{
        background-color: unset;
        flex-direction: row;
        margin-left: 0;
        height: auto;
        width: auto;
        position: inherit;
        gap: 1rem;
  }
  main section{
        margin: 2rem;
  }
  ul a{
        color: var(--font-color-secondary);
  }
  .ocultar{
        clip-path: inherit;
  }
  #cruz{
      display: none;
  }
}

@media only screen and (min-width: 1440px){
    main{
        max-width: 70vw;
        margin: auto;
    }
}

@media only screen and (min-width: 2560px){
    body{
        font-size: 1.7rem;
    }
}
</style>