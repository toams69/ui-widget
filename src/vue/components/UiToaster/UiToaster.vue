<template>
    <div class='ui-toaster' :class='position' :style='{width: width + "px"}'>
        <UiToast v-for="toast in toasts" :key='toast.id' :id-toast="toast.id"
            :toast-title="toast['toast-title']" 
            :icon-uri="toast['icon-uri']" 
            :message="toast['message']" 
            :subject="toast['subject']" 
            :top-border-color="toast['top-border-color']" 
            :keyValues="toast['keyValues']" 
            :buttons="toast['buttons']"
        >
        </UiToast>
    </div>
</template>
<script>
import UiToast from '../UiToast'

export default {
  name: 'ui-toaster',
  data () {
    return {
      toasts: []
    }
  },
  components: {
    UiToast
  },
  props: {
    'position': {
      type: String,
      default: 'bottomRight'
    },
    'width': {
      type: Number,
      default: 300
    }
  },
  computed: {
  },
  methods: {
    createGUID: function () {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase()
    },
    createToast (p) {
      var id = this.createGUID()
      if (this.position === 'topRight' || this.position === 'topLeft') {
        this.toasts.unshift({
          'id': id,
          ...p
        })
      } else {
        this.toasts.push({
          'id': id,
          ...p
        })
      }
      this.$emit('ToastCreated', id)
      return id
    },
    clearToast (id) {
      if (!id) {
        return
      }
      var index = null
      for (var i = 0; i < this.toasts.length; i++) {
        if (this.toasts[i].id === id) {
          index = i
          break
        }
      }
      if (index !== null) {
        this.toasts.splice(index, 1)
      } else {
        return false
      }
      this.$emit('ToastCleared', id)
      return true
    },
    clearAllToasts () {
      this.toasts.splice(0, this.toasts.length)
      this.$emit('AllToastCleared')
    }
  }
}
</script>