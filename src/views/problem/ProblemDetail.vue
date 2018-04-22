<template>
  <div class="content_wrapper">
    <section class="section-tertiary">
      <div class="container">
        <div class="problem_wrapper card" v-if="problem">
          <div class="card_title">
            <h1 class="align-center">{{problem.title}}</h1>
          </div>
          <div class="time align-center">
            <span>
              <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>{{problem.updateTime | timeAgo}} ago
            </span>
          </div>
          <div class="limit align-right">
            <span>
              <font-awesome-icon :icon="['fas', 'stopwatch']"></font-awesome-icon> {{problem.timeLimit | toThousands}} ms
            </span>
            <span>
              <font-awesome-icon :icon="['fas', 'hdd']"></font-awesome-icon>{{problem.memoryLimit | toThousands}} KB
            </span>
          </div>
          <div class="description align-left">
            <label>Description</label>
            <div v-html="toHtml(problem.description)"></div>
          </div>
          <div class="languages">
            <label>Please select your language</label>
            <select v-model="languageId">
              <option v-for="(language, index) in problemLanguages" :key="index" :value="language.languageId">
                {{language.name}}
              </option>
            </select>
            <alert :show="languageNotAvailable" type="warning" desc="The problem does not support any language, please wait for some time"></alert>
          </div>
          <div class="codemirror">
            <label>Code block</label>
            <codemirror v-model="code" :options="cmOptions"></codemirror>
          </div>
          <div>
            <alert :show="isError" type="danger" :desc="error"></alert>
          </div>
          <div class="card-actions">
            <button class="button-primary button-round button-shadow button-long" @click="handleSubmitClick">
              <font-awesome-icon :icon="['fas', 'upload']" /> Submit
            </button>
          </div>
          <div v-show="judging" class="progress-bar striped animated">
            <span class="progress-bar-blue" style="width: 100%;"></span>
          </div>
        </div>
        <div v-if="!isLogined">
          <alert type="warning" desc="You are not signed in. So you can't check this problem submission"></alert>
        </div>
        <div class="submissions" v-else>
          <table>
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
              <tr v-for="submission in this.submissions" :key="submission.submissionId">
                <td>{{submission.submissionId}}</td>
                <td>{{submission.submitTime | timeAgo}} ago</td>
                <td>{{submission.status}}</td>
                <td>{{submission.codeSize}}</td>
                <td>{{submission.result}}</td>
                <td>{{submission.score}}</td>
                <td>
                  <button class="button-primary-text" @click="readMore(problem.problemId)">Result</button>
                </td>
              </tr>
            </tbody>
          </table>
          <my-pagination :total="pagination.total" :page="pagination.page" :rpp="pagination.rpp" @size-change="handleSizeChange" @current-change="handleCurrentPageChange"></my-pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import problemApi from '@/apis/problem'
import util from '@/utils'
import Alert from '@/components/alert/Alert'
import MyPagination from '@/components/pagination/MyPagination'

// require component
import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'

// require active-line.js
import 'codemirror/addon/selection/active-line.js'

// require theme
// import 'codemirror/theme/paraiso-light.css'

export default {
  components: {
    codemirror,
    Alert,
    MyPagination
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
        mode: 'text/javascript',
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
  mounted() {
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
        problemApi
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
      problemApi
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

.time {
  span {
    color: grey;
    font-size: 12px;
  }
}

.description {
  padding: 10px;
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
