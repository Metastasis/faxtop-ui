<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" sm="6" md="10">
        <h1 class="text-h5 text-md-h2 font-weight-bold mb-4">
          Crawler configuration
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="mb-4 mb-sm-0 align-self-auto align-self-md-center">
        <v-btn color="primary" elevation="2" @click="onCreate">Create</v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col sm="12" md="4" class="sm-6 mb-4">
        <crawl-item />
      </v-col>
      <v-col sm="12" md="4"  class="sm-6 mb-4">
        <crawl-item />
      </v-col>
      <v-col sm="12" md="4"  class="sm-6 mb-4">
        <crawl-item />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col sm="12" md="4" class="sm-6 mb-4">
        <crawl-item />
      </v-col>
      <v-col sm="12" md="4"  class="sm-6 mb-4">
        <crawl-item />
      </v-col>
      <v-col sm="12" md="4"  class="sm-6 mb-4">
        <crawl-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CrawlItem from '@/views/crawler/components/CrawlItem.vue';

export default Vue.extend({
  name: 'Crawler-List',
  components: {
    'crawl-item': CrawlItem
  },
  methods: {
    onCreate() {
      this.$router.push('/crawler/213123');
    }
  }
});
</script>
