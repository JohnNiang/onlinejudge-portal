<template>
  <div class="container" v-if="globalError">
    <p class="alert alert-danger">{{globalError}}</p>
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
