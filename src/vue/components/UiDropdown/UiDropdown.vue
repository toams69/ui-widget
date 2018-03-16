<template>
  <ul v-show="uiActive" v-click-outside="close" class="ui-dropdown">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'UiDropdown',
  data () {
    return {}
  },
  props: {
    uiActive: Boolean
  },
  methods: {
    close () {
      if (this.uiActive) {
        this.$emit('update:uiActive', false)
      }
    }
  }
}
</script>
