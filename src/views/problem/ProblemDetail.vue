<template>
  <div class="content_wrapper">
    <h1>{{problem.title}}</h1>
    <hr>
    <span>created: {{problem.createTime | timeAgo}}</span>
    <span>updated: {{problem.updateTime | timeAgo}}</span>
    <hr>
    <span>time: {{problem.timeLimit | toThousands}} ms</span>
    <span>memory: {{problem.memoryLimit | toThousands}} kb</span>
    <hr>
    <div class="description" v-html="problem.description"></div>
  </div>
</template>

<script>
import * as problemApi from '@/apis/problem'

export default {
  data() {
    return {
      problem: null
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.getProblem()
  },
  methods: {
    getProblem() {
      problemApi.getProblem(this.id).then(response => {
        console.log(response.data)
        if (response && response.status === 200) {
          this.problem = response.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
