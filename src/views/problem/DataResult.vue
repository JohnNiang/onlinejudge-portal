<template>
  <div class="tags">
    <span class="tag tag-info" v-if="isDisabled">
      没有结果
    </span>
    <span class="tooltip tag" v-else :class="tagType" @mouseover="handleMouseOver">
      {{resultText}}
      <span class="tooltip-text">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>运行时间 (ms)</th>
              <th>使用内存 (KB)</th>
              <th>结果</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dataResult, index) in results" :key="index">
              <td>{{index+1}}</td>
              <td>{{dataResult.usedTime}}</td>
              <td>{{dataResult.usedMemory}}</td>
              <td>{{dataResult.result}}</td>
            </tr>
          </tbody>
        </table>
      </span>
    </span>
  </div>
</template>

<script>
import submissionApi from '@/apis/submission'

export default {
  props: {
    submission: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      results: null,
      isExist: false
    }
  },
  computed: {
    isDisabled() {
      return this.submission.result !== 'AC'
    },
    resultText() {
      return this.results
        ? this.results.length > 0 ? 'Results' : 'No Results'
        : 'Hover me'
    },
    tagType() {
      let color = 'red'
      if (!this.results || this.results.length > 0) {
        color = 'green'
      }
      return `tag-${color}`
    }
  },
  methods: {
    getDataResults() {
      if (this.isExist) {
        return
      }
      submissionApi
        .getDataResult(this.submission.submissionId)
        .then(response => {
          if (response) {
            if (response.status === 200) {
              this.results = response.data
              this.isExist = true
            }
          }
        })
    },
    handleMouseOver() {
      this.getDataResults()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
