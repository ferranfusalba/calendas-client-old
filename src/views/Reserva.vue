<template>
  <div v-if="!isDesktop()">
    <div class="d-flex justify-content-start">
      <HomeButton></HomeButton>
    </div>
    <h1 class="mt-4">Reserva</h1>
    <ReservaOne></ReservaOne>
  </div>
  <div v-else-if="isDesktop()">Sorry, no desktop view is available yet.</div>
</template>

<script lang="js">
import ReservaOne from "@/components/ReservaOne.vue";
import HomeButton from "@/components/HomeButton.vue"

export default {
  name: "Home",
  components: {
    ReservaOne,
    HomeButton
  },
  methods: {
    isDesktop: function () {
      return this.$store.getters.isDesktop;
    },
  },
};
</script>