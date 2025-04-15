<template>
  <div class="thank-you-container">
    <div class="thank-you-card">
      <div class="checkmark-container">
        <div class="checkmark">✓</div>
      </div>
      <h1>Thank You, {{ donorName }}!</h1>
      <p>Your donation has been successfully submitted. We truly appreciate your generosity and support.</p>
      <p>A confirmation has been sent to your contact information.</p>
      <div class="button-container">
        <router-link to="/dashboard" class="dashboard-button">Go to Dashboard</router-link>
        <router-link to="/" class="home-button">Return to Homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const donorName = ref('')

onMounted(() => {
  // Get the donor name from localStorage
  donorName.value = localStorage.getItem('donationName') || 'Generous Donor'

  // Prevent going back to the form
  window.history.pushState(null, null, window.location.pathname)
  window.addEventListener('popstate', preventNavigation)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', preventNavigation)
})

function preventNavigation() {
  window.history.pushState(null, null, window.location.pathname)
}
</script>

<style scoped>
:root {
  --darkBrown: #8c5c38;
  --lightBrown: #e5d4c0;
  --midbrown: #a47148;
  --lightestBrown: #fefaf0;
  --white: #ffffff;
}

.thank-you-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 30px;
  background-color: var(--lightBrown);
  color: var(--darkBrown);
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thank-you-card {
  background-color: var(--white);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
}

.checkmark-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.checkmark {
  width: 80px;
  height: 80px;
  background-color: #4caf50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 42px;
  font-weight: bold;
}

h1 {
  color: var(--darkBrown);
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.dashboard-button,
.home-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--midbrown);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.dashboard-button:hover,
.home-button:hover {
  background-color: #c9302c;
}
</style>
