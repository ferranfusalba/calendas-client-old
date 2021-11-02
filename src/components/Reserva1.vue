<template>
  <div>
    <h2>Selecciona rest.</h2>
    <hr />
    <form>
      <!-- Número de persones -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Número de persones</label
        >
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          min="1"
          max="12"
        />
        <small id="emailHelp" class="form-text">
          Per a reserves de més de 12 persones, siusplau, contacteu amb
          nosaltres per telèfon o per correu electrònic.
        </small>
      </div>
      <!-- Data -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Selecciona una data</label
        >
        <div class="row p-0">
          <div class="col-10 p-0">
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              min="1"
              max="12"
            />
          </div>
          <div class="col-2 p-0">
            <button type="button" class="btn btn-secondary">
              <i class="bi bi-calendar-week"></i>
            </button>
          </div>
        </div>
        <small id="emailHelp" class="form-text">
          Obrim de dimarts a diumenge de 8 h fins a la mitjanit.
        </small>
      </div>
      <!-- Hora -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Selecciona una hora</label
        >
        <div class="row p-0">
          <div class="col-10 p-0">
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              min="1"
              max="12"
            />
          </div>
          <div class="col-2 p-0">
            <button type="button" class="btn btn-secondary">
              <i class="bi bi-calendar-week"></i>
            </button>
          </div>
        </div>
        <small id="emailHelp" class="form-text">
          Sols acceptem reserves per a dinars o sopars.
        </small>
      </div>
      <!-- Preferència de taula -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Selecciona una preferència de taula</label
        >
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Interior
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Terrassa
          </label>
        </div>
      </div>
      <hr />
      <!-- Nom i cognoms -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nom i cognoms</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <!-- Correu electrònic -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Correu electrònic</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <!-- Telèfon -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Telèfon</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <small id="emailHelp" class="form-text">
        Si el teu telèfon és internacional, siusplau, indica-hi també el prefix.
      </small>
      <hr />
      <!-- Observacions -->

      <!-- Petit missatge legal -->

      <!-- Acceptar legal -->

      <!-- Botó confirm & enviar -->
    </form>
    <PageNav></PageNav>
  </div>
</template>

<script lang="js">
import PageNav from "@/components/PageNav.vue";

export default {
  name: "Home",
  components: {
    PageNav,
  },
};
</script>

<style>
.row {
  margin-right: 0;
}
</style>