<template>
  <div class="content_wrapper contest_wrapper">
    <section class="section-tertiary">
      <div class="container">
        <div class="card" v-if="contest">
          <div class="card-title align-center">
            <h1>
              <font-awesome-icon :icon="['fas', 'terminal']" /> {{contest.title}}
            </h1>
          </div>
          <div class="time align-center">
            <span>
              <font-awesome-icon :icon="['fas', 'clock']" /> {{contest.updateTime | timeAgo}} ago
            </span>
          </div>
          <div class="time align-center">
            <span>
              <font-awesome-icon :icon="['far', 'clock']" /> {{contest.startTime | parseTime}}</span>
            <span>
              <font-awesome-icon :icon="['fas', 'clock']" /> {{contest.endTime | parseTime}}</span>
          </div>
          <div class="align-right">
            <span>type: {{contest.type}}</span>
            <span>status: {{contest.status}}</span>
          </div>
          <div>
            <label>
              <font-awesome-icon :icon="['fas', 'archive']" /> Description
            </label>
            <div class="description" v-html="toHtml(contest.description)"></div>
          </div>
          <div class="card-actions">
            <button class="button-primary button-round button-shadow button-long">I want play</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as contestApi from '@/apis/contest'
import util from '@/utils'

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
    },
    toHtml(markdown) {
      return util.toHtml(markdown)
    }
  }
}
</script>

<style lang="scss" scoped>
.card > div {
  margin-bottom: 20px;
}

.time {
  span {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
}

.apply_button {
  width: 100%;
  margin: 20px 0;
}
</style>
