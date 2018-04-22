<template>
  <pagination layout="total, prev, pager, next" :total="total" :page-size="rpp" :current-page="page" @size-change="handleSizeChange" @current-change="handleCurrentPageChange"></pagination>
</template>

<script>
import { Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/pagination.css'

export default {
  components: {
    Pagination
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 0
    },
    rpp: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handleSizeChange(rpp) {
      this.$emit('size-change', rpp)
    },
    handleCurrentPageChange(currentPage) {
      this.$emit('current-change', currentPage)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
