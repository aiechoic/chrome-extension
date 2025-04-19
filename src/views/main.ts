import App from './App.vue'
import {createExtensionApp} from "@/app.ts";
import { router } from "./router/main.ts";

createExtensionApp('#app', App, {}, (app) => {
    app.use(router)
})