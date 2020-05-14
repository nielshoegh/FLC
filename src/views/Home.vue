<template>
  <div class="dashboard d-flex">
    <v-container class="col-sm-8">
      <v-card class="ma-4" height="400px">
        <div class="flc-top-containers">
          <v-card-title>Brugeroprettelser</v-card-title>
          <v-text-field
            class="pa-4 flc-search"
            v-model="search"
            append-icon="mdi-magnify"
            label="search"
            single-line
            hide-details
          ></v-text-field>
        </div>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Virksomhed</th>
              <th class="text-left">Initialer</th>
              <th class="text-left">Modtagelsesdato</th>
              <th class="text-left">Deadline</th>
              <th class="text-left">Prioritet</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(brugeroprettelse, index) in brugeroprettelser"
              :key="index.brugeroprettelse"
            >
              <td>{{ brugeroprettelse.virksomhed }}</td>
              <td>{{brugeroprettelse.initialer}}</td>
              <td>{{brugeroprettelse.lokation}}</td>
              <td>{{brugeroprettelse.pc}}</td>
              <td>{{brugeroprettelse.brugertype}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-container>

    <v-container class="col-sm-4">
      <v-card class="mx-auto kundefokus ma-4" height="400px">
        <v-card-text>
          <v-card-title class="white--text">Kundefokus</v-card-title>
          <p class="display-1 white--text">Innova Advokatfirma</p>
          <p class="white--text"><strong st>Kategori:</strong> Ny kunde</p>
          <p class="white--text">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
    
</template>

<script>
import db from "@/fb.js";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "",
          align: "start",
          name: "",
          sortable: false
        },
        {
          text: "Virksomhed",
          class: "blue darken-2 white--text subtitle-1",
          value: "virk"
        },
        {
          text: "Initialer",
          class: "blue darken-2 white--text subtitle-1",
          value: "ini"
        },
        {
          text: "Modtagelsesdato",
          class: "blue darken-2 white--text subtitle-1",
          value: "mdato"
        },
        {
          text: "Deadline",
          class: "blue darken-2 white--text subtitle-1",
          value: "ddato"
        },
        {
          text: "Prioritet",
          class: "blue darken-2 white--text subtitle-1",
          value: "prio"
        }
      ],
      brugeroprettelser: [{}]
    };
  },
  created() {
    db.collection("brugeroprettelser").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.brugeroprettelser.push({
            ...change.doc.data()
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.flc-top-containers {
  display: flex;
}

.flc-search {
  float: right;
  width: 60%;
}
.text-start {
  padding: 0;
}

.flc-data-containers {
  overflow: scroll;
  max-height: 400px;
  min-height: 350px;
}

.kundefokus {
  background-color: #0086FF;
} 


</style>