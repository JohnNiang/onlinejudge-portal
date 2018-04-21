<template>
  <div>
    <section class="section-tertiary">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Updated</th>
              <th>Ratio</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="problem in formattedProblems" :key="problem.problemId">
              <td>{{problem.problemId}}</td>
              <td>{{problem.title}}</td>
              <td>{{problem.updateTime | timeAgo}}</td>
              <td>
                <progress-bar :percentage="problem.passRate"></progress-bar>
              </td>
              <td>
                <button class="button-primary-text" @click="readMore(problem.problemId)">More</button>
              </td>
            </tr>
          </tbody>
        </table>
        <my-pagination></my-pagination>
      </div>
    </section>
    <!-- <el-pagination layout="prev, pager, next" :current-page="pagination.page" :page-size="pagination.rpp" :total="pagination.total" @current-change="currentPageChange">
    </el-pagination> -->
  </div>
</template>

<script>
import MyPagination from '@/components/pagination/MyPagination'
import ProgressBar from '@/components/progress-bar/ProgressBar'

import problemApi from '@/apis/problem'
import * as filterUtil from '@/utils/filter'

export default {
  components: {
    MyPagination,
    ProgressBar
  },
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
      this.$router.push({ name: 'problem_detail', params: { problemId: id } })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
