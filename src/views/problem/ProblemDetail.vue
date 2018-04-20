<template>
  <div class="content_wrapper">
    <section class="section-tertiary">
      <div class="container">
        <div class="problem_wrapper" v-if="problem">
          <h1>{{problem.title}}</h1>
          <span class="time">
            <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>{{problem.updateTime | timeAgo}} ago
          </span>
          <div class="limit">
            <span>
              <font-awesome-icon :icon="['fas', 'stopwatch']"></font-awesome-icon> {{problem.timeLimit | toThousands}} ms
            </span>
            <span>
              <font-awesome-icon :icon="['fas', 'hdd']"></font-awesome-icon>{{problem.memoryLimit | toThousands}} KB
            </span>
          </div>
          <div class="description" v-html="problem.description"></div>
          <div class="codemirror">
            <codemirror v-model="code" :options="cmOptions"></codemirror>
          </div>
          <button class="button-primary button-round button-shadow button-long">
            <font-awesome-icon :icon="['fas', 'upload']" /> Submit
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as problemApi from '@/apis/problem'

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
    }
  }
}
</script>

<style lang="scss" scoped>
.problem_wrapper {
  text-align: center;
}
.time {
  margin-right: 10px;
  color: grey;
  font-size: 12px;
}

.description {
  text-align: left;
}

.limit {
  text-align: right;
  span {
    margin-right: 10px;
  }
}
.codemirror {
  text-align-last: left;
  margin-top: 10px;
}

.el-button {
  width: 100%;
  margin: 10px 0;
}
</style>
