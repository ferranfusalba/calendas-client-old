<template>
  <div>
    <!--
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
    <hr /> -->
    <div class="form-group">
      <!-- Número de persones -->
      <div class="mb-3">
        <label>Número de persones</label>
        <div class="row" style="padding-left: 10px">
          <div class="col-2 p-0">
            <button
              type="button"
              class="btn btn-success btn-lg"
              v-on:click="numPeople -= 1"
              :disabled="numPeople == 1"
            >
              -
            </button>
          </div>
          <div class="col-8">
            <div class="input-group input-group-lg">
              <input
                type="number"
                class="form-control bg-white inputPeople"
                id="inputPeople"
                aria-describedby="inputGroup-sizing-lg"
                v-model="numPeople"
                @blur="validacio()"
                readonly
              />
            </div>
          </div>
          <div class="col-2 p-0">
            <button
              type="button"
              class="btn btn-success btn-lg"
              v-on:click="numPeople += 1"
              :disabled="numPeople == 12"
            >
              +
            </button>
          </div>
        </div>
        <small class="text-danger">{{ watcherValidation }}</small>
        <small>
          Per a reserves de més de 12 persones, siusplau, contacteu amb
          nosaltres per
          <a href="tel:+34937688731" target="_blank" class="tdn">telèfon</a> o
          per
          <a
            href="mailto:notoriousjazzcafe@hotmail.com"
            target="_blank"
            class="tdn"
            >correu electrònic</a
          >.
        </small>
      </div>

      <!-- Data manual -->
      <div class="mb-3">
        <h6>MANUAL</h6>
        <label>Selecciona una data</label>
        <div class="input-group mt-1 mb-1">
          <input
            type="date"
            class="form-control"
            id="inputDate"
            aria-describedby="inputGroup-sizing-default"
            :min="minToday2"
          />
          <!--
          <span class="input-group-text" id="inputGroup-sizing-default">
            <i class="bi bi-calendar-week"></i>
          </span> -->
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

      <!-- Data pikaday -->
      <div class="mb-3">
        <h6>PIKADAY</h6>
        <label>Selecciona una data</label>
        <div class="input-group mt-1 mb-1">
          <input
            type="date"
            class="form-control"
            id="inputDate"
            aria-describedby="inputGroup-sizing-default"
            :min="minToday2"
          />
          <!--
          <span class="input-group-text" id="inputGroup-sizing-default">
            <i class="bi bi-calendar-week"></i>
          </span> -->
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
        <label>Selecciona una hora</label>
        <div class="input-group mt-1 mb-1">
          <!--
          <input
            type="time"
            class="form-control"
            id="inputTime"
            aria-describedby="inputGroup-sizing-default"
          /> -->
          <!--
          <span class="input-group-text" id="inputGroup-sizing-default">
            <i class="bi bi-clock"></i>
          </span> -->

          <select class="form-control">
            <option
              v-for="option in hourOptions"
              v-bind:value="option.value"
              :key="option"
              id="inputTime"
              :disabled="option.disabled"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <small> Sols acceptem reserves per a dinars o sopars. </small>
      </div>

      <!-- Preferència de taula -->
      <div class="mb-3">
        <label>Selecciona una preferència de taula</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="radioInterior"
          />
          <label class="form-check-label" for="radioInterior"> Interior </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="radioTerrassa"
          />
          <label class="form-check-label" for="radioTerrassa"> Terrassa </label>
        </div>
      </div>

      <!-- Nom -->
      <div class="mb-3">
        <label>Nom</label>
        <input type="text" class="form-control mt-1 mb-1" id="inputName" />
      </div>

      <!-- Cognoms -->
      <div class="mb-3">
        <label>Cognoms</label>
        <input type="text" class="form-control mt-1 mb-1" id="inputSurname" />
      </div>

      <!-- Correu electrònic -->
      <div class="mb-3">
        <label>Correu electrònic</label>
        <input type="email" class="form-control mt-1 mb-1" id="inputEmail" />
      </div>

      <!-- Telèfon -->
      <div class="mb-3">
        <label>Telèfon</label>
        <div class="row mt-1 mb-1" style="padding-left: 10px">
          <div class="col-4 foraPL">
            <small>Prefix internacional</small>
            <select class="form-control">
              <option
                v-for="option in intPhoneCodes"
                v-bind:value="option.value"
                :key="option"
                id="inputPhone"
                :disabled="option.disabled"
                :selected="option.selected"
              >
                {{ option.code }}
              </option>
            </select>
          </div>
          <div class="col-8 foraPR">
            <small>Telèfon</small>
            <div class="input-group">
              <input type="tel" class="form-control" id="inputTel" />
            </div>
          </div>
        </div>
      </div>
      <!--
      <small>
        Si el teu telèfon és internacional, siusplau, indica-hi també el prefix.
      </small> -->

      <!-- Observacions -->
      <small
        >Ens vols comentar quelcom abans de venir? (Al·lèrgens, cotxets de nens,
        etc.):</small
      >
      <div class="mb-3 form-floating">
        <textarea
          class="form-control mt-1 mb-1"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Observacions</label>
        <small
          >Tant la nostra entrada, espais com serveis estan adaptats per a
          persones amb mobilitat reduïda (PMR).</small
        >
        <br />
        <small>S'accepten gossos de companyia.</small><br />
        <br />
      </div>
      <!-- Petit missatge legal -->
      <h4>Un apunt final</h4>
      <br />
      <p class="text-start">
        <small>
          👉 No utilitzarem les teves dades per a finalitats comercials ni
          tampoc en realitzarem cap cessió a tercers.
        </small>
      </p>
      <p class="text-start">
        <small>
          🗄️ Les teves dades seran emmagatzemades un màxim de 72 hores a la
          nostra base de dades, comptant des de l'hora d'arribada al restaurant.
        </small>
      </p>
      <p class="text-start">
        <small>
          📲 Durant aquestes 72 hores podem utilitzar les teves dades per a
          contactar-te en cas que sigui necessari (recordatori, cancel·lació o
          altres motius).
        </small>
      </p>
      <br />

      <!-- Acceptar legal -->
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#modalLegal"
      >
        Llegir les condicions legals
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="modalLegal"
        tabindex="-1"
        aria-labelledby="modalLegalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLegalLabel">
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
      <br />
      <button
        type="button"
        class="btn btn-lg btn-success"
        @click="showValidation()"
      >
        Enviar
      </button>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservaOne",
  data() {
    return {
      numPeople: 1,
      validationPeople: true,
      todayNumber: new Date().getDate(),
      todayMonth: new Date().getMonth() + 1,
      todayYear: new Date().getFullYear(),
      minToday:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      todayToday: this.twoDigitDay(new Date()),
      monthToday: this.twoDigitMonth(new Date()),
      minToday2:
        new Date().getFullYear() +
        "-" +
        this.twoDigitMonth(new Date()) +
        "-" +
        this.twoDigitDay(new Date()),
      hourOptions: [
        { text: "Dinars", disabled: true },
        { text: "12:30" },
        { text: "12:45" },
        { text: "13:00" },
        { text: "13:15" },
        { text: "13:30" },
        { text: "13:45" },
        { text: "14:00" },
        { text: "14:15" },
        { text: "14:30" },
        { text: "14:45" },
        { text: "15:00" },
        { text: "15:15" },
        { text: "15:30" },
        { text: "15:45" },
        { text: "16:00" },
        { text: "16:15" },
        { text: "16:30" },
        { text: "Sopars", disabled: true },
        { text: "19:00" },
        { text: "19:15" },
        { text: "19:30" },
        { text: "19:45" },
        { text: "20:00" },
        { text: "20:15" },
        { text: "20:30" },
        { text: "20:45" },
        { text: "21:00" },
        { text: "21:15" },
        { text: "21:30" },
        { text: "21:45" },
        { text: "22:00" },
        { text: "22:15" },
        { text: "22:30" },
      ],
      intPhoneCodes: [
        { code: "Prefix", disabled: true },
        { code: "Europa", disabled: true },
        { code: "🇬🇷 +30 (Ελλάδα)" },
        { code: "🇳🇱 +31 (Nederland)" },
        { code: "🇧🇪 +32 (Belgique / België)" },
        { code: "🇫🇷 +33 (France)" },
        { code: "🇪🇸 +34 (España)", selected: true },
        { code: "🇬🇮 +350 (Gibraltar)" },
        { code: "🇵🇹 +351 (Portugal)" },
        { code: "🇱🇺 +352 (Luxembourg)" },
        { code: "🇮🇪 +353 (Éire)" },
        { code: "🇮🇸 +354 (Ísland)" },
        { code: "🇦🇱 +355 (Albania / Shqipëri)" },
        { code: "🇲🇹 +356 (Malta)" },
        { code: "🇨🇾 +357 (Κυπριακή Δημοκρατία / Cyprus)" },
        { code: "🇫🇮 +358 (Suomi)" },
        { code: "🇧🇬 +359 (България / Bulgaria)" },
        { code: "🇭🇺 +36 (Magyarország / Hungary)" },
        { code: "🇱🇹 +370 (Lietuva)" },
        { code: "🇱🇻 +371 (Latvija / Latveja / Leţmō)" },
        { code: "🇪🇪 +372 (Eesti)" },
        { code: "🇲🇩 +373 (Moldova)" },
        { code: "🇦🇲 +374 (Հայաստանի Հանրապետություն / Armenia)" },
        { code: "🇧🇾 +375 (Белару́сь / Belarus)" },
        { code: "🇦🇩 +376 (Andorra)" },
        { code: "🇲🇨 +377 (Mùnegu / Monaco)" },
        { code: "🇸🇲 +378 (San Marein / San Marino)" },
        { code: "🇺🇦 +380 (Україна / Ukraine)" },
        { code: "🇷🇸 +381 (Србија / Serbia)" },
        { code: "🇲🇪 +382 (Crna Gora / Црна Гора / Montenegro)" },
        { code: "🇽🇰 +383 (Kosovo)" },
        { code: "🇭🇷 +385 (Hrvatska / Croatia)" },
        { code: "🇸🇮 +386 (Slovenija / Slovenia)" },
        { code: "🇧🇦 +387 (Bosna i Hercegovina / Босна и Херцеговина)" },
        { code: "🇲🇰 +389 (Северна Македонија / North Macedonia)" },
        { code: "🇮🇹 +39 (Italia)" },
        { code: "🇷🇴 +40 (România)" },
        { code: "🇨🇭 +41 (Schweiz / Suisse / Svizzera / Svizra)" },
        { code: "🇨🇿 +420 (Česká republika)" },
        { code: "🇸🇰 +421 (Slovensko)" },
        { code: "🇱🇮 +423 (Liechtenstein)" },
        { code: "🇦🇹 +43 (Österreich)" },
        { code: "🇬🇧 +44 (United Kingdom)" },
        { code: "🇩🇰 +45 (Danmark)" },
        { code: "🇸🇪 +46 (Sverige)" },
        { code: "🇳🇴 +47 (Norge)" },
        { code: "🇵🇱 +48 (Polska)" },
        { code: "🇩🇪 +49 (Deutschland)" },
        { code: "World", disabled: true },
        { code: "🇺🇸🇨🇦 +1 (USA, Canada)" },
      ],
    };
  },
  watch: {
    numPeople() {
      if (this.numPeople >= 1 && this.numPeople <= 12) {
        this.watcherValidation = "";
      } else {
        this.watcherValidation =
          "Siusplau, introdueix un nombre entre l'1 i el 12";
      }
    },
  },
  methods: {
    twoDigitDay(d) {
      return (d.getDate() < 10 ? "0" : "") + d.getDate();
    },
    twoDigitMonth(d) {
      return (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
    },
    validacio() {
      this.validation = "";

      if (this.numPeople >= 1 && this.numPeople <= 12) {
        this.validationPeople = true;
      } else {
        this.validationPeople = false;
      }
    },
    showValidation() {
      if (this.validationPeople == true) {
        alert("TRUE");
      } else if (this.validationPeople == false) {
        alert("FALSE");
      }
    },
  },
};
</script>

<style>
.row {
  margin-right: 0;
}

.inputPeople {
  margin-right: 6px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.foraPL {
  padding-left: 0;
  padding-right: 6px;
}

.foraPR {
  padding-right: 0;
  padding-left: 6px;
}
</style>