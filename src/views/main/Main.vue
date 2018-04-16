<template>
  <div>
    <my-header></my-header>
    <error-alert></error-alert>
    <main>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </main>
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
  name: 'Main'
}
</script>

<style lang="scss" scoped>

</style>
