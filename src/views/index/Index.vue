<template>
  <div>
    <header>
      <h1 class="title">CJ OJ</h1>
      <h2 class="subtitle">革新的在线评判平台</h2>
      <p class="disclaimer">来自重庆交通大学</p>
      <router-link to="/problems" tag="button" class="get-started button button-primary button-large">Go to practice</router-link>
      <a class="scroll-down" v-scroll-to="'#intro'"></a>
    </header>
    <section class="section-tertiary" id="intro">
      <div class="container">
        <div class="row">
          <div class="col col-md-6 col-xlg-6 align-center">
            <div class="panel">
              <div class="panel-head">
                <h2 class="panel-title">Judge Now!</h2>
              </div>

              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, iure nihil nisi repellendus doloremque harum quis dolor doloribus repudiandae eum repellat, maiores quas! Autem beatae, eos et neque minus ut mollitia ad earum, rerum hic dignissimos doloremque repellendus? Iste odit minus, recusandae tenetur, magni ullam nostrum explicabo. Explicabo, similique, tenetur.</p>
              </div>

              <div class="panel-footer">
                <button class="button-primary-text">join us</button>
              </div>
            </div>
          </div>
          <div class="col col-md-6 col-xlg-6 align-center">
            <div class="panel">
              <div class="panel-head">
                <h2 class="panel-title">Judge Now!</h2>
              </div>

              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, iure nihil nisi repellendus doloremque harum quis dolor doloribus repudiandae eum repellat, maiores quas! Autem beatae, eos et neque minus ut mollitia ad earum, rerum hic dignissimos doloremque repellendus? Iste odit minus, recusandae tenetur, magni ullam nostrum explicabo. Explicabo, similique, tenetur.</p>
              </div>

              <div class="panel-footer">
                <button class="button-primary-text">join us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section>
      <div class="container container-small">
        <p>极客挚爱的高质量在线技术平台，想要学习和提升专业能力从这里开始，充足技术干货等你来啃，轻松拿下 Dream Offer！</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  height: calc(100vh - 60px);
  background-image: url('../../assets/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  > * {
    color: black;
  }
}
.scroll-down {
  cursor: pointer;
}
</style>
