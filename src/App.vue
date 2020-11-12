<template>
  <v-app>
    <drawer />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app absolute class="indigo lighten-1">
      <v-container fluid>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="social in socials"
              :key="social.icon"
              class="mx-4 white--text"
              icon
              :href="social.href"
            >
              <v-icon size="24px">
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Faxtop is a crawler app for humans and with different integrations
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Faxtop</strong>
          </v-card-text>
        </v-card>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationDrawer from '@/Drawer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    drawer: NavigationDrawer
  },

  data: () => ({
    socials: [
      {icon: 'mdi-github', href: ''},
      {icon: 'mdi-telegram', href: ''},
      {icon: 'mdi-twitter', href: ''}
    ]
  })
});
</script>
