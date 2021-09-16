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

// font awesome core
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

// font awesoome solid icons
import {
  faHome,
  faUserTie,
  faCode,
  faEnvelopeSquare,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons"

//font awesome brands icon
import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
  faYoutubeSquare,
  faWhatsappSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

//font awesome regular icons
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

//font awesome library
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
  faYoutubeSquare,
  faWhatsappSquare,
  faLinkedin,
  faHome,
  faUserTie,
  faCode,
  faEnvelopeSquare,
  faExternalLinkSquareAlt,
  faEnvelope
)

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
