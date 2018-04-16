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
  </div>
  <!-- <div class="header_wrapper">
    <div class="header">
      <h1>Chang OJ</h1>
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
  </div> -->
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  border-bottom: 4px solid #4caf50;
}
// @import '../../styles/base/mixin';
// @import '../../styles/base/variable';
// .header_wrapper {
//   .header {
//     text-align: center;
//     padding: 20px;
//     background: $header-background-color;
//     h1 {
//       color: $header-color;
//       font-size: 4rem;
//       margin-bottom: 0;
//       margin-top: 20px;
//     }
//     h2 {
//       margin-top: 0;
//     }
//   }
//   nav {
//     background: $black-color;
//     margin-bottom: 20px;
//     padding: 10px;
//     ul {
//       @include clearfix;
//       @include displayFlex;
//       justify-content: center;
//       list-style: none;
//       a {
//         padding: 20px;
//         color: $white-color;
//         .router-link-active {
//           background: $nav-active-color;
//           border-radius: 2px;
//           @include removeOutline;
//         }
//       }
//     }
//   }
// }
</style>
