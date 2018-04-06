<template>
  <v-app id="app">
    <my-header></my-header>
    <v-content>
      <router-view> </router-view>
    </v-content>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import MyHeader from '@/views/header/Header'
import MyFooter from '@/views/footer/Footer'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  name: 'App'
}
</script>

<style lang="scss">
// @import './styles/main';
</style>
