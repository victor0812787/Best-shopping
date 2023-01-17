import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../pages/MyHome.vue';
import MyAbout from '../pages/MyAbout.vue';

const routes = [
  {path: '/', component:MyHome},
  {path: '/about', component:MyAbout},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
