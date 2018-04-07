<template>
  <div class="header_wrapper">
    <div class="header">
      <h1>Yun OJ</h1>
      <h2>cqjtu online judge</h2>
    </div>
    <nav class="shadow">
      <ul>
        <li>
          <a href="#">
            <router-link tag="a" to="/home">Home</router-link>
          </a>
        </li>
        <li>
          <a href="#">
            <router-link tag="a" to="/problems">Problem</router-link>
          </a>
        </li>
        <li>
          <a href="#">
            <router-link tag="a" to="/contests">Contest</router-link>
          </a>
        </li>
        <li>
          <a href="#">
            <router-link tag="a" to="/ranklists">Ranklist</router-link>
          </a>
        </li>
        <li>
          <a href="#">
            <router-link tag="a" to="/about">About</router-link>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/base/mixin';
@import '../../styles/base/variable';
.header_wrapper {
  .header {
    text-align: center;
    padding: 20px;
    background: $header-background-color;
    h1 {
      color: $header-color;
      font-size: 4rem;
      margin-bottom: 0;
      margin-top: 20px;
    }
    h2 {
      margin-top: 0;
    }
  }
  nav {
    background: $black-color;
    margin-bottom: 20px;
    padding: 10px;
    ul {
      @include clearfix;
      @include displayFlex;
      justify-content: center;
      list-style: none;
      a {
        padding: 20px;
        color: $white-color;
        .router-link-active {
          background: $nav-active-color;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
