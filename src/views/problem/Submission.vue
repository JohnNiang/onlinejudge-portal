<template>
  <div class="submissions">
    <div v-if="isEmpty">
      <alert type="info" desc="You don't submit this problem util now."></alert>
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>提交时间</th>
          <th>状态</th>
          <th>代码长度</th>
          <th>结果</th>
          <th>得分</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="submission in submissionsForShow" :key="submission.submissionId">
          <td>{{submission.submissionId}}</td>
          <td>{{submission.submitTime | timeAgo}} ago</td>
          <td class="tags">
            <span class="tag tag-rounded" :class="submission.statusTagColor">
              {{submission.statusValue}}
            </span>
          </td>
          <td>{{submission.codeSize}}</td>
          <td class="tags">
            <span class="tag tag-rounded" :class="submission.resultTagColor">
              {{submission.resultValue}}
            </span>
          </td>
          <td>{{submission.score}}</td>
          <td>
            <data-result :submission="submission"></data-result>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataResult from './DataResult'
import constant from '@/utils/constant'

export default {
  components: {
    DataResult
  },
  props: {
    submissions: Array
  },
  data() {
    return {
      dataResults: []
    }
  },
  computed: {
    isEmpty() {
      return (
        this.submissions === null ||
        this.submissions === [] ||
        this.submissions.length === 0
      )
    },
    submissionsForShow() {
      return this.submissions.map(submission => {
        const judgeStatus = constant.judgeStatus[submission.status]
        const judgeResult = constant.judgeResult[submission.result]
        submission.statusValue = judgeStatus.value
        submission.statusTagColor = judgeStatus.tagColor
        submission.resultValue = judgeResult.alias
        submission.resultTagColor = judgeResult.tagColor
        return submission
      })
    }
  },
  methods: {
    isDiabled(submission) {
      return !(submission.dataResult && submission.dataResult.length > 0)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
