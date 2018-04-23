<template>
  <transition leave-active-class="animated fadeOut">
    <p v-show="visiable" class="alert align-left" :class="[typeClass, {'animated shake': animated}]" @animationend="animated = false">
      <slot>
        {{desc}}
      </slot>
    </p>
  </transition>
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
    }
  },
  data() {
    return {
      visiable: true,
      animated: true
    }
  },
  computed: {
    typeClass() {
      return `alert-${this.type}`
    }
  },
  methods: {},
  watch: {
    desc(newValue, oldValue) {
      this.animated = true
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
