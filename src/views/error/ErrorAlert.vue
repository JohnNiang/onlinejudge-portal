<template>
  <div class="container" v-if="globalError">
    <alert type="danger" :desc="globalError"></alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['globalError'])
  }
}
</script>

<style lang="scss" scoped>

</style>
