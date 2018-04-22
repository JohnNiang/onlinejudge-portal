<template>
  <p v-show="show" class="alert align-left" :class="[typeClass, shakeAnimation]">
    <slot>
      {{desc}}
    </slot>
  </p>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    desc: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeClass() {
      return `alert-${this.type}`
    },
    shakeAnimation() {
      return `animated shake`
    }
  },
  watch: {
    show: function(newValue, oldValue) {
      if (newValue) {
        // add animated shake
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.close_button {
  position: relative;
  top: -10px;
  right: 0;
  float: right;
}
</style>
