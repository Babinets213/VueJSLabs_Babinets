<!-- BookingList.vue (список бронювань) -->
<template>
  <ul class="booking-list">
    <li v-for="booking in bookings" :key="booking.id">
      {{ booking.name }} - {{ booking.date }} о {{ booking.time }}
      <button @click="$emit('delete-booking', booking.id)">Видалити</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["bookings"]
};
</script>

<style scoped>
.booking-list li {
  list-style: none;
  padding: 8px;
  margin: 5px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.booking-list button {
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.booking-list button:hover {
  background: darkred;
}
</style>