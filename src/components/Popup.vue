<template>
  <div>
    <v-row justify="center">
      <v-btn color="primary" class="ml-6" dark @click="dialog2 = true">
        <v-icon>add</v-icon>OPRET NY BRUGER
      </v-btn>

      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title class="blue--text">Opret ny bruger</v-card-title>
          <v-form class="pa-6">
              
            <v-text-field flat v-model="virk" label="Virksomhed" ></v-text-field>
            <v-select 
            name="modtager"
            v-model="modtager"
            :items="modtagere"
            label="Vælg modtager"></v-select>

            <v-checkbox class="mr-7 mt-0" label="Anden modtager"></v-checkbox>
            <v-checkbox class="mt-0" label="Vælg afdeling"></v-checkbox>
            <router-link to="/survey">
            <v-btn @click="nyOprettelse(), dialog2 = false" class="blue" dark>Send link til brugeroprettelse </v-btn>
            </router-link>

          </v-form>
          

          <v-card-actions class="right-corner" @click="dialog2 = false">
            <v-icon class="mt-1 red--text">close</v-icon>
            <!-- <v-btn color="primary" text @click="dialog2 = false">Close</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>


<script>
import db from "@/fb.js";

export default {


  data() {
    return {
        virk: "",
        modtager: "",
        
      modtagere: [
          "Jeanette, JHG",
          "Peter, PTH",
          "Sofie, SOF",
          "Jonas, JLP",
          "Ulrik, UO",
          "Tina, TUA"
      ],
      dialog2: false
    };
  },
  methods: {
      nyOprettelse() {
          const nybruger = {
              virksomhed: this.virk,
              modtager: this.modtager
          };
          db.collection("nybrugeroprettelse").add(nybruger).then(() => {
              this.dialog2 = false;
          })

      }
  }
};
</script>

<style>

.right-corner {
    cursor: pointer;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
}

</style>