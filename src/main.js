import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router/router'
import store from './stores/store'

import './assets/index.css'
import 'flowbite';
import 'boxicons'


const app = createApp(App)

app.use(createPinia())
app.use(router)
createApp(App).use(Vuex)


app.use(store).mount('#app')
