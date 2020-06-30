<template>
  <v-toolbar class="toolbar">
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title><h1>{{ title }}</h1></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon class="add-recipe">
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Toolbar',
  props: {
    title: String,
  },
  data: () => ({
    drawer: null,
  }),
  methods: {
    ...mapMutations(['toggleDrawer']),
    toggleDrawer() {
      this.drawer = this.$store.getters.drawerStatus;
      this.$store.commit('toggleDrawer', !this.drawer);
    },
  },
};

</script>

<style scoped>
  .toolbar {
    background-color: rgb(163, 255, 77) !important;
  }
  .add-recipe {
    color: rgb(58, 102, 64) !important;
  }
</style>
