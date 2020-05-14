<template>
  <v-app class="grey lighten-4">
  <Navbar v-if="$route.Survey!='reset'"/>    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {

    }
  }
}
</script>

<style>
.v-content {
  background-color: #F7FAFF;
}
</style>
