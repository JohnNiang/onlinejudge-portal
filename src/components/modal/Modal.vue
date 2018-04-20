<template>
  <div class="modal-mask">
    <div class="modal">
      <div class="modal-head">
        <slot name="title" class="modal-title"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <button class="button-warning">Cancel</button>
        <button class="button-primary">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style lang="scss" scoped>

</style>
