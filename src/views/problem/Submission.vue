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
            <span class="tooltip" v-if="!isDiabled(submission)">Results
              <span class="tooltip-text">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>used time (ms)</th>
                      <th>used memory (KB)</th>
                      <th>result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dataResult, index) in submission.dataResult" :key="index">
                      <td>{{index+1}}</td>
                      <td>{{dataResult.usedTime}}</td>
                      <td>{{dataResult.usedMemory}}</td>
                      <td>{{dataResult.result}}</td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </span>
            <span v-else>
              No Results
            </span>
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
    isDiabled(submission) {
      return !(submission.dataResult && submission.dataResult.length > 0)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
