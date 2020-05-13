<template>
  <div class="dashboard d-flex">
    <v-container class="col-sm-8">
    <v-card class="ma-4">
      <div class="flc-top-containers">
      <v-card-title>Brugeroprettelser</v-card-title>
      <v-text-field class="pa-4 flc-search"
        v-model="search"
        append-icon="mdi-magnify"
        label="search"
        single-line
        hide-details
      ></v-text-field>
      </div>

      <v-data-table class="flc-data-containers"
        :headers="headers"
        :items="brugeroprettelser"
        :search="search"
        hide-default-footer
      ></v-data-table>
    </v-card>
    </v-container>
    <v-container class="col-4"><p>test</p></v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: '',
          align: "start",
          name: '',
          sortable: false,
        },
        { text: "Virksomhed", class:'blue darken-2 white--text subtitle-1', value: "virk" },
        { text: "Initialer", class:'blue darken-2 white--text subtitle-1', value: "ini" },
        { text: "Modtagelsesdato", class:'blue darken-2 white--text subtitle-1', value: "mdato" },
        { text: "Deadline", class:'blue darken-2 white--text subtitle-1', value: "ddato" },
        { text: "Prioritet", class:'blue darken-2 white--text subtitle-1', value: "prio" }
      ],
      brugeroprettelser: [
        {
          virk: 'Olav de Linde',
          name: 2,
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'Advokaterne der gemmer alt deres lort i den der sky',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
        {
          virk: 'BOlav de Linde',
          ini: 'JLP',
          mdato: '21-05-2020',
          ddato: '26-05-2020',
          prio: '3',
        },
      ]
                
      
    };
  }
};
</script>

<style scoped>
.flc-top-containers {
  display:flex;
}

.flc-search {
  float:right;
  width:60%;
}
.text-start {
  padding:0;
}

.flc-data-containers{
  overflow:scroll;
  max-height:400px;
  min-height:350px;
  
  
}

</style>