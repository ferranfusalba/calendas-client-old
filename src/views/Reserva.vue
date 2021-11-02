<template>
  <div>
    <h1 class="margin">Margin</h1>
    <h1>Reserva</h1>
    <Reserva1></Reserva1>
  </div>
</template>

<style scoped>
.margin {
  color: transparent;
}
</style>

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