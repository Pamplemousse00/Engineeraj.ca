<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-12">
          <div class="tile is-ancestor">
            <div class="tile is-12 is-vertical is-parent">
              <div class="tile is-child box">
                <p class="title" style="text-align: center;">The 818</p>
              </div>
            </div>
          </div>

          <img src='../../assets/images/main.jpg' style="width:100%">

          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">320whp</p>
                  <p class="subtitle">Power</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">3.9s</p>
                  <p class="subtitle">0-60</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">818kg</p>
                  <p class="subtitle">Weight</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">1</p>
                  <p class="subtitle">Person</p>
                </article>
              </div>
            </div>
          </section>
          <section>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="tile is-child box">
                    <p class="title">Three</p>
                    <p class="subtitle">Factory Five's 818 Kit offers power and handling fun thanks to a lightweight chassis and mid-engine design.</p>
                  </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  created () {
    document.title = 'Neeraj\'s Website'
    this.isLoading = true
  }
}
</script>
