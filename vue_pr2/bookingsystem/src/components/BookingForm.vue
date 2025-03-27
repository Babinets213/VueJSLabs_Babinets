<template>
  <div class="booking-form">
    <input v-model="name" placeholder="Ім'я" />
    <input v-model="date" type="date" />
    <input v-model="time" type="time" />
    <button @click="submitBooking">Забронювати</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      date: "",
      time: ""
    };
  },
  methods: {
    submitBooking() {
      if (this.name && this.date && this.time) {
        this.$emit("add-booking", {name: this.name, date: this.date, time: this.time});
        this.name = "";
        this.date = "";
        this.time = "";
      }
    }
  }
};
</script>

<style scoped>
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
  width: 90%;
  padding: 14px;
  border: 2px solid #28a745;
  border-radius: 15px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s;
}

.booking-form input:focus {
  border-color: #218838;
}

.booking-form button {
  padding: 14px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  width: 90%;
  margin: 0 auto;
}

.booking-form button:hover {
  background-color: #218838;
}
</style>
