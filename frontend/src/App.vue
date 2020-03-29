<template>
  <div>
    <Navbar/>
    <div style="height: 70px"></div>
      <router-view />
  </div>
</template>

<script>
import Pace from '../node_modules/pace-js'
import Navbar from '@/components/Navbar.vue'

// page loading indicator
Pace.start()

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

// Import Bulma's core
@import "~bulma/sass/utilities/functions";

// Set your colors etc..
$primary: #B30000;
$primary-invert: findColorInvert($primary);

html, body{
  background: #ECF0F3;
  height: 100%;
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>

<style>
@import 'assets/style.css';
</style>
