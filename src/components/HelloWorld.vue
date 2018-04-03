<template>
  <div class="hello">
    <form>
      <input type="text" v-model="username" placeholder="Please input your username">
      <input type="password" v-model="password" placeholder="Please input your password">
      <button @click.prevent="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import * as auth from '@/apis/auth'
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods: {
    ...mapActions(['login']),
    signIn() {
      this.login({ username: this.username, password: this.password })
      // auth.getProblems().then(response => {
      //   console.log('get problems response', response)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  text-align: center;
  input {
    display: inline-block;
    width: 200px;
    margin: 10px;
  }
}
</style>
