import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

createApp(app).use(createPinia())
createApp(App).mount('#app')
