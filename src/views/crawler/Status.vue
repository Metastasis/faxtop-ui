<template>
  <v-container fluid>
    <v-row dense>
      <v-col class="mb-4">
        <h1 class="text-h5 text-md-h3 font-weight-bold mb-4">
          <v-btn icon medium @click="toList">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          https://google.com
        </h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" md="6">
        <div class="d-flex flex-row align-baseline mb-4">
          <h4 class="text-h4 mr-4">
            Status:
          </h4>
          <h4 class="text-h5">
            running...
          </h4>
        </div>
        <h4 class="text-h4">
          Data
        </h4>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="ml-0 ml-md-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                Export
              </v-list-item-title>
              <v-list-item-subtitle>
                You can export crawled data anywhere you want
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="flex-wrap">
            <v-btn outlined text>
              Google Sheets
            </v-btn>
            <v-btn outlined text>
              Airtable
            </v-btn>
            <v-btn outlined text>
              JSON
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Crawler-Status',
  data: () => ({
    v0: true,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159
      },
      {
        name: 'Ice cream sandwich',
        calories: 237
      },
      {
        name: 'Eclair',
        calories: 262
      },
      {
        name: 'Cupcake',
        calories: 305
      },
      {
        name: 'Gingerbread',
        calories: 356
      },
      {
        name: 'Jelly bean',
        calories: 375
      },
      {
        name: 'Lollipop',
        calories: 392
      },
      {
        name: 'Honeycomb',
        calories: 408
      },
      {
        name: 'Donut',
        calories: 452
      },
      {
        name: 'KitKat',
        calories: 518
      }
    ]
  }),
  methods: {
    toList() {
      this.$router.push('/crawler');
    }
  }
});
</script>
