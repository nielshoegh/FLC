<template>
  <nav>
    <v-toolbar flat>
      <v-btn text @click="drawer = !drawer">
        <v-icon class="grey--text">menu</v-icon>
      </v-btn>
      <!-- <v-toolbar-title class="grey--text">
              <span class="font-weight-light">FLC</span>
              <span class="font-weight-bold text-uppercase">Syncronize</span>
      </v-toolbar-title>-->
      <v-spacer></v-spacer>
      <v-btn color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app permanent v-model="drawer">
      <v-list-item class="py-5 pt-12">
        <v-list-item-content>
          <v-img src="../assets/flc-syncronize-logo.svg" max-width="190" class="mx-auto"></v-img>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
          <!-- Opret ny bruger knap - COMPONENT -->
        <Popup />
      </v-list-item>
          <!-- -->
      <v-list class="mt-6">
          <!-- Navigation links -->
        <v-list-item v-for="nav in navigation" :key="nav.title" link>
          <v-list-item-icon>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <!--  -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'

export default {
  components: { Popup },
  data() {
    return {
      drawer: true,

      navigation: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Brugeroprettelser", icon: "description" },
        { title: "Årsmøder", icon: "forum" },
        { title: "Guides", icon: "find_in_page" },
        { title: "Screen manager", icon: "tv" }
      ]
    };
  }
};
</script>
<style>
.v-toolbar__content {
  background-color: #F7FAFF;
}
</style>