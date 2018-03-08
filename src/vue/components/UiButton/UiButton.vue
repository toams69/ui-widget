<template>
  <div class="ui-button" @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UiButton',
  data () {
    return {}
  }
}
</script>
