<template>
  <v-app>
    <drawer />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationDrawer from '@/Drawer.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    drawer: NavigationDrawer,
    'app-footer': Footer
  }
});
</script>
