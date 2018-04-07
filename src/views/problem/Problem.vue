<template>
  <div class="content_wrapper">
    <el-card class="box-card" shadow="hover" v-for="problem in formattedProblems" :key="problem.problemId">
      <div slot="header" class="clearfix">
        <span>
          <i class="el-icon-document title_icon"></i>{{problem.title}}</span>
        <el-button type="text" @click="readMore(problem.problemId)">More</el-button>
      </div>
      <div class="item">
        <span>id: {{problem.problemId}}</span>
        <span>time limit: {{problem.timeLimit | toThousands}} ms </span>
        <span>memory limit: {{problem.memoryLimit | toThousands}} KB</span>
        <span class="time">created: {{problem.createTime | timeAgo}}</span>
        <span class="time">updated: {{problem.updateTime | timeAgo}}</span>
        <el-progress :percentage="problem.passRate"></el-progress>
      </div>
    </el-card>
    <el-pagination layout="prev, pager, next" :current-page="pagination.page" :page-size="pagination.rpp" :total="pagination.total" @current-change="currentPageChange">
    </el-pagination>
  </div>
</template>

<script>
import * as problemApi from '@/apis/problem'
import * as filterUtil from '@/utils/filter'

export default {
  data() {
    return {
      problems: [],
      pagination: {
        total: 0,
        page: 1,
        rpp: 6,
        sort: 'updateTime,desc'
      }
    }
  },
  computed: {
    formattedProblems() {
      const problems = this.problems.slice(0, this.problems.length)
      this.problems.slice(0, this.problems.length).forEach(problem => {
        problem.passRate = filterUtil.toPercentage(
          problem.totalPass,
          problem.totalSubmit
        )
      })
      return problems
    }
  },
  mounted() {
    this.getProblems()
  },
  methods: {
    getProblems() {
      problemApi
        .getProblems(
          this.pagination.page,
          this.pagination.rpp,
          this.pagination.sort
        )
        .then(response => {
          if (response && response.status === 200) {
            this.problems = response.data.datas
            this.pagination.total = response.data.total
            this.pagination.page = response.data.page
            this.pagination.rpp = response.data.rpp
          }
        })
    },
    currentPageChange(currentPage) {
      this.pagination.page = currentPage
      this.getProblems()
    },
    readMore(id) {
      this.$router.push({ name: 'problem_detail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  span {
    display: block;
    color: #999;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.title_icon {
  margin-right: 5px;
}
.time {
  font-size: 13px;
  &:after {
    content: ' ago';
  }
}
.box-card {
  width: 25%;
  margin: 10px;
  text-align-last: left;
  display: inline-table;
  span {
    margin-right: 5px;
  }
}
.clearfix {
  &:before,
  &:after {
    display: table;
    content: '';
  }
  &:after {
    clear: both;
  }
}
.el-button {
  float: right;
  padding: 3px 0;
}
</style>
