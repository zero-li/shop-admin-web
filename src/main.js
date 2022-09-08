import {
    createApp
} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'


import App from './App.vue'
import router from './router'
import store from './store'

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "./permission"
import "nprogress/nprogress.css"



const app = createApp(App);


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
