<template>
  <div id="app">
    <nav>
      <router-link to="/">Головна</router-link> |
      <router-link to="/about">Про нас</router-link> |
      <router-link to="/contact">Контакти</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>