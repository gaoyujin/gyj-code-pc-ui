import '/@/lib/spc.scss'
import '/@/assets/css/index.scss'
import 'github-markdown-css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
