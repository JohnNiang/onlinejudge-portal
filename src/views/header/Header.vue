<template>
  <div>
    <header>
      <h1 class="title">Chang OJ</h1>
      <h2 class="subtitle">An Online Judge for CQJTU</h2>
      <p class="disclaimer">A powerful judge backend and more problems.</p>
      <button class="get-started button button-primary button-large">Go to Practice</button>
      <a class="scroll-down" href="#nav"></a>
    </header>
    <nav id="nav">
      <div class="nav-container">
        <div class="nav-logo">
          <router-link to="/home" tag="a">Chang OJ</router-link>
        </div>
        <ul class="nav-links">
          <li>
            <!-- <a class="active" href="/docs/installation">Prolem</a> -->
            <router-link to="/problems" tag="a">Problem</router-link>
          </li>
          <li>
            <router-link to="/contests" tag="a">Contest</router-link>
          </li>
          <li>
            <router-link to="/ranklist" tag="a">Ranklist</router-link>
          </li>
          <li>
            <router-link to="/about" tag="a">About</router-link>
          </li>
          <li>
            <a @click="handleSignInClick" style="cursor: pointer">Sign in</a>
          </li>
        </ul>
        <a class="mobile-menu-toggle"></a>
        <!-- <ul class="mobile-menu menu">
          <li>
            <a href="/docs/installation">Docs</a>
          </li>
          <li>
            <a href="https://github.com/kylelogue/mustard-ui" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul> -->
      </div>
    </nav>
    <auth></auth>
  </div>
</template>

<script>
import * as type from '../../store/mutation-type'
import Auth from '../auth/Auth'
import { mapMutations } from 'vuex'
export default {
  components: {
    Auth
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      togleAuthShow: type.TOGLE_AUTH_PAGE
    }),
    handleSignInClick() {
      this.togleAuthShow()
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  border-bottom: 4px solid #4caf50;
}
</style>
