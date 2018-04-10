<template>
  <div class="ui-icon">
    <img v-if="src" :src="src" :class="[rotate ? 'mirrored' : '']">
    <span v-else :class="[icon, rotate ? 'mirrored' : '']"></span>
  </div>
</template>

<script>
export default {
  name: 'ui-icon',
  props: {
    src: String,
    icon: String,
    rotate: Boolean
  },
  data () {
    return {}
  }
}
</script>
