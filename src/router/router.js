import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/MyHome.vue';
import MyAbout from '../views/MyAbout.vue';
import MyServices from '../views/MyServices.vue';

const routes = [
  {path: '/', component:MyHome},
  {path: '/about', component:MyAbout},
  {path: '/services', component:MyServices},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
