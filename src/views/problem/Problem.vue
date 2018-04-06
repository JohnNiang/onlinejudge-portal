<template>
  <div class="problem_wrapper">
    <el-card class="box-card" v-for="problem in problems" :key="problem.problemId">
      <div slot="header" class="clearfix">
        <span>{{problem.title}}</span>
        <el-button type="text">More</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as problemApi from '@/apis/problem'

export default {
  data() {
    return {
      problems: []
    }
  },
  mounted() {
    problemApi.getProblems().then(response => {
      if (response && response.status === 200) {
        this.problems = response.data.datas
      }
    })
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
