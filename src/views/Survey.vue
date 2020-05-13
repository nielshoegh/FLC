<template>
  <div class="survey d-flex justify-center">
    <div class="content mx-auto mt-12" style="position:relative; z-index: 99;">
      <p class="sub-heading">Olav de Linde</p>
      <h1 class="headline-1">Ny brugeroprettelse</h1>
      <v-card max-width="800" min-width="800" max-height="500" class="pa-5 my-4 flc-survey-container">
        <div class="intro" v-if="!visible" >
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
            <v-stepper-step :complete="stepper > 1" step="1" editable id="survey">Brugerinformationer</v-stepper-step>

            <v-stepper-content step="1" >
                <v-stepper-title class="heading">
                    Indtast de nødvendige oplysninger for den nye bruger
                </v-stepper-title>
              <v-card class="mb-12" flat>
                <v-text-field class="white" flat v-model="navn" label="Navn"></v-text-field>
                <v-text-field class="white" flat v-model="initialer" label="Initialer"></v-text-field>
                <v-text-field class="white" flat v-model="rettigheder" label="Kopier rettigheder fra bruger"></v-text-field>
                <v-text-field class="white" 
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
                  label="Ønsket password"
                  hint="Skriv dit password her"
                  counter
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-card>
              <v-btn text @click="visible = !visible" >Tilbage</v-btn>
              <v-btn color="primary" @click="stepper = 2">Næste</v-btn>
            </v-stepper-content>
            <!-- STEP 2 -->
            <v-stepper-step :complete="stepper > 2" step="2" editable>Brugertype og tilvalg</v-stepper-step>

            <v-stepper-content step="2">
                <v-stepper-title class="heading">
                    Vælg den ønskede brugertype, mailgruppe og PC til den nye medarbejder
                </v-stepper-title>
              <v-card class="mb-12" flat>
                  <v-select
                  name="brugertype"
                  :items="brugertype"
                  label="Vælg brugertype">
                  </v-select>
                  <v-select
                  name="mailgruppe"
                  :items="mailgruppe"
                  label="Vælg mailgruppe"
                  >
                  </v-select>
                  <v-select
                  name="pc"
                  :items="pcer"
                  label="Vælg PC"
                  >
                  </v-select>
              </v-card>
              <v-btn text @click="stepper = 1" >Tilbage</v-btn>
              <v-btn color="primary" @click="stepper = 3">Næste</v-btn>
              
            </v-stepper-content>
            <!-- STEP 3 -->
            <v-stepper-step :complete="stepper > 3" step="3" editable>Tilbehør</v-stepper-step>

            <v-stepper-content step="3">
                <v-stepper-title class="heading">
                    Vælg tilbehør
                </v-stepper-title>
              <v-card class="mb-12" flat>
                  <v-select
                  name="tilbehor"
                  :items="tilbehor"
                  label="Vælg tilbehør"
                  >
                  </v-select>
              </v-card>
              <v-btn text @click="stepper = 2">Tilbage</v-btn>
              <v-btn color="primary" @click="stepper = 4">Send informationer</v-btn>
              
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
export default {
  name: "Survey",
  data() {
    return {
      visible: false,
      valid: true,
      stepper: 1,
      navn: "",
      initialer: "",
      rettigheder: "",
      brugertype: [
          'Brugertype 1',
          'Brugertype 2',
          'Brugertype 3',
          'Brugertype 4',
          'Brugertype 5',
      ],
      mailgruppe: [
          'Mailgruppe 1',
          'Mailgruppe 2',
          'Mailgruppe 3',
          'Mailgruppe 4',
          'Mailgruppe 5',
      ],
      pcer: [
          'PC 1',
          'PC 2',
          'PC 3',
          'PC 4',
          'PC 5',
          'PC 6',
      ],
      tilbehor: [
          'Tilbehør 1',
          'Tilbehør 2',
          'Tilbehør 3',
          'Tilbehør 4',
          'Tilbehør 5',
      ],
      validateText: [
        v => !!v || "Skriv noget her",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      methods: {
        validate() {
          console.log(this.navn);
        },
        
      },
      showPassword: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }
  }
};
</script>

<style>

.flc-survey-container {
    overflow: scroll;
    
}
#survey-steps {
    transition: .5s ease-in;
}
</style>