<template>
  <div class="modal-mask" v-if="show">
    <div class="modal">
      <div class="modal-head">
        <div class="modal-title">
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
</template>

<script>
import { mapMutations } from 'vuex'
import * as type from '../../store/mutation-type'

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
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
  methods: {
    ...mapMutations({
      togleAuthShow: type.TOGLE_AUTH_PAGE
    }),
    handleCloseClick() {
      this.$emit('on-close')
      this.togleAuthShow()
    },
    handleOkClick() {
      this.$emit('on-ok')
      this.togleAuthShow()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
}
</style>
