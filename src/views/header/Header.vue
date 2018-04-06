<template>
  <div>
    <v-navigation-drawer fixed app v-model="drawer">
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>主页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
  </div>
  <!-- <div>
    <header>
      <h1>CJ OJ</h1>
      <h2>CQJTU Online Judge</h2>
    </header>
    <nav>
      <ul>
        <li>
          <a href="#">主页</a>
        </li>
        <li>
          <a href="#">题目</a>
        </li>
        <li>
          <a href="#">竞赛</a>
        </li>
        <li>
          <a href="#">排行</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
      </ul>
    </nav>
  </div> -->

</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
