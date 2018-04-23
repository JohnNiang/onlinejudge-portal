<template>
  <modal :show="isAuthShow" @on-close="handleModalClose">
    <p slot="title">
      Login
    </p>
    <div slot="body">
      <!-- Normal Field -->
      <div class="form-control">
        <label>username</label>
        <input type="text" v-model="username" placeholder="please input your username">
      </div>

      <!-- Invalid Field -->
      <div class="form-control">
        <label>password</label>
        <input v-model="password" type="password" placeholder="please input your password">
        <p v-show="error" class="validation-error">{{error}}</p>
      </div>

    </div>
    <div slot="footer">
      <button class="button-warning" @click="handleCancelClick">Cancel</button>
      <button class="button-primary" @click="handleSignInClick">Sign in</button>
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
