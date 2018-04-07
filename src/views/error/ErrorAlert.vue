<template>
  <el-alert v-if="globalError" :title="globalError" type="error" show-icon>
  </el-alert>
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
