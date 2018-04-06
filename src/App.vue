<template>
  <div id="app">
    <my-header></my-header>
    <router-view>
    </router-view>
    <my-footer></my-footer>
  </div>
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
@import './styles/main';
</style>
