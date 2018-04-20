<template>
  <div class="modal-mask" v-show="isAuthShow">
    <div class="modal">
      <div class="modal-head">
        <p class="modal-title">Modal Example</p>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa expedita totam aperiam, aliquid, consectetur!</p>
      </div>
      <div class="modal-footer">
        <button class="button-warning">Cancel</button>
        <button class="button-primary">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthShow'])
  }
}
</script>

<style lang="scss" scoped>

</style>
