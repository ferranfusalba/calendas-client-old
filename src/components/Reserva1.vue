<template>
  <div>
    <h2>Selecciona rest.</h2>
    <div class="card mb-3">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Notorious Jazz Café</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card mb-3">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Notorious Piano Bar</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <hr />
    <form>
      <!-- Número de persones -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Número de persones</label
        >
        <div class="row" style="padding-left: 10px;">
          <div class="col-2 p-0">
            <button type="button" class="btn btn-success btn-lg" v-on:click="numPeople -= 1" :disabled="numPeople == 1">-</button>
          </div>
          <div class="col-8">
            <div class="input-group input-group-lg">
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                v-model="numPeople"
              />
            </div>
          </div>
          <div class="col-2 p-0">
            <button type="button" class="btn btn-success btn-lg" v-on:click="numPeople += 1" :disabled="numPeople == 12">+</button>
          </div>
        </div>
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
        <div class="input-group mb-3">
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <span class="input-group-text" id="inputGroup-sizing-default">
            <i class="bi bi-calendar-week"></i>
          </span>
        </div>
        <small
          >Obrim de dimarts a diumenge, de 8 h fins a la mitjanit.
          <a
            href="https://g.page/notoriousjazzcafe?share"
            class="tdn"
            target="_blank"
            >Consulta el nostre horari actualitzat a Google Maps
          </a>
        </small>
      </div>
      <!-- Hora -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Selecciona una hora</label
        >
        <div class="input-group mb-3">
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <span class="input-group-text" id="inputGroup-sizing-default">
            <i class="bi bi-clock"></i>
          </span>
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
      <!-- Nom -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <!-- Cognoms -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Cognoms</label>
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
      <small
        >Ens vols comentar quelcom abans de venir? (Al·lèrgens, cotxets de nens,
        etc.):</small
      >
      <div class="mb-3 form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Observacions</label>
      </div>
      <small
        >Tant la nostra entrada, espais com serveis estan adaptats per a
        persones amb mobilitat reduïda (PMR).</small
      >
      <br />
      <small>S'accepten gossos de companyia.</small><br />
      <br />
      <!-- Petit missatge legal -->
      <small
        >No utilitzarem les teves dades per a finalitats comercials ni tampoc en
        realitzarem cap cessió a tercers. Les teves dades seran emmagatzemades
        un màxim de 72 hores a la nostra base de dades, comptant des de l'hora
        d'arribada al restaurant. Durant aquestes 72 hores podem utilitzar les
        teves dades per a contactar-te en cas que sigui necessari (recordatori,
        cancel·lació o altres motius).</small
      >
      <br />
      <br />

      <!-- Acceptar legal -->
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Llegir les condicions legals
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Condicions legals
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              et non rerum optio quia aspernatur nemo, minus repellat illo rem,
              perferendis cupiditate vel? Dignissimos earum suscipit possimus
              cumque similique doloremque.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tancar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          Accepto les condicions d'ús, la política de privacitat i el tractament
          de dades personals.
        </label>
      </div>
      <br />

      <!-- Botó confirm & enviar -->
      <button type="button" class="btn btn-lg btn-success">Enviar</button>
      <br />
      <small>
        Un cop rebem les teves dades, t'enviarem un missatge per correu
        electrònic si la teva reserva ha estat confirmada.<br />
        Si finalment no pots assistir a la teva reserva, si us plau, contacta
        amb nosaltres per a cancel·lar-la.
      </small>
    </form>
    <br />
    <br />
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
  data() {
      return {
          numPeople: 1,
          maxPeople: 12,
      }
  }
};
</script>

<style>
.row {
  margin-right: 0;
}
</style>