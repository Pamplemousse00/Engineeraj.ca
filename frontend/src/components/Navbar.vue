<template>
  <nav class="navbar is-dark is-fixed-top">
    <div class="container">

    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" style="font-size: 25px">
        ENGINEERAJ
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': showNav }">
      <div class="navbar-start" v-on:click="condToggle">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="818" class="navbar-link" href="https://bulma.io/documentation/overview/start/">
            Project 818
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="818" class="navbar-item" href="https://bulma.io/documentation/overview/start/">
              About
            </router-link>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Updates
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Reflection
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Gallery
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="818" class="navbar-link" href="https://bulma.io/documentation/overview/start/">
            3D Printing
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="818" class="navbar-item" href="https://bulma.io/documentation/overview/start/">
              Guitar
            </router-link>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Masks
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              SpeedSpout
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Printer
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="818" class="navbar-link" href="https://bulma.io/documentation/overview/start/">
            Software
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="818" class="navbar-item" href="https://bulma.io/documentation/overview/start/">
              About
            </router-link>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Updates
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Reflection
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Gallery
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <b-input placeholder="Search..." icon="magnify">
          </b-input>
        </div>
      </div>
    </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNav: false,
      name: ''
    }
  },
  methods: {
    toggle () {
      // toggle between displaying and hiding mobile menu
      this.showNav = !this.showNav
    },
    condToggle () {
      // if user clicks on mobile menu, hide the menu
      if (this.showNav) {
        this.toggle()
      }
    }
  }
}
</script>

<style>
nav.navbar {
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item, .navbar-link {
  font-size: 14px;
  font-weight: 700;
}
</style>
