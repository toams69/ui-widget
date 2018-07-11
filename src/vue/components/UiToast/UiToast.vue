<template>
  <transition name="fade">
    <div class='ui-toast'>
      <div class='top-border' :style="{background: topBorderColor}"></div>
      <div class='header'>
        <img v-if='iconUri' :src='iconUri' />
        <h2>{{ toastTitle }}</h2>
      </div>
      <div class='content'>
        <table class='key-values-area'>
          <tr v-for="(value, key) in keyValues" v-bind:key='`key-${key}`'>
            <td class="label">{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </table>
        <div class='subject'>{{subject}}</div>
        <div class='message'>{{message}}</div>
      </div>
      <div class='buttons'>
        <button v-for="(button, index) in buttons" :class='"ui-button " + button.style' :title='button.displayName' v-on:click='defaultButtonCallback(button)' v-bind:key='`button-${index}`'>
          {{button.displayName}}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
const createGUID = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase()
}
export default {
  name: 'ui-toast',
  data () {
    return {
    }
  },
  props: {
    'buttons': {
      type: Array,
      default: function () {
        return [
          {
            displayName: 'Dismiss',
            style: 'secondary',
            callback: function () {
              console.log('Default Dismiss clicked')
            }
          },
          {
            displayName: 'Show',
            style: 'primary',
            callback: function () {
              console.log('Default Show clicked')
            }
          }
        ]
      }
    },
    'idToast': {
      type: String,
      default: createGUID()
    },
    'topBorderColor': {
      type: String,
      default: 'transparent'
    },
    // The keyvalues of the toast
    'message': {
      type: String
    },
    // The keyvalues of the toast
    'keyValues': {
      type: Object,
      default: function () {
        return {}
      }
    },
    // The subject of the toast
    'subject': {
      type: String
    },
    // The title of the toast
    'toastTitle': {
      type: String
    },
    'iconUri': {
      type: String
    }
  },
  methods: {
    defaultButtonCallback (button) {
      if (button.callback) {
        button.callback(this.idToast, this)
      } else {
        console.error('no Callback define for this button')
      }
      this.$emit('ButtonClicked', button)
    }
  }
}
</script>