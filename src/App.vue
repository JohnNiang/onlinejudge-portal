<template>
  <div id="app">
    <my-header></my-header>
    <div class="global_error" v-show="globalError">
      <span>{{globalError}}</span>
    </div>
    <router-view>
    </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyHeader from '@/views/header/Header'
import MyFooter from '@/views/footer/Footer'

export default {
  components: {
    MyHeader,
    MyFooter
  },
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
