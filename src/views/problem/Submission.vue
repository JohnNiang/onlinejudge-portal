<template>
  <div class="submissions">
    <div v-if="isEmpty">
      <alert type="info" desc="You don't submit this problem util now."></alert>
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>submitted</th>
          <th>status</th>
          <th>code size</th>
          <th>result</th>
          <th>score</th>
          <th>action</th>
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
            <button class="button-primary-text" @click="handleCheckResultClick(submission.submissionId)">Result</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from '@/components/alert/Alert'
export default {
  components: {
    Alert
  },
  props: {
    submissions: Array
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
    handleCheckResultClick(submissionId) {}
  }
}
</script>

<style lang="scss" scoped>

</style>
