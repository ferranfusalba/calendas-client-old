<template>
  <div id="nav">
    <Header></Header>
  </div>
  <section class="mt-4">
    <router-view />
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
