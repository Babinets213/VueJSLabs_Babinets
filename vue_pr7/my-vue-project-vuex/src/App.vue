<template>
  <div id="app">
    <h1>Додаток з використанням Vuex</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    Counter
  }
};
</script>