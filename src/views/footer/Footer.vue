<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col col-lg-5">
          <div class="footer-text">
            <p class="h3">Online Judge</p>
            <p>This is an example of the footer component. You don't have to use this layout, but it's a good example of what you can do with what's provided. If you wanted to included more columns for links and remove this text block, you can.</p>
          </div>
        </div>
        <div class="col col-sm-6 col-lg-3 col-lg-offset-1">
          <h4 class="footer-links-category">Partner</h4>
          <ul class="footer-links">
            <li>
              <a href="htts://yunload.org" target="_blank">YunLoad</a>
            </li>
            <li>
              <a href="#" target="_blank">Link #2</a>
            </li>
            <li>
              <a href="#" target="_blank">Link #3</a>
            </li>
          </ul>
        </div>

        <div class="col col-sm-6 col-lg-3">
          <h4 class="footer-links-category">Easy link</h4>
          <ul class="footer-links">
            <li>
              <a href="http://jw.cqjtu.edu.cn" target="_blank">JW</a>
            </li>
            <li>
              <a href="#" target="_blank">Link #2</a>
            </li>
            <li>
              <a href="#" target="_blank">Link #3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="copyright align-center">Made with
      <a href="https://www.mustard-ui.com" target="_blank">Mustard-UI</a> by John Niang. Licensed under the MIT License.</p>

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
