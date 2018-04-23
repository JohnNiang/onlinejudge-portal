<template>
  <div class="container" v-if="globalError">
    <alert type="danger" :desc="globalError"></alert>
  </div>
</template>

<script>
import Alert from '@/components/alert/Alert'
import { mapGetters } from 'vuex'
export default {
  components: {
    Alert
  },
  computed: {
    ...mapGetters(['globalError'])
  }
}
</script>

<style lang="scss" scoped>

</style>
