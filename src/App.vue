<template>
  <Navbar />

  <div class="test">
    <p class="text-3xl font-bold underline">Hello</p>
    <p>World 2</p>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue'

export default {
    name:'App',
    components: { Navbar },
    setup(){

    }
}

</script>

<style lang="scss">
@import "./assets/style.scss";

/* body{
  a{
    color:green;
  }
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
