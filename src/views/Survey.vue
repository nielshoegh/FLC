<template>
  <div class="survey d-flex justify-center">
    <div class="content mx-auto mt-12" style="position:relative; z-index: 99;">
      <p class="sub-heading">Olav de Linde</p>
      <h1 class="headline-1">Ny brugeroprettelse</h1>
      <v-card max-width="1000" min-width="800" class="pa-5 my-4">
        <v-card-title class="pt-0">Hej Jeanette</v-card-title>
        <v-card-subtitle>Velkommen til FLCs nye brugeroprettelsesportal</v-card-subtitle>
        <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas quibusdam ad praesentium. Quae ea labore, sit provident doloribus, dolore obcaecati ipsam numquam architecto ex ut rerum dolorem quos?
        </v-card-text>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, officiis?</v-card-text>
        <v-btn tile class="blue darken-3 white--text text-uppercase mx-4 px-6 py-2">Start brugeroprettelse</v-btn>
      </v-card>
    </div>
    <div class="flc-background d-flex" style="height: 100vh; width: 100%; position: absolute; float:left;">
        <div class="flc-white " style="width: 60%;">
            
        </div>
        <div class="flc-blue blue darken-3 white--text" style="width:40%;">
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Survey",
  data() {
    return {};
  }
};
</script>

<style>
</style>