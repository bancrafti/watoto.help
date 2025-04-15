<template>
  <div class="admin-panel">
    <h1>Donation Submissions</h1>

    <div v-if="isLoading" class="loading">Loading donations...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else>
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
            <td>{{ donation.location || '-' }}</td>
            <td>{{ donation.donationType }}</td>
            <td>{{ donation.goodsType || '-' }}</td>
            <td>{{ donation.servicesType || '-' }}</td>
            <td>{{ donation.paymentMethod || '-' }}</td>
            <td>{{ donation.purpose || '-' }}</td>
            <td>{{ donation.preferences || '-' }}</td>
            <td>{{ formatDate(donation.date) }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else class="no-data">No donations found.</p>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { API_BASE_URL } from '@/config/api'

const router = useRouter()
const donations = ref([])
const isLoading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const response = await axios.get(`${API_BASE_URL}/donations`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.data.status === 'success') {
      donations.value = response.data.data.donations
    }
  } catch (error) {
    console.error('Failed to fetch donations:', error)
    if (error.response?.status === 401) {
      router.push('/login')
    } else {
      error.value = 'Failed to load donations. Please try again later.'
    }
  } finally {
    isLoading.value = false
  }
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
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

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #8c5c38;
  color: white;
  font-weight: 600;
}

tr:hover {
  background-color: #f5f5f5;
}

.loading, .error, .no-data {
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  color: #666;
}

.error {
  color: #d9534f;
}
</style>
