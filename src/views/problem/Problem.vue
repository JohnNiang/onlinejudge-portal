<template>
  <div class="problem_wrapper">
    <el-card class="box-card" v-for="problem in problems" :key="problem.problemId">
      <div slot="header" class="clearfix">
        <span>
          <i class="el-icon-caret-right"></i>{{problem.title}}</span>
        <el-button type="text">More</el-button>
      </div>
      <div class="item">
        {{problem}} {{Date.now() | timeAgo}}
      </div>
    </el-card>
    <el-pagination layout="prev, pager, next" :current-page="pagination.page" :page-size="pagination.rpp" :total="pagination.total" @current-change="currentPageChange">
    </el-pagination>
  </div>
</template>

<script>
import * as problemApi from '@/apis/problem'
// import * as dateUtil from '@/utils/date'

export default {
  data() {
    return {
      problems: [],
      pagination: {
        total: 0,
        page: 1,
        rpp: 9,
        sort: ''
      }
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
    }
  }
}
</script>

<style lang="scss" scopedF>
.problem_wrapper {
  text-align: center;
  .box-card {
    width: 25%;
    margin: 10px;
    text-align-last: left;
    display: inline-table;
    span {
      margin-right: 5px;
    }
    .el-button {
      float: right;
      padding: 3px 0;
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
  }
}
</style>
