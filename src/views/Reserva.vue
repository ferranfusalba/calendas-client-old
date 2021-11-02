<template>
  <div>
    <h1>Reserva</h1>
    <Reserva1></Reserva1>
  </div>
</template>

<script lang="js">
import Reserva1 from "@/components/Reserva1.vue";

export default {
  name: "Home",
  components: {
    Reserva1,
  },
  data() {
      return {
          selectedComponent: "Reserva1",
      }
  }
};
</script>