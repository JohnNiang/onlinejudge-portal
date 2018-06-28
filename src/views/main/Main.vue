<template>
  <div>
    <my-header></my-header>
    <error-alert></error-alert>
    <div class="container" v-if="globalInfo">
      <alert type="success" :desc="globalInfo"></alert>
    </div>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/views/header/Header'
import MyFooter from '@/views/footer/Footer'
import ErrorAlert from '@/views/error/ErrorAlert'
import { mapGetters } from 'vuex'

export default {
  components: {
    MyHeader,
    MyFooter,
    ErrorAlert
  },
  computed: {
    ...mapGetters(['globalInfo'])
  },
  name: 'Main'
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
