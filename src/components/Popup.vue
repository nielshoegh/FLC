<template>
  <div>
    <v-row justify="center">
      <v-btn color="primary" class="ml-6" dark @click="dialog2 = true">
        <v-icon>add</v-icon>OPRET NY BRUGER
      </v-btn>

      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title class="blue--text">Opret ny bruger</v-card-title>
          <v-card-text>
            <v-autocomplete v-model="value" :items="items" dense filled label="Filled" background-color="transparent" prepend-icon="mdi-database-search"
></v-autocomplete>
            <v-select :items="select" label="Modtager" item-value="text" class=""></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me"
        },
        {
          title: "Click Me"
        },
        {
          title: "Click Me"
        },
        {
          title: "Click Me 2"
        }
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" }
      ]
    };
  }
};
</script>

<style>
</style>