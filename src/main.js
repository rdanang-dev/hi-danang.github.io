import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "tailwindcss/tailwind.css"
import VueTyperPlugin from "vue-typer"
import VueScrollTo from "vue-scrollto"

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
