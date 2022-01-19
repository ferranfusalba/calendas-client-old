<template>
  <div class="home">
    <h1>Calendas</h1>
    <h6>Sistema de gestió de reserves</h6>
    <h2>Notorious</h2>
    <br>
    <h3>Els nostres restaurants</h3>
    <div class="card mt-1 mb-1">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-success"><router-link to="/reserva" class="text-white tdn">Reserva al Jazz Café (OnePage)</router-link></a>
      </div>
    </div>
    <div class="card mt-1 mb-1">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-success"><router-link to="/reserva1" class="text-white tdn">Reserva al Jazz Café (Steps)</router-link></a>
      </div>
    </div>
    <!-- <div class="card mt-1 mb-1">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-success">Reserva al Piano Bar</a>
      </div>
    </div> -->
    <br>
    <button class="btn btn-warning mt-1 mb-1"><router-link to="/modifica" class="text-dark tdn">Modifica una reserva</router-link></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>
