<template>
  <modal :show="isAuthShow" @on-close="handleModalClose">
    <p slot="title">
      登录
    </p>
    <div slot="body" @keyup.enter="handleSignInClick">
      <!-- Normal Field -->
      <div class="form-control">
        <label>用户名</label>
        <input type="text" v-model="username" placeholder="请输入你的用户名">
      </div>

      <!-- Invalid Field -->
      <div class="form-control">
        <label>密码</label>
        <input v-model="password" type="password" placeholder="输入你的密码">
        <p v-show="error" class="validation-error">{{error}}</p>
      </div>

    </div>
    <div slot="footer">
<!--      <button class="button-warning" @click="handleCancelClick">Cancel</button> -->
      <button class="button-primary" @click="handleSignInClick">登录</button>
    </div>
  </modal>
</template>

<script>
import * as type from '../../store/mutation-type'
import authApi from '@/apis/auth'
import Modal from '@/components/modal/Modal'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Modal
  },
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  computed: {
    ...mapGetters(['isAuthShow'])
  },
  methods: {
    ...mapMutations({
      togleAuthShow: type.TOGLE_AUTH_PAGE,
      setToken: type.SET_TOKEN
    }),
    handleCancelClick() {
      this.togleAuthShow()
    },
    handleModalClose() {
      this.handleCancelClick()
    },
    handleSignInClick() {
      this.error = null
      authApi.login(this.username, this.password).then(response => {
        if (response) {
          if (response.status === 200) {
            this.setToken(response.data)
            this.togleAuthShow()
          } else {
            this.error = 'username or password may be not correct'
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
