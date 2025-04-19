import '@/styles/element-plus.scss'
import '@/styles/index.css'

import ElementPlus from 'element-plus'
import {type Component, createApp} from 'vue'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {type App} from "@vue/runtime-core";

const pinia = createPinia()
const namespace = 'lf'

export function createExtensionApp(bind: HTMLElement|string, component: Component, props?: Record<string, unknown>, callback?:(app:App)=>void): App {
    const app = createApp(component, props)
    app.use(ElementPlus, {namespace: namespace, locale: zhCn})
    app.use(pinia)
    if (callback) {
        callback(app)
    }
    app.mount(bind)
    return app
}
