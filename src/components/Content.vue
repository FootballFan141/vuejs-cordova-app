<template>
<div class="listview">
    <transition-group name="list" tag="p">
      <v-list-item two-line class="recipe-list-item"
          v-for="(recipe) in recipes"
          :key="recipe.id">
        <v-list-item-content>
          <v-list-item-title class="recipe-title">
              {{ recipe.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-btn icon class="remove-recipe" @click="deleteRecipe(recipe)">
          <v-icon>mdi-minus-circle</v-icon>
        </v-btn>
      </v-list-item>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
  },
  data: () => ({
    recipes: [
      { id: 0, title: 'slow cooker mashed potatoes' },
      { id: 1, title: 'Chicken Parmesan' },
    ],
  }),
  methods: {
    deleteRecipe(recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe-list-item {
  border-left: rgb(0, 0, 0) 0.5px solid;
  border-right: rgb(0, 0, 0) 0.5px solid;
}
.recipe-list-item:first-child {
  border-top: rgb(0, 0, 0) 0.5px solid;
}
.recipe-list-item:nth-child(n+1) {
  border-bottom: rgb(0, 0, 0) 0.5px dashed;
}
.recipe-list-item:last-child {
  border-bottom: rgb(0, 0, 0) 0.5px solid;
}
.recipe-title {
  text-align: left;
  text-transform: capitalize;
}
.remove-recipe {
  color: rgb(255, 0, 0) !important;
  text-align: right;
}
.list-enter-active, .list-leave-active {
  transition: all 0.4s;
  opacity: 0;
}
</style>
