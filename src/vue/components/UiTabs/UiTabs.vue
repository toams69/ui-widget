<template>
  <ul class="ui-tabs">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'UiTabs',
  props: {
    'ui-sync-route': Boolean
  },
  data () {
    return {}
  },
  computed: {
    tabs () {
      return this.$el.children
    }
  },
  watch: {
    '$route'(to, from) {
      for (var j = 0; j < this.tabs.length; j++) {
        if (this.tabs[j].getAttribute('to') === to.path) {
          this.tabs[j].setAttribute('active', '')
        } else {
          this.tabs[j].removeAttribute('active')
        }
      }
    }
  },
  methods: {
    setActiveTab (e) {
      for (var j = 0; j < this.tabs.length; j++) {
        this.tabs[j].removeAttribute('active')
      }
      e.target.parentNode.setAttribute('active', '')
    },
    setRoute (e) {
      this.$router.push(e.target.parentNode.getAttribute('to'))
    }
  },
  mounted () {
    var vm = this
    if (!this.uiSyncRoute) {
      for (var i = 0; i < vm.tabs.length; i++) {
        vm.tabs[i].firstChild.addEventListener('click', vm.setActiveTab, true)
      }
    } else {
      for (var j = 0; j < vm.tabs.length; j++) {
        vm.tabs[j].firstChild.addEventListener('click', vm.setRoute, true)
      }
    }
  },
  beforeDestroy () {
    var vm = this
    if (!this.uiSyncRoute) {
      for (var i = 0; i < vm.tabs.length; i++) {
        vm.tabs[i].firstChild.removeEventListener('click', vm.setActiveTab, true)
      }
    } else {
      for (var j = 0; j < vm.tabs.length; j++) {
        vm.tabs[j].firstChild.removeEventListener('click', vm.setRoute, true)
      }
    }
  }
}
</script>
