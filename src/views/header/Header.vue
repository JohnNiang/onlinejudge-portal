<template>
  <div>
    <nav>
      <div class="nav-container">
        <div class="nav-logo">
          <router-link to="/home" tag="a">CJ OJ</router-link>
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
            <router-link to="/about" tag="a">关于</router-link>
          </li>
          <li>
            <a v-if="!isLogined" @click="handleSignInClick" style="cursor: pointer">登录</a>
            <ul class="menu" v-else>
              <li>
                <a class="headmenu align-center">{{user.username}}</a>
                <a class="submenu">个人中心</a>
                <a class="submenu">注销</a>
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
</style>
