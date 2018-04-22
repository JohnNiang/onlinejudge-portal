<template>
  <div class="progress-bar">
    <span class="progress-bar-blue" :style="{width: percentageValue}"></span>
    <span class="value">{{percentageValue}}</span>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    percentage: Number,
    required: true
  },
  computed: {
    percentageValue() {
      if (this.percentage) {
        if (this.percentage < 0) {
          return '0%'
        } else if (this.percentage > 100) {
          return '100%'
        } else {
          return this.percentage + '%'
        }
      }
      return '0%'
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  .value {
    margin-left: 5px;
  }
}
</style>
