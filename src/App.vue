<template>
  <div id="app">
    <!-- <goods /> -->
    <nav>
      <router-link class="niceLink" to="/">Home</router-link>
      <router-link class="niceLink" to="/about">Details comming soon...</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Goods from './components/Goods.vue'

export default {
  name: 'app',
  components: {
    Goods
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
 padding-top: 5opx;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #323333;
  border-radius: .6em;
  color: rgb(215, 221, 230);
  font-weight: bold;
  margin-right: 15px;
}
</style>
