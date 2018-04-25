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
            <router-link to="/problems" tag="a">题库</router-link>
          </li>
          <li>
            <router-link to="/contests" tag="a">比赛</router-link>
          </li>
          <li>
            <router-link to="/ranklist" tag="a">排行榜</router-link>
          </li>
          <li>
            <router-link to="/about" tag="a">关于Chang OJ</router-link>
          </li>
          <li>
            <a v-if="!isLogined" @click="handleSignInClick" style="cursor: pointer">登录</a>
            <ul class="menu" v-else>
              <li>
                <a class="headmenu">{{user.username}}</a>
                <a class="submenu">个人中心</a>
                <a class="submenu">登出</a>
              </li>
            </ul>
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
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    Auth
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isLogined', 'user'])
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

.menu {
  cursor: pointer;
  width: 150px;
  background: inherit;
  .submenu {
    display: none;
    margin-top: 5px;
    background: white;
  }
  &:hover {
    .submenu {
      display: block;
    }
  }
}
</style>
