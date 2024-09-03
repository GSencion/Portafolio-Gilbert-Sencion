// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './view/Inicio.vue';
import Conocimientos from './view/Conocimientos.vue';
import Proyectos from './view/Proyectos.vue';
import Contacto from './view/Contacto.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/Conocimientos', component: Conocimientos},
  { path: '/Proyectos', component: Proyectos},
  { path: '/Contacto', component: Contacto}
];

const router = createRouter({
  history: createWebHistory('#'),
  routes,
});

export default router;
