<template>
  <div>
    <div class="form-group mt-4">
      <form class="formReserva">

        <!-- Petit missatge legal -->
        <h4>Un apunt final</h4>
        <br />
        <p class="text-start margins">
          <small>
            👉 No utilitzarem les teves dades per a finalitats comercials ni
            tampoc en realitzarem cap cessió a tercers.
          </small>
        </p>
        <p class="text-start margins">
          <small>
            🗄️ Les teves dades seran emmagatzemades un màxim de 72 hores a la
            nostra base de dades, comptant des de l'hora d'arribada al
            restaurant.
          </small>
        </p>
        <p class="text-start margins">
          <small>
            📲 Durant aquestes 72 hores podem utilitzar les teves dades per a
            contactar-te en cas que sigui necessari (recordatori, cancel·lació o
            altres motius).
          </small>
        </p>
        <br />

        <!-- Acceptar legal -->
        <!-- Button trigger modal -->
        <div class="mb-2">
          <button
            type="button"
            class="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#modalLegal"
          >
            Llegir les condicions legals
          </button>
        </div>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt et non rerum optio quia aspernatur nemo, minus repellat
                illo rem, perferendis cupiditate vel? Dignissimos earum suscipit
                possimus cumque similique doloremque.
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
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                v-model="checkLegal"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Accepto les condicions d'ús, la política de privacitat i el
                tractament de dades personals.
              </label>
            </div>
            <div class="col-2"></div>
            <small class="text-danger">{{ watcherCheckLegal }}</small>
          </div>
        </div>

        <!-- Botó confirm & enviar -->
        <div class="mt-4 mb-4">
          <button
            type="submit"
            class="btn btn-lg btn-success"
            @click="showValidation()"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { projectFirestore } from '../firebase/config'

export default {
  name: "ReservaOne",
  data() {
    return {
      //Número de persones
      numPeople: 1,
      validationPeople: true,
      //Data
      selectedDate: String,
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
      //Hora
      hourOptions: [
        { text: "Selecciona una hora", disabled: true },
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
      //Pref. taula
      prefTaula: "",
      validationTaula: false,
      watcherGivenPreference: "/",
      watcherGivenPreferenceStatus: Boolean,
      //Nom
      givenName: "",
      validationName: false,
      watcherGivenName: "/",
      watcherGivenNameStatus: Boolean,
      //Cognoms
      givenSurname: "",
      validationSurname: false,
      watcherGivenSurname: "/",
      watcherGivenSurnameStatus: Boolean,
      //Email
      givenEmail: "",
      validationEmail: false,
      watcherGivenEmail: "/",
      watcherGivenEmailStatus: Boolean,
      //Tlf
      givenPhone: "",
      validationPhone: false,
      watcherGivenPhone: "/",
      watcherGivenPhoneStatus: Boolean,
      phoneWatcher: String,
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
        { code: "America (North American Numbering Plan)", disabled: true },
        { code: "🇨🇦 +1 (Canada)" },
        { code: "🇺🇸 +1 (United States of America)" },
        { code: "+1 (Other American Territories)" },
        { code: "Asia", disabled: true },
        { code: "🇷🇺+7 (Россия / Russia)" },
        { code: "Rest of the World", disabled: true },
        { code: "Indicate your prefix code in the next camp" },
      ],
      //Obs
      //Condicions legals
      checkLegal: false,
      watcherCheckLegalStatus: Boolean,
    };
  },
  watch: {
    prefTaula() {
      if (this.prefTaula == "") {
        this.watcherGivenPreference =
          "Siusplau, indica una preferència de taula";
        this.watcherGivenPreferenceStatus = false;
      } else if (this.prefTaula == "Interior" || this.prefTaula == "Terrassa") {
        this.watcherGivenPreference = "/";
        this.watcherGivenPreferenceStatus = true;
      }
    },
    givenName() {
      //Recordatori preferència de taula, introduït abans del nom es mostrarà el missatge d'error en cas que no s'hagi seleccionat taula
      if (this.prefTaula == "") {
        this.watcherGivenPreference =
          "Siusplau, indica una preferència de taula";
        this.watcherGivenPreferenceStatus = false;
      }
      //if i no else if
      if (this.givenName == "") {
        this.watcherGivenName = "Siusplau, introdueix un nom";
        this.watcherGivenNameStatus = false;
      } else if (this.givenName.match(/\p{L}/)) {
        this.watcherGivenName = "Nom validat correctament";
        this.watcherGivenNameStatus = true;
      }
    },
    givenSurname() {
      if (this.givenSurname == "") {
        this.watcherGivenSurname = "Siusplau, introdueix un cognom";
        this.watcherGivenSurnameStatus = false;
      } else if (this.givenSurname.match(/\p{L}/)) {
        this.watcherGivenSurname = "Cognom validat correctament";
        this.watcherGivenSurnameStatus = true;
      }
    },
    givenEmail() {
      if (this.givenEmail == "") {
        this.watcherGivenEmail = "Siusplau, introdueix un email";
        this.watcherGivenEmailStatus = false;
      } else if (
        this.givenEmail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        this.watcherGivenEmail = "Email validat correctament";
        this.watcherGivenEmailStatus = true;
      } else if (
        !this.givenEmail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        this.watcherGivenEmail = "Email no vàlid";
        this.watcherGivenEmailStatus = false;
      }
    },
    givenPhone() {
      if (this.givenPhone == "") {
        this.watcherGivenPhone = "Siusplau, introdueix un telèfon";
        this.watcherGivenPhoneStatus = false;
      }
    },
    checkLegal() {
      if (this.checkLegal == false) {
        this.watcherCheckLegal =
          "Sense acceptar aquesta casella no es pot enviar el formulari";
        this.watcherCheckLegalStatus == false;
      } else if (this.checkLegal == true) {
        this.watcherCheckLegal = "";
        this.watcherCheckLegalStatus == true;
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
      //Validació Número de Persones
      if (this.numPeople >= 1 && this.numPeople <= 12) {
        this.validationPeople = true;
      } else {
        this.validationPeople = false;
      }
      //Validació Data
      //Validació Check Taula
      if (this.prefTaula == "") {
        this.validationTaula = false;
      } else if (this.prefTaula == "Interior" || this.prefTaula == "Terrassa") {
        this.validationTaula = true;
      }
      //Validació Nom
      if (this.givenName == "") {
        this.validationName = false;
      } else if (this.givenName != "") {
        this.validationName = true;
      }
      //Validació Cognom
      if (this.givenSurname == "") {
        this.validationSurname = false;
      } else if (this.givenSurname != "") {
        this.validationSurname = true;
      }
      //Validació Email
      if (this.givenEmail == "") {
        this.validationEmail = false;
      } else if (
        this.givenEmail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        this.validationEmail = true;
      } else {
        this.validationEmail = false;
      }
      //Validació Phone
      if (this.givenPhone == "") {
        this.validationPhone = false;
      } else if (this.givenPhone.match(/\d+/g)) {
        this.validationPhone = true;
      } else {
        this.validationPhone = false;
      }
      //Validació Check Legal
    },
    showValidation() {
      if (this.checkLegal == false) {
        this.watcherCheckLegal =
          "Sense acceptar aquesta casella no es pot enviar el formulari";
        this.watcherCheckLegalStatus == false;
      }

      if (
        this.validationPeople &&
        this.validationTaula &&
        this.validationName &&
        this.validationSurname &&
        this.validationEmail &&
        this.validationPhone &&
        this.checkLegal == true
      ) {
        alert("TRUE");
        return true;
      } else if (
        this.validationPeople &&
        this.validationTaula &&
        this.validationName &&
        this.validationSurname &&
        this.validationEmail &&
        this.validationPhone &&
        this.checkLegal == false
      ) {
        alert("FALSE");
        return false;
      } else {
        alert("ELSE");
        return false;
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

.margins {
  margin-left: 10px;
  margin-right: 10px;
}
</style>