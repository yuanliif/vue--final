import { createApp } from 'vue'
import 'bootstrap'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

const app = createApp(App)

app.use(store)
app.use(VueAxios, Axios)
app.use(router)
app.mount('#app')
