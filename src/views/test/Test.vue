<template>
  <div>
    <div v-for="(item, index) in arrayForShow" :key="index" @click="check(index)">
      <span>
        test {{item.checked}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: []
    }
  },
  computed: {
    arrayForShow() {
      return this.array.map(item => {
        return item
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.array = [
        {
          checked1: false
        },
        {
          checked1: false
        },
        {
          checked1: false
        }
      ]
      // this.array.push({
      //   checked: false
      // })
      // this.array.push({
      //   checked: false
      // })
      // this.array.push({
      //   checked: false
      // })
    }, 2000)
  },
  methods: {
    check(index) {
      console.log('check')
      this.array.forEach(item => {
        item.checked = false
      })
      this.array[index].checked = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
