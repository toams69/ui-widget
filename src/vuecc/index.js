import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'

import * as Components from '../vue/components'
// import * as Directives from '../vue/directives'

Vue.use(vueCustomElement)

// for (var directive in Directives) {
//   Vue.directive(Directives[directive].name, Directives[directive].options)
// }
for (var component in Components) {
  if (Array.isArray(Components[component])) {
    for (var i = 0; i < Components[component].length; i++) {
      Vue.customElement(Components[component][i].name, Components[component][i])
    }
  } else {
    Vue.customElement(Components[component].name, Components[component])
  }
}
