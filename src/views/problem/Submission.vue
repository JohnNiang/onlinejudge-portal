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
          <th>分数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="submission in submissions" :key="submission.submissionId">
          <td>{{submission.submissionId}}</td>
          <td>{{submission.submitTime | timeAgo}} ago</td>
          <td>{{submission.status}}</td>
          <td>{{submission.codeSize}}</td>
          <td>{{submission.result}}</td>
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
