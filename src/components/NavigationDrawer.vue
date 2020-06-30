<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: 'NavigationDrawer',
  props: {
  },
  data: () => ({
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawerStatus;
      },
      set(v) {
        if (v) {
          return null;
        }
        return this.$store.commit('toggleDrawer', v);
      },
    },
  },
};
</script>

<style scoped>

</style>
