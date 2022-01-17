<template>
  <div v-if="!isDesktop()">
    <!-- <div class="d-flex justify-content-start">
      <HomeButton></HomeButton>
    </div> -->
    <h1 class="mt-4 mb-4">Reserva</h1>
    <StepperReserva circleIcon1="bi bi-check-circle-fill text-success" circleIcon2="bi bi-check-circle-fill text-success" circleIcon3="bi bi-circle-fill"></StepperReserva>
    <Reserva3></Reserva3>
  </div>
  <div v-else-if="isDesktop()">Sorry, no desktop view is available yet.</div>
</template>

<script lang="js">
import Reserva3 from "@/components/Reserva3.vue";
import StepperReserva from "@/components/StepperReserva.vue";
//import HomeButton from "@/components/HomeButton.vue"

export default {
  name: "ReservaStep3",
  components: {
    Reserva3,
    //HomeButton,
    StepperReserva
  },
  methods: {
    isDesktop: function () {
      return this.$store.getters.isDesktop;
    },
  },
};
</script>