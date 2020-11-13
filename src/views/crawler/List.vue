<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Crawler configuration
        </h1>
        <v-btn color="primary" elevation="2" @click="onCreate">Create</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Crawler-List',
  methods: {
    onCreate() {
      this.$router.push('/crawler/213123');
    }
  }
});
</script>
