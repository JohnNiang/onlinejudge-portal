<template>
  <el-footer>
    <span> &copy; cqjtu cs 1404 designed by johnniang</span>
  </el-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/base/mixin';
.el-footer {
  @include displayFlex();
  background: #cecece;
  justify-content: center;
  span {
    display: block;
    margin: auto 0;
  }
}
</style>
