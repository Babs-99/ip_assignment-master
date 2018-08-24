<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar: Navbar
  }
}
</script>

<style lang="sass">
@import url("https://use.fontawesome.com/releases/v5.0.10/css/all.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
@import bulma
@import url('https://fonts.googleapis.com/css?family=Pacifico|Almendra+Display|Lato|Raleway:400,700,700i');
@import url('https://fonts.googleapis.com/css?family=Quattrocento');

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
</style>
