<template>
  <div class="content_wrapper contest_wrapper">
    <section class="section-tertiary">
      <div class="container">
        <div class="card" v-if="contestForShow">
          <div class="card-title align-center">
            <h1>
              <font-awesome-icon :icon="['fas', 'terminal']" /> {{contestForShow.title}}
            </h1>
          </div>
          <div class="time align-center">
            <span class="tooltip">
              <font-awesome-icon :icon="['fas', 'clock']" /> {{contestForShow.updateTime | timeAgo}} ago
              <span class="tooltip-text">更新日期</span>
            </span>
          </div>
          <div class="time align-center">
            <span class="tooltip">
              <font-awesome-icon :icon="['far', 'clock']" /> {{contestForShow.startTime | parseTime}}
              <span class="tooltip-text">开始时间</span>
            </span>
            <span class="tooltip">
              <font-awesome-icon :icon="['fas', 'clock']" /> {{contestForShow.endTime | parseTime}}
              <span class="tooltip-text">结束时间</span>
            </span>
          </div>
          <div class="tags">
            <span class="tag tag-rounded" :class="contestForShow.typeTagColor">{{contestForShow.typeLabel}}</span>
            <span class="tag tag-rounded" :class="contestForShow.statusTagColor">{{contestForShow.statusLabel}}</span>
          </div>
          <div>
            <label>
              <font-awesome-icon :icon="['fas', 'archive']" /> Description
            </label>
            <div class="description" v-html="toHtml(contestForShow.description)"></div>
          </div>
          <div class="card-actions">
            <button class="button-primary button-round button-shadow button-long">I want play</button>
          </div>
        </div>
        <div v-else>
          <alert type="warning" desc="该比赛已删除" :animated="false"></alert>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as contestApi from '@/apis/contest'
import util from '@/utils'
import constant from '@/utils/constant'

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
  computed: {
    contestForShow() {
      if (!this.contest) {
        return null
      }
      const contestForShow = Object.assign({}, this.contest)

      const contestType = constant.contestType[contestForShow.type]
      contestForShow.typeLabel = contestType.value
      contestForShow.typeTagColor = contestType.tagColor

      const contestStatus = constant.contestStatus[contestForShow.status]
      contestForShow.statusLabel = contestStatus.value
      contestForShow.statusTagColor = contestStatus.tagColor
      return contestForShow
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

.time > span {
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
}

.tags {
  justify-content: flex-end;
}

.apply_button {
  width: 100%;
  margin: 20px 0;
}
</style>
