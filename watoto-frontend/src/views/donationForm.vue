<template>
  <div class="container">
    <h1>Make a Donation</h1>

    <form @submit.prevent="submitForm">
      <label for="type">I am a:</label>
      <select id="type" v-model="form.type" required>
        <option value="">-- Select --</option>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
      </select>

      <label for="name">Full Name</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        placeholder="Enter your full name"
        required
        readonly
        :class="{ 'readonly-input': true }"
      />

      <label for="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        v-model="form.phone"
        placeholder="e.g. 712345678"
        required
        pattern="^7\d{8}$"
        maxlength="9"
        @input="formatPhoneNumber"
      />
      <div class="hint">Enter number starting with 7 (no +254)</div>

      <label for="location">Location (Optional)</label>
      <input
        type="text"
        id="location"
        v-model="form.location"
        placeholder="City, County"
      />

      <label for="donation-type">Donation Type</label>
      <select id="donation-type" v-model="form.donationType" required>
        <option value="">-- Select --</option>
        <option value="money">Money</option>
        <option value="goods">Goods</option>
        <option value="services">Services</option>
      </select>

      <!-- Goods Section -->
      <div v-if="form.donationType === 'goods'">
        <label for="goods-type">Goods Type</label>
        <select id="goods-type" v-model="form.goodsType" required>
          <option value="">-- Choose Goods --</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="school">School Supplies</option>
          <option value="toiletries">Toiletries</option>
        </select>
      </div>

      <!-- Services Section -->
      <div v-if="form.donationType === 'services'">
        <label for="services-type">Service Type</label>
        <select id="services-type" v-model="form.servicesType" required>
          <option value="">-- Choose Service --</option>
          <option value="medical">Medical</option>
          <option value="teaching">Teaching</option>
          <option value="counselling">Counselling</option>
          <option value="it">IT Support</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      <!-- Money Section -->
      <div v-if="form.donationType === 'money'">
        <label for="payment-method">Payment Method</label>
        <select id="payment-method" v-model="form.paymentMethod" required>
          <option value="">-- Select Payment Method --</option>
          <option value="mpesa">M-Pesa</option>
          <option value="bank">Bank Transfer</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <label for="purpose">Purpose of Donation</label>
      <textarea
        id="purpose"
        v-model="form.purpose"
        rows="3"
        placeholder="Why are you donating?"
      ></textarea>

      <label for="preferences">Consent & Preferences</label>
      <select id="preferences" v-model="form.preferences">
        <option value="">-- Select --</option>
        <option value="receipt">Send me a receipt</option>
        <option value="updates">Send me updates</option>
        <option value="anonymous">Keep me anonymous</option>
        <option value="future">Contact me in future</option>
      </select>

      <button type="submit">Submit Donation</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { API_BASE_URL } from '@/config/api'

const router = useRouter()
const form = ref({
  type: '',
  name: '',
  phone: '',
  location: '',
  donationType: '',
  goodsType: '',
  servicesType: '',
  paymentMethod: '',
  purpose: '',
  preferences: '',
  date: new Date().toISOString()
})

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.data.data.user) {
      form.value.name = response.data.data.user.name
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    if (error.response?.status === 401) {
      router.push('/login')
    }
  }
})

const formatPhoneNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length > 9) value = value.slice(0, 9)
  form.value.phone = value
}

const submitForm = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const response = await axios.post(`${API_BASE_URL}/donations`, form.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.data.status === 'success') {
      localStorage.setItem('donationName', form.value.name)
      router.push('/thank-you')
    }
  } catch (error) {
    console.error('Failed to submit donation:', error)
    if (error.response?.status === 401) {
      router.push('/login')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 30px;
  background-color: var(--lightBrown);
  color: var(--darkBrown);
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  color: var(--darkBrown);
  margin-bottom: 20px;
}

form {
  background-color: var(--white);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 20px;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border: 1px solid var(--midbrown);
  border-radius: 8px;
  background-color: var(--lightestBrown);
  font-size: 1rem;
}

.hint {
  font-size: 0.8rem;
  color: #666;
}

button {
  margin-top: 30px;
  width: 100%;
  background-color: var(--midbrown);
  color: white;
  padding: 14px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #c9302c;
}

:root {
  --darkBrown: #8c5c38;
  --lightBrown: #e5d4c0;
  --midbrown: #a47148;
  --lightestBrown: #fefaf0;
  --white: #ffffff;
}

.readonly-input {
  background-color: #f0f0f0;
  cursor: not-allowed;
}
</style>
