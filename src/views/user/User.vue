<template>
  <section class="section-tertiary">
    <div class="container">
      <div class="row row-reverse">
        <div class="col col-lg-9">
          <router-view></router-view>
        </div>
        <div class="col col-lg-3 display-lg-up">
          <div class="sidebar sidebar-left">
            <h3 class="sidebar-category" :class="{active: active}" @click="active = !active">用户中心</h3>
            <ul class="sidebar-links">
              <li>
                <a class="active" href="#">详情</a>
              </li>
              <li>
                <a href="#">作业</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-links {
  display: none;
}

.sidebar-category.active + .sidebar-links {
  display: block;
}
</style>
