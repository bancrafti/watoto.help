<template>
  <div class="admin-panel">
    <h1>Donation Submissions</h1>

    <table v-if="donations.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Donation Type</th>
          <th>Goods Type</th>
          <th>Services Type</th>
          <th>Payment Method</th>
          <th>Purpose</th>
          <th>Preferences</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donation in donations" :key="donation._id">
          <td>{{ donation.name }}</td>
          <td>{{ donation.type }}</td>
          <td>{{ donation.phone }}</td>
          <td>{{ donation.location }}</td>
          <td>{{ donation.donationType }}</td>
          <td>{{ donation.goodsType || '-' }}</td>
          <td>{{ donation.servicesType || '-' }}</td>
          <td>{{ donation.paymentMethod || '-' }}</td>
          <td>{{ donation.purpose }}</td>
          <td>{{ donation.preferences }}</td>
          <td>{{ formatDate(donation.date) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No donations found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const donations = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/donations')
    donations.value = res.data
  } catch (error) {
    console.error('Failed to fetch donations:', error)
  }
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleString() // Customize this format as needed
}
</script>

<style scoped>
.admin-panel {
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fefaf0;
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #8c5c38;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 12px 16px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #e5d4c0;
  color: #8c5c38;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

p {
  text-align: center;
  margin-top: 20px;
  color: #777;
}
</style>
