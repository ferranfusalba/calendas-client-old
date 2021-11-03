<template>
  <div v-if="!isDesktop()">
    <h1>Reserva</h1>
    <ReservaOne></ReservaOne> <!--
    <hr>
    <Reserva1></Reserva1> -->
  </div>
  <div v-else-if="isDesktop()">
      Sorry, no desktop view is available yet.
  </div>
</template>

<script lang="js">
import ReservaOne from "@/components/ReservaOne.vue";
//import Reserva1 from "@/components/Reserva1.vue";

export default {
  name: "Home",
  components: {
    ReservaOne,
    //Reserva1
  },
  methods: {
    isDesktop: function () {
      return this.$store.getters.isDesktop;
    },
  }, /*
  data() {
      return {
          selectedComponent: "Reserva1",
      }
  } */
};
</script>