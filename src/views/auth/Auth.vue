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
      </div>
      <alert v-if="error" type="danger" :desc="error"></alert>
      <alert v-if="info" type="success" :desc="info"></alert>
    </div>
    <div slot="footer">
      <button class="button-primary" @click="handleSignInClick">登录</button>
      <button class="button-info float-right" @click="handleSignUpClick">注册</button>
    </div>
  </modal>
</template>

<script>
import * as type from '../../store/mutation-type'
import authApi from '@/apis/auth'
import Modal from '@/components/modal/Modal'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Modal
  },
  data() {
    return {
      username: '',
      password: '',
      error: null,
      info: null
    }
  },
  computed: {
    ...mapGetters(['isAuthShow'])
  },
  methods: {
    ...mapActions(['refreshUserDetail']),
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
            this.refreshUserDetail()
            this.togleAuthShow()
          } else {
            this.error = 'username or password may be not correct'
          }
        }
      })
    },
    handleSignUpClick() {
      this.error = null
      authApi.signUp(this.username, this.password).then(response => {
        if (response) {
          if (response.status === 200) {
            this.info = '注册成功，请直接登陆'
          } else {
            this.error = response.data.message
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
