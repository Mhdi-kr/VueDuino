import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'
import '@/assets/stylesheet/quicksand.css'
import 'bulma-extensions/bulma-pageloader/dist/css/bulma-pageloader.min.css'
import 'bulma-extensions/bulma-checkradio/dist/css/bulma-checkradio.min.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
