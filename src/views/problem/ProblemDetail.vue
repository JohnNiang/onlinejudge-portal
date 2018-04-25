<template>
  <div class="content_wrapper">
    <section class="section-tertiary">
      <div class="container">
        <div class="problem_wrapper card" v-if="problem">
          <div class="card-title">
            <h1 class="align-center">
              <font-awesome-icon :icon="['fas', 'book']" /> {{problem.title}}
            </h1>
          </div>
          <div class="time align-center">
            <span class="tooltip">
              <font-awesome-icon :icon="['fas', 'clock']" /> {{problem.updateTime | timeAgo}} ago
              <span class="tooltip-text">更新日期</span>
            </span>
          </div>
          <div class="limit align-right">
            <span class="tooltip">
              <font-awesome-icon :icon="['fas', 'stopwatch']" /> {{problem.timeLimit | toThousands}} ms
              <span class="tooltip-text">时间限制</span>
            </span>
            <span class="tooltip">
              <font-awesome-icon :icon="['fas', 'hdd']" /> {{problem.memoryLimit | toThousands}} KB
              <span class="tooltip-text">内存限制</span>
            </span>
          </div>
          <div class="description">
            <label>
              <font-awesome-icon :icon="['fas', 'archive']" /> 描述
            </label>
            <div v-html="toHtml(problem.description)"></div>
          </div>
          <div class="languages">
            <label>
              <font-awesome-icon :icon="['fas', 'at']" /> 请选择语言
            </label>
            <select v-model="languageId">
              <option v-for="(language, index) in problemLanguages" :key="index" :value="language.languageId">
                {{language.name}}
              </option>
            </select>
            <alert v-if="languageNotAvailable" type="warning" desc="The problem does not support any language, please wait for some time"></alert>
          </div>
          <div class="codemirror">
            <label>
              <font-awesome-icon :icon="['fas', 'code']" /> 代码块
            </label>
            <codemirror v-model="code" :options="cmOptions"></codemirror>
          </div>
          <div>
            <alert v-if="isError" type="danger" :desc="error"></alert>
          </div>
          <div class="card-actions">
            <button class="button-primary button-round button-shadow button-long" @click="handleSubmitClick">
              <font-awesome-icon :icon="['fas', 'upload']" /> 提交
            </button>
          </div>
          <div v-show="judging" class="progress-bar striped animated">
            <span class="progress-bar-blue" style="width: 100%;"></span>
          </div>
        </div>
        <div class="card">
          <div class="card_title">
            <h5 class="align-center">提交</h5>
          </div>
          <button class="button-primary-text button-small" @click="handleRefreshClick">
            <font-awesome-icon :icon="['fas', 'sync']" /> 刷新
          </button>
          <div v-if="!isLogined">
            <alert type="warning" desc="You are not signed in. So you can't check this problem submission"></alert>
          </div>
          <div class="submissions" v-else>
            <submission :submissions="submissions"></submission>
            <my-pagination class="card-actions" :total="pagination.total" :page="pagination.page" :rpp="pagination.rpp" @size-change="handleSizeChange" @current-change="handleCurrentPageChange"></my-pagination>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import problemApi from '@/apis/problem'
import submissionApi from '@/apis/submission'
import util from '@/utils'
import MyPagination from '@/components/pagination/MyPagination'
import Submission from './Submission'

// require component
import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'

// require active-line.js
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/mode/clike/clike.js'

// require theme
// import 'codemirror/theme/paraiso-light.css'

export default {
  components: {
    codemirror,
    MyPagination,
    Submission
  },
  data() {
    return {
      problem: null,
      problemLanguages: [],
      submissions: [],
      code: '',
      languageId: '',
      error: '',
      judging: false,
      pagination: {
        total: 0,
        page: 1,
        rpp: 5,
        sort: 'submissionId,desc'
      },
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-java',
        styleActiveLine: true,
        // theme: 'paraiso-light',
        lineNumbers: true,
        lineWrapping: true,
        line: true
      }
    }
  },
  props: {
    problemId: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters(['isLogined']),
    languageNotAvailable() {
      return (
        this.problemLanguages === null || this.problemLanguages.length === 0
      )
    },
    isError() {
      return this.error != null && this.error !== ''
    }
  },
  created() {
    this.getProblem()
  },
  methods: {
    getProblem() {
      problemApi.getProblem(this.problemId).then(response => {
        if (response && response.status === 200) {
          this.problem = response.data
          // retrive problem language
          this.getProblemLanguages()
          // retrive problem submission
          this.getProblemSubmissions()
        }
      })
    },
    getProblemLanguages() {
      problemApi.getProblemLanguages(this.problemId).then(response => {
        if (response && response.status === 200) {
          this.problemLanguages = response.data
        }
      })
    },
    getProblemSubmissions() {
      if (this.isLogined) {
        // if logined
        submissionApi
          .getSubmissions(this.problem.problemId, this.pagination)
          .then(response => {
            if (response) {
              if (response.status === 200) {
                this.submissions = response.data.datas
                this.pagination.total = response.data.total
              }
            }
          })
      }
    },
    toHtml(markdown) {
      return util.toHtml(markdown)
    },
    preCheck() {
      // clear error
      this.error = null
      // check language id
      // check code
      if (!this.languageId) {
        this.error = 'please select a language'
        return false
      } else if (!this.code) {
        this.error = 'please input your source code'
        return false
      }
      return true
    },
    handleSubmitClick() {
      if (!this.preCheck()) {
        return
      }
      this.judging = true
      submissionApi
        .postSubmission(this.problem.problemId, this.languageId, this.code)
        .then(response => {
          if (response) {
            if (response.status === 200) {
              console.log('submit successfully')
              if (response.data.submissionId) {
                this.getProblemSubmissions()
              }
            }
          }
          this.judging = false
        })
    },
    handleCheckSubmissionsClick() {
      console.log('check submissions')
    },
    handleSizeChange(rpp) {
      this.pagination.rpp = rpp
      this.getProblemSubmissions()
    },
    handleCurrentPageChange(currentPage) {
      this.pagination.page = currentPage
      this.getProblemSubmissions()
    },
    handleRefreshClick() {
      this.getProblemSubmissions()
    }
  }
}
</script>

<style lang="scss" scoped>
.problem_wrapper {
  > div {
    margin-bottom: 20px;
  }
}

.limit {
  span {
    margin-right: 10px;
  }
}
.codemirror {
  text-align-last: left;
  margin-top: 10px;
}
</style>
