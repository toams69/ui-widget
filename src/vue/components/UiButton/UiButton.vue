<template>
  <div class="ui-button" @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ui-button',
  data () {
    return {}
  }
}
</script>
