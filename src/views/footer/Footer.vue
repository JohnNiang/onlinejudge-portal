<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col col-lg-5">
          <div class="footer-text">
            <p class="h3">CJ OJ</p>
            <p>CJ OJ是一个全新的OJ框架，实现了全数据集，单数据集和带权重单数据集多种评判模式.</p>
          </div>
        </div>
        <div class="col col-sm-6 col-lg-3 col-lg-offset-1">
          <h4 class="footer-links-category">合作伙伴</h4>
          <ul class="footer-links">
            <li>
              <a href="https://yunload.org" target="_blank">YunLoad</a>
            </li>
            <li>
              <a href="https://github.com" target="_blank">Github</a>
            </li>
          </ul>
        </div>

        <div class="col col-sm-6 col-lg-3">
          <h4 class="footer-links-category">快速链接</h4>
          <ul class="footer-links">
            <li>
              <a href="http://jw.cqjtu.edu.cn" target="_blank">重庆交通大学教务网</a>
            </li>
            <li>
              <a href="http://sise.cqjtu.edu.cn/" target="_blank">信息科学与工程学院</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="copyright align-center">Made with
      <a href="https://www.mustard-ui.com" target="_blank">Mustard-UI</a> by
      <a href="https://johnniang.me">JohnNiang</a>
    </p>

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
  flex: 0 0 50px;
  margin-top: auto;
  span {
    position: relative;
    color: $footer-color;
    display: inline-block;
    width: 100%;
    text-transform: uppercase;
  }
}
</style>
