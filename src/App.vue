<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F5E5C9;
}
</style>
