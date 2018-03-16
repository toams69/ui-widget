import * as Components from './components'
import Directives from './directives'

function VueWidget (Vue, options) {
  for (var directive in Directives) {
    Vue.directive(Directives[directive].name, Directives[directive].options)
  }
  for (var component in Components) {
    if (Array.isArray(Components[component])) {
      for (var i = 0; i < Components[component].length; i++) {
        Vue.component(Components[component][i].name, Components[component][i])
      }
    } else {
      Vue.component(component, Components[component])
    }
  }
}
export default VueWidget

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWidget)
}
