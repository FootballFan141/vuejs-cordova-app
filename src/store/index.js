import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerStatus: false,
    recipes: [
      { id: 0, title: 'slow cooker mashed potatoes' },
      { id: 1, title: 'Chicken Parmesan' },
    ],
  },
  mutations: {
    toggleDrawer(state, data) {
      state.drawerStatus = data;
    },
    deleteRecipe(state, data) {
      state.recipes.splice(state.recipes.indexOf(data), 1);
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    drawerStatus: (state) => state.drawerStatus,
    recipes: (state) => state.recipes,
  },
});
