<template>
  <div class="content_wrapper contest_wrapper">
    <section class="section-tertiary">
      <div class="container">
        <div v-if="contest">
          <h1>{{contest.title}}</h1>
          <hr>
          <span class="time">created: {{contest.createTime | timeAgo}}</span>
          <span class="time">updated: {{contest.updateTime | timeAgo}}</span>
          <hr>
          <span class="time">started: {{contest.startTime | parseTime}}</span>
          <span class="time">ended: {{contest.endTime | parseTime}}</span>
          <hr>
          <span>type: {{contest.type}}</span>
          <span>status: {{contest.status}}</span>
          <hr>
          <div class="description" v-html="contest.description"></div>
          <hr>
          <button class="button-primary button-round button-shadow button-long">I want play</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as contestApi from '@/apis/contest'

export default {
  props: {
    contestId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      contest: null
    }
  },
  mounted() {
    this.getContest()
  },
  methods: {
    getContest() {
      contestApi.getContest(this.contestId).then(response => {
        if (response && response.status === 200) {
          this.contest = response.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contest_wrapper {
  text-align: center;
}

.description {
  text-align: left;
}

.apply_button {
  width: 100%;
  margin: 20px 0;
}
</style>
