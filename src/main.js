import Vue from "vue"
import App from "./App.vue"

// Axios
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)

//router
import router from "./router"

//vuex
import store from "./store"

//tailwind
import "tailwindcss/tailwind.css"

//vue typer
import VueTyperPlugin from "vue-typer"
Vue.use(VueTyperPlugin)

//vue scrollto
import VueScrollTo from "vue-scrollto"
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
