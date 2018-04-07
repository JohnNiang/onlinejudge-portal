<template>
  <div>
    <error-alert></error-alert>
    <my-header></my-header>
    <el-main class="clearfix">
      <router-view></router-view>
    </el-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/views/header/Header'
import MyFooter from '@/views/footer/Footer'
import ErrorAlert from '@/views/error/ErrorAlert'

export default {
  components: {
    MyHeader,
    MyFooter,
    ErrorAlert
  },
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/main';

.el-main {
  min-height: 300px;
  padding: 0 10%;
  // margin-bottom: 20px;
  background: #f5f7f9;
}
</style>
