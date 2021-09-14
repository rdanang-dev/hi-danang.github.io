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
// import "tailwindcss/tailwind.css"
import "@/assets/css/index.css"

//vue typer
import VueTyperPlugin from "vue-typer"
Vue.use(VueTyperPlugin)

//vue scrollto
import VueScrollTo from "vue-scrollto"
Vue.use(VueScrollTo)

// vue font awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
// import { faSquare } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
library.add(faFacebookSquare, faInstagramSquare, faGithubSquare)

//vue toast
import Toasted from "vue-toasted"
let options = {
  position: "bottom-right",
  duration: "1000",
}
Vue.use(Toasted, options)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
