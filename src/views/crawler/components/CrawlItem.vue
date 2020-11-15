<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Running...
        </div>
        <v-list-item-title class="headline mb-1">
          https://google.com
        </v-list-item-title>
        <v-list-item-subtitle>
          Greyhound divisely hello coldly fonwderfully
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined text @click="$emit('view', '123123')">
        View
      </v-btn>
      <v-btn outlined text @click="$emit('edit', '123123')">
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
