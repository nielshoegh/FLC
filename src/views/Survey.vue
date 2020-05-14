<template>
  <div class="survey d-flex justify-center">
    <div class="content mx-auto mt-12" style="position:relative; z-index: 99;">
      <p class="sub-heading">Olav de Linde</p>
      <h1 class="headline-1">Ny brugeroprettelse</h1>
      <v-card
        max-width="800"
        min-width="800"
        max-height="500"
        class="pa-5 my-4 flc-survey-container"
      >
        <div class="intro" v-if="!visible">
          <v-card-title class="pt-0">Hej Jeanette</v-card-title>
          <v-card-subtitle>Velkommen til FLCs nye brugeroprettelsesportal</v-card-subtitle>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas quibusdam ad praesentium. Quae ea labore, sit provident doloribus, dolore obcaecati ipsam numquam architecto ex ut rerum dolorem quos?</v-card-text>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, officiis?</v-card-text>
          <v-btn
            @click="visible = !visible"
            tile
            class="blue darken-3 white--text text-uppercase mx-4 px-6 py-2"
          >Start brugeroprettelse</v-btn>
        </div>
        <!-- V-STEPPER START -->
        <v-form id="survey-steps" v-if="visible">
          <v-stepper v-model="stepper" vertical class="elevation-0">
            <!-- STEP 1 -->
            <v-stepper-step
              :complete="stepper > 1"
              step="1"
              editable
              id="survey"
            >Brugerinformationer</v-stepper-step>

            <v-stepper-content step="1">
              <v-stepper-title class="heading">Indtast de nødvendige oplysninger for den nye bruger</v-stepper-title>
              <v-card class="mb-12" flat>
                <v-text-field class="white" flat v-model="navn" label="Navn"></v-text-field>
                <v-text-field class="white" flat v-model="initialer" label="Initialer"></v-text-field>
                <v-text-field
                  class="white"
                  flat
                  v-model="rettigheder"
                  label="Kopier rettigheder fra bruger"
                ></v-text-field>
                <v-text-field
                  class="white"
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
                  label="Ønsket password"
                  hint="Skriv dit password her"
                  counter
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <p>Lokation:</p>

                <v-checkbox class="mr-7 mt-0" v-model="lokation" value="aarhus" label="Aarhus"></v-checkbox>
                <v-checkbox class="mt-0" v-model="lokation" value="odense" label="Odense"></v-checkbox>
              </v-card>
              <v-btn text @click="visible = !visible">Tilbage</v-btn>
              <v-btn color="primary" @click="stepper = 2">Næste</v-btn>
            </v-stepper-content>
            <!-- STEP 2 -->
            <v-stepper-step :complete="stepper > 2" step="2" editable>Brugertype og tilvalg</v-stepper-step>

            <v-stepper-content step="2">
              <v-stepper-title
                class="heading"
              >Vælg den ønskede brugertype, mailgruppe og PC til den nye medarbejder</v-stepper-title>
              <v-card class="mb-12" flat>
                <v-select
                  name="brugertype"
                  v-model="brugertype"
                  :items="brugertyper"
                  label="Brugertype tilvalg"
                ></v-select>
                <v-select
                  name="mailgruppe"
                  v-model="mailgruppe"
                  :items="mailgrupper"
                  label="Vælg mailgruppe"
                ></v-select>
                <v-select name="pc" v-model="pcer" :items="pcere" label="Vælg PC"></v-select>
              </v-card>
              <v-btn text @click="stepper = 1">Tilbage</v-btn>
              <v-btn color="primary" @click="stepper = 3">Næste</v-btn>
            </v-stepper-content>
            <!-- STEP 3 -->
            <v-stepper-step :complete="stepper > 3" step="3" editable>Tilbehør</v-stepper-step>

            <v-stepper-content step="3">
              <v-stepper-title class="heading">Vælg tilbehør</v-stepper-title>
              <v-card class="mb-12" flat>
                <v-select
                  name="tilbehor"
                  v-model="tilbehor"
                  :items="tilbehore"
                  label="Vælg tilbehør"
                ></v-select>
              </v-card>
              <v-btn text @click="stepper = 2">Tilbage</v-btn>
              <v-btn color="primary" v-on:click="submit">Send informationer</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-form>
      </v-card>
    </div>
    <div
      class="flc-background d-flex"
      style="height: 100vh; width: 100%; position: absolute; float:left;"
    >
      <div class="flc-white" style="width: 60%;"></div>
      <div class="flc-blue blue darken-3 white--text" style="width:40%;"></div>
    </div>
  </div>
</template>

<script>
import db from "@/fb.js";

export default {
  name: "Survey",
  data() {
    return {
      lokation: "",
      virksomhed: "Olav de Linde",
      visible: false,
      valid: true,
      stepper: 1,
      navn: "",
      initialer: "",
      rettigheder: "",
      brugertyper: [
        "Ledelse",
        "Administration",
        "Udlejning",
        "Tegnestue",
        "Vicevært"
      ],
      mailgrupper: [
        "Alle",
        "Aarhus",
        "Odense",
        "Viceværter Aarhus",
        "Viceværter Odense"
      ],
      pcere: [
        "Genbrug af eksisterende klientudstyr",
        "Ledelse - bærebar",
        "Tegnestue - stationær workstation",
        "Tegnestue - bærbar workstation",
        "Administration - bærbar",
        "Udlejning - stationær"
      ],
      tilbehore: [
        "Skærme genbruges",
        "1 ny skærm",
        "2 nye skræme",
        "Mus og tastatur",
        "Dockingstation"
      ],
      showPassword: false,
      password: "Password"
    };
  },
  methods: {
    submit() {
      const brugeroprettelse = {
        virksomhed: this.virksomhed,
        navn: this.navn,
        initialer: this.initialer,
        rettigheder: this.rettigheder,
        mailgruppe: this.mailgruppe,
        brugertype: this.brugertype,
        pc: this.pcer,
        tilbehor: this.tilbehor,
        password: this.password,
        lokation: this.lokation
      };
      db.collection("brugeroprettelser")
        .add(brugeroprettelse)
        .then(() => {
          console.log("Added to db");
        });
    }
  }
};
</script>

<style>
.flc-survey-container {
  overflow: scroll;
}
</style>