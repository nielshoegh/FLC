<template>
  <nav>
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
        <v-list-item v-for="nav in navigation" :key="nav.title" router :to="nav.route">
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
    <v-btn icon class="signout white--text"><v-icon>exit_to_app</v-icon></v-btn>
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
        { title: "Dashboard", icon: "dashboard", route: '/'},
        { title: "Brugeroprettelser", icon: "description" },
        { title: "Årsmøder", icon: "forum" },
        { title: "Guides", icon: "find_in_page" },
        { title: "Screen manager", icon: "tv" },
        { title: "Survey", icon: "link", route: '/survey' },
      ]
    };
  }
};
</script>
<style>
.v-toolbar__content {
  background-color: #F7FAFF;
}

.signout {
  width: 200px;
  height:200px;
  position: absolute;
  top:0;
  right:0;
  z-index:200;
}
</style>