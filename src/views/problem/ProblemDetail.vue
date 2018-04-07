<template>
  <div class="content_wrapper">
    <div class="problem_wrapper" v-if="problem">
      <h1>{{problem.title}}</h1>
      <hr>
      <span class="time">created: {{problem.createTime | timeAgo}}</span>
      <span class="time">updated: {{problem.updateTime | timeAgo}}</span>
      <hr>
      <span class="limit">time: {{problem.timeLimit | toThousands}} ms</span>
      <span class="limit">memory: {{problem.memoryLimit | toThousands}} kb</span>
      <hr>
      <div class="description" v-html="problem.description"></div>
      <hr>
      <div class="codemirror">
        <codemirror v-model="code" :options="cmOptions"></codemirror>
      </div>
      <el-button type="success">Submit</el-button>
    </div>
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
    id: {
      type: [Number, String],
      required: true
    }
  },
  mounted() {
    this.getProblem()
  },
  methods: {
    getProblem() {
      problemApi.getProblem(this.id).then(response => {
        if (response && response.status === 200) {
          this.problem = response.data
          // retrive problem language
          this.getProblemLanguages(this.id)
        }
      })
    },
    getProblemLanguages() {
      problemApi.getProblemLanguages(this.id).then(response => {
        if (response && response.status === 200) {
          this.problemLanguages = response.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  margin-right: 10px;
}

.limit {
  margin-right: 10px;
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
