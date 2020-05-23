<template>
  <v-toolbar class="toolbar">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title><p>{{ title }}</p></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon class="add-recipe">
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    title: String,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolbar {
    background-color: rgb(163, 255, 77) !important;
  }
  .add-recipe {
    color: rgb(58, 102, 64) !important;
  }
</style>
