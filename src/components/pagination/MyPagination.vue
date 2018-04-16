<template>
  <pagination :total="100"></pagination>
</template>

<script>
import { Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/pagination.css'

export default {
  components: {
    Pagination
  }
}
</script>

<style lang="scss" scoped>

</style>
