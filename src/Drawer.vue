<template>
  <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-btn v-show="mini" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <router-link v-show="!mini" to="/" v-slot="{href, route, navigate}">
          <v-btn icon :href="href" @click="navigate">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>
      </v-list-item-avatar>
      <v-list-item-title>Faxtop</v-list-item-title>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  name: 'Drawer',

  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        {title: 'Crawler', icon: 'mdi-format-float-left', to: '/crawler'},
        {title: 'Settings', icon: 'mdi-cog', to: '/settings'},
        {title: 'About', icon: 'mdi-help-box', to: '/about'}
      ]
    };
  }
};
</script>
