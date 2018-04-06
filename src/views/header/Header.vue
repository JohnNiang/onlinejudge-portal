<template>
  <div class="header_wrapper">
    <div class="header">
      <h1>CJ OJ</h1>
      <h2>cqjtu online judge</h2>
    </div>
    <nav>
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
.header_wrapper {
  .header {
    text-align: center;
    padding: 20px;
    h1 {
      font-size: 3rem;
      margin-bottom: 0;
      margin-top: 20px;
    }
    h2 {
      margin-top: 0;
    }
  }
  nav {
    margin-bottom: 20px;
    ul {
      @include clearfix;
      @include displayFlex;
      justify-content: center;
      list-style: none;
      a {
        padding: 20px;
        .router-link-active {
          background: #aaaaaa;
        }
      }
    }
  }
}
</style>
