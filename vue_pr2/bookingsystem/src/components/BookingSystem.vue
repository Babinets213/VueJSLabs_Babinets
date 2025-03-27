<template>
  <div class="booking-system">
    <h2>Система бронювання</h2>
    <BookingForm @add-booking="addBooking" />
    <BookingList :bookings="bookings" @delete-booking="deleteBooking" />
  </div>
</template>

<script>
import BookingForm from "./BookingForm.vue";
import BookingList from "./BookingList.vue";

export default {
  components: { BookingForm, BookingList },
  data() {
    return {
      bookings: []
    };
  },
  methods: {
    addBooking(booking) {
      this.bookings.push({ ...booking, id: Date.now() });
    },
    deleteBooking(id) {
      this.bookings = this.bookings.filter(b => b.id !== id);
    }
  }
};
</script>

<style scoped>
.booking-system {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.booking-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
}

.booking-form button {
  padding: 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.booking-form button:hover {
  background-color: #218838;
}

.booking-list {
  margin-top: 20px;
}

.booking-list ul {
  padding: 0;
}

.booking-list li {
  list-style: none;
  padding: 10px;
  margin: 5px 0;
  background: #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.booking-list button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.booking-list button:hover {
  background-color: #c82333;
}
</style>
