<template>
  <div id="container">
    <Toolbar title="Recipes Dashboard"/>
    <div id="app">
      <Content />
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Content,
  },
};
</script>

<style>
body {
  background-color: rgb(177, 177, 177);
}
#container {
  background-color: rgb(233, 233, 233);
  min-height: 400px;
  box-shadow: 1px -5px 10px 2px rgb(0, 0, 0);
  margin-bottom: 15%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  margin: 30px;
  padding-bottom: 20px;
  color: rgb(255, 0, 0) !important;
}
</style>
