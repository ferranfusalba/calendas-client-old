<template>
  <div id="nav">
    <Header></Header>
  </div>
  <section class="mt-4">
    <router-view />
  </section>
</template>

<style>
html, body {
  background-color: #f9ecdb;
}

#app {
  font-family: 'Fira Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9ecdb;
  padding-left: 10px;
  padding-right: 10px;
}

.btn {
  font-family: 'Work Sans', 'Fira Sans', Avenir, Helvetica, Arial, sans-serif; 
}
</style>

<script>
import Header from "@/components/Header.vue"; // @ is an alias to /src

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
