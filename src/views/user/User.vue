<template>
  <div class="container">
    <div class="row row-reverse">
      <div class="col col-lg-9">
        <router-view></router-view>
      </div>
      <div class="col col-lg-3 display-lg-up">
        <div class="sidebar sidebar-left">
          <h3 class="sidebar-category">User Center</h3>
          <ul class="sidebar-links">
            <li>
              <a class="active" href="#">Detail</a>
            </li>
            <li>
              <a href="#">Assignment</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>
