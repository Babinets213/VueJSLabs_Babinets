<template>
    <div>
      <h2>Лічильник: {{ count }}</h2>
      <button @click="increment">Збільшити</button>
      <button @click="decrement">Зменшити</button>
      <button @click="asyncIncrement">Збільшити з затримкою</button>
      <p>Подвоєне значення: {{ doubleCount }}</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'CounterComponent', // ✅ Додаємо ім'я компонента з кількох слів
    computed: {
      ...mapState(['count']),
      ...mapGetters(['doubleCount'])
    },
    methods: {
      ...mapMutations(['increment', 'decrement']),
      ...mapActions(['asyncIncrement'])
    }
  };
  </script>
  