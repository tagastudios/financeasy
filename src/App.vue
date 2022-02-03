<template>
  <Header />
  <main>
    <router-view />
  </main>
  <!-- <Drawer /> -->
  <Footer />
</template>

<script>
  import Header from "@/components/layout/Header.vue";
  // import Drawer from "@/components/layout/Drawer.vue"
  import Footer from "@/components/layout/Footer.vue";
  export default {
    name: "App",
    components: {
      Header,
      // Drawer,
      Footer,
    },
  };
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    // border: 1px solid red;
    margin: 0;
    padding: 0;
  }
  html {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    background: $gradient-green;
    font-family: $font-text;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  }
  main {
    min-height: calc(100% - 100px);
    height: calc(100% - 100px);
    overflow: hidden;
    margin-left: 1.25rem;
    background: $color-bg;
    color: $color-text;
    border-radius: 25px 7.5px 7.5px 25px;
  }
  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
  }

  /* TEXT */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $font-title;
  }

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba($color: #333, $alpha: 0.3);
    border-radius: 20px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba($color: #333, $alpha: 0.5);
  }

  .btn-green {
    background: rgba($light-green, 0.6);
    color: $white;
    padding: 5px 10px;
    border: none;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
      background: rgba($light-green, 1);
      cursor: pointer;
    }
    &:active {
      background: rgba($light-green, 0.8);
      box-shadow: $shadow-black 5px 5px 5px;
    }
    &.router-link-exact-active {
      background: rgba($light-green, 1);
      box-shadow: $shadow-green 0px 0px 10px;
      color: $white;
    }
  }
  .btn-red {
    background: rgba($light-red, 0.6);
    color: $white;
    padding: 5px 10px;
    border: none;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
      background: rgba($light-red, 1);
      cursor: pointer;
    }
    &:active {
      background: rgba($light-red, 0.8);
      box-shadow: $shadow-black 5px 5px 5px;
    }
    &.router-link-exact-active {
      background: rgba($light-red, 1);
      box-shadow: $shadow-green 0px 0px 10px;
      color: $white;
    }
  }
</style>
