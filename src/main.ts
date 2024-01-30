import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
