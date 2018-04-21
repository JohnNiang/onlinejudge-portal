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
            <div v-html="toHtml(problem.description)"></div>
          </div>
          <div class="languages">
            <label>Please select your language</label>
            <select v-model="languageId">
              <option v-for="(language, index) in problemLanguages" :key="index" :value="language.languageId">
                {{language.name}}
              </option>
            </select>
            <p class="alert alert-warning" v-if="languageNotAvailable">The problem does not support any language, please wait for some time.</p>
          </div>
          <div class="codemirror">
            <label>Code block</label>
            <codemirror v-model="code" :options="cmOptions"></codemirror>
          </div>
          <div>
            <p class="alert alert-danger" v-show="error">{{error}}</p>
          </div>
          <div class="card-actions">
            <button class="button-primary button-round button-shadow button-long" @click="handleSubmitClick">
              <font-awesome-icon :icon="['fas', 'upload']" /> Submit
            </button>
          </div>
        </div>
        <div class="submissions">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import problemApi from '@/apis/problem'
import util from '@/utils'

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
    codemirror
  },
  data() {
    return {
      problem: null,
      problemLanguages: [],
      code: '',
      languageId: '',
      error: '',
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
    languageNotAvailable() {
      return (
        this.problemLanguages === null || this.problemLanguages.length === 0
      )
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
          this.getProblemLanguages(this.id)
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
      problemApi
        .postSubmission(this.problem.problemId, this.languageId, this.code)
        .then(response => {
          if (response) {
            if (response.status === 200) {
              console.log('submit successfully')
            }
          }
        })
    },
    handleCheckSubmissionsClick() {
      console.log('check submissions')
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
  border: 0.5px dashed grey;
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
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

.submissions {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  .scroll-down {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 50%;
    margin-left: -16px;
    width: 32px;
    height: 32px;
    border: 2px solid black;
    border-radius: 50%;
    transition: all 0.2s ease-in;

    &::before {
      display: block;
      position: relative;
      bottom: 2px;
      content: '';
      transform: rotate(-45deg);
      width: 12px;
      height: 12px;
      border: 2px solid black;
      border-width: 0px 0 2px 2px;
    }
  }
}
</style>
