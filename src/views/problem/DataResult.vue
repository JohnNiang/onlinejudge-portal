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
            <tr v-for="(dataResult, index) in resultsForShow" :key="index">
              <td>{{index+1}}</td>
              <td>{{dataResult.usedTime}}</td>
              <td>{{dataResult.usedMemory}}</td>
              <td class="tags">
                <span class="tag tag-rounded" :class="dataResult.resultTagColor">
                  {{dataResult.resultValue}}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
    </span>
  </div>
</template>

<script>
import submissionApi from '@/apis/submission'
import constant from '@/utils/constant'

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
    resultsForShow() {
      if (!this.results) {
        return null
      }
      return this.results.map(dataResult => {
        const result = constant.judgeResult[dataResult.result]
        dataResult.resultValue = result.value
        dataResult.resultTagColor = result.tagColor
        return dataResult
      })
    },
    isDisabled() {
      return this.submission.result !== 'AC'
    },
    resultText() {
      return this.results
        ? this.results.length > 0 ? '查看结果' : '没有结果'
        : '查看结果'
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
.tags {
  white-space: nowrap;
  .tag {
    box-shadow: none;
    -webkit-box-shadow: none;
  }
}

.tooltip-text {
  z-index: 19999;
}
</style>
