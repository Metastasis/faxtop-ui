<template>
  <v-footer app absolute class="indigo lighten-1">
    <v-container fluid>
      <v-row align="center" dense>
        <v-col cols="12" md="4">
          <v-card flat tile class="indigo lighten-1 text-center">
            <v-card-text class="white--text pa-0">
              Faxtop is a crawler app with different integrations for humans
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card flat tile class="indigo lighten-1 text-center pa-0">
            <v-card-text class="pa-0">
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
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card flat tile class="indigo lighten-1 text-center">
            <v-card-text class="white--text pa-0">
              {{ new Date().getFullYear() }} — <strong>Faxtop</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',

  data: () => ({
    socials: [
      {icon: 'mdi-github', href: ''},
      {icon: 'mdi-telegram', href: ''},
      {icon: 'mdi-twitter', href: ''}
    ]
  })
});
</script>
