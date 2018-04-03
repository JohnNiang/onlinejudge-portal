<template>
  <div id="app">
    <div class="global_error" v-show="globalError">
      <span>{{globalError}}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['globalError'])
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // text-align: center;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .global_error {
    height: 40px;
    background: gray;
    text-align: center;
    vertical-align: middle;
    span {
      display: inline-block;
      color: red;
    }
  }
}
</style>
