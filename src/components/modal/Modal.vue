<template>
  <transition name="fade">
    <div class="modal-mask" v-show="visiable">
      <div class="modal">
        <div class="modal-head">
          <div class="modal-title">
            <font-awesome-icon class="close_icon" :icon="['far', 'times-circle']" @click="handleCloseClick" />
            <slot name="title"></slot>
          </div>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    okayText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data() {
    return {
      visiable: true
    }
  },
  mounted() {
    this.visiable = this.show
  },
  methods: {
    handleCloseClick() {
      this.visiable = false
      this.$emit('on-close')
    }
  },
  watch: {
    show: function(newValue, oldValue) {
      this.visiable = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
}

.close_icon {
  float: right;
  position: relative;
  top: 5px;
  right: -10px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
