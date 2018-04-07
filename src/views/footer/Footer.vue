<template>
  <footer>
    <span> &copy; cqjtu cs 1404</span>
    <span>designed by johnniang</span>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/base/mixin';
@import '../../styles/base/variable';
footer {
  // @include displayFlex();
  background: $footer-background-color;
  // justify-content: center;
  text-align: center;
  padding: 20px 0;
  span {
    position: relative;
    color: $footer-color;
    display: inline-block;
    width: 100%;
    text-transform: uppercase;
  }
}
</style>
