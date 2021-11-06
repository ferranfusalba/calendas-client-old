<template>
  <!-- <div id="nav">
        <h1 class="margin">Margin</h1>
    <Header></Header>
  </div> -->
  <section class="mt-4">
    <router-view />
  </section>
</template>

<style>
html, body {
  background-color: #f9ecdb;
  touch-action: manipulation;
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
  touch-action: manipulation;
}

.btn {
  font-family: 'Work Sans', 'Fira Sans', Avenir, Helvetica, Arial, sans-serif; 
}

.margin {
  color: transparent;
}

.tdn {
    text-decoration: none;
}
</style>

<script>
//import Header from "@/components/Header.vue"; // @ is an alias to /src

export default {
  name: "Home",
  components: {
    //Header,
  },
};
</script>
