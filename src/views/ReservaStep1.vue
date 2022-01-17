<template>
  <div v-if="!isDesktop()">
    <div class="d-flex justify-content-start">
      <HomeButton></HomeButton>
    </div>
    <h1 class="mt-4 mb-4">Reserva</h1>
    <StepperReserva circleIcon1="bi bi-circle-fill" circleIcon2="bi bi-circle" circleIcon3="bi bi-circle"></StepperReserva>
    <Reserva1></Reserva1>
  </div>
  <div v-else-if="isDesktop()">Sorry, no desktop view is available yet.</div>
</template>

<script lang="js">
import Reserva1 from "@/components/Reserva1.vue";
import StepperReserva from "@/components/StepperReserva.vue";
import HomeButton from "@/components/HomeButton.vue"

export default {
  name: "ReservaStep1",
  components: {
    Reserva1,
    HomeButton,
    StepperReserva
  },
  methods: {
    isDesktop: function () {
      return this.$store.getters.isDesktop;
    },
  },
};
</script>