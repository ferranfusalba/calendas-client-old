<template>
  <div>
    <div class="row">
      <div class="col-4">
        <i :class="circleIcon1"></i>
        <p>Reserva</p>
      </div>
      <div class="col-4">
        <i :class="circleIcon2"></i>
        <p>D. personals</p>
      </div>
      <div class="col-4">
        <i :class="circleIcon3"></i>
        <p>Confirmar</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "StepperReserva",
    props: ["circleIcon1", "circleIcon2", "circleIcon3"],
}
</script>