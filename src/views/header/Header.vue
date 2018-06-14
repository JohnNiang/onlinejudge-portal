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
            <div v-else>
              <div v-if="user" class="dropdown">
                <div class="drop-btn">
                  <div class="avatar-wrapper" v-if="user.avatar">
                    <img class="avatar" :src="user.avatar" alt="user avatar">
                  </div>
                  <font-awesome-icon v-else :icon="['far', 'user']" /> {{user.username}}
                </div>
                <div class="dropdown-content">
                  <a @click="handleCenterClick">个人中心</a>
                  <a @click="handleSignOutClick">注销</a>
                </div>
              </div>
            </div>
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
    if (this.isLogined) {
      this.refreshUserDetail()
    }
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
            this.$router.push({ name: 'home' })
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

.avatar-wrapper {
  display: inline-block;
  img {
    vertical-align: middle;
    border-radius: 50%;
    width: 1.8em;
    height: 1.8em;
    position: relative;
  }
}

.drop-btn {
  background-color: #4caf50;
  color: white;
  min-width: 160px;
  text-align: center;
  padding: 17px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
  &:hover .drop-btn {
    background-color: #3e8e41;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
