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
              <li v-if="user">
                <a class="headmenu align-center">{{user.username}}</a>
                <a class="submenu" @click="handleCenterClick">个人中心</a>
                <a class="submenu" @click="handleSignOutClick">注销</a>
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
import authApi from '@/apis/auth'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Auth
  },
  data() {
    return {}
  },
  created() {
    this.refreshUserDetail()
  },
  computed: {
    ...mapGetters(['isLogined', 'user'])
  },
  methods: {
    ...mapMutations({
      togleAuthShow: type.TOGLE_AUTH_PAGE,
      setGlobalInfo: type.SET_GLOBAL_INFO,
      clearToken: type.CLEAR_TOKEN
    }),
    ...mapActions(['refreshUserDetail']),
    handleSignInClick() {
      this.togleAuthShow()
    },
    handleCenterClick() {
      console.log('personal center click')
      this.$router.push({
        name: 'user_center'
      })
    },
    handleSignOutClick() {
      console.log('logout...')
      authApi.logout().then(response => {
        if (response) {
          if (response.status === 200) {
            this.clearToken()
            this.setGlobalInfo('登出成功!')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/base/variable';

.router-link-active {
  border-bottom: 4px solid #4caf50;
}

.menu {
  margin-bottom: 0;
  height: 100%;
  cursor: pointer;
  width: 130px;
  background: inherit;
  // top: 10px;
  // position: relative;
  li {
    a {
      display: inline-flex;
    }
  }
  .submenu {
    display: none;
    margin-top: 1px;
    height: 45px;
    color: white;
    background: $header-background-color;
  }
  &:hover {
    .submenu {
      display: block;
    }
  }
}
</style>
