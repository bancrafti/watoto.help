<template>
  <div class="container">
    <h1>Mogra Rescue Center</h1>
    <div class="content">
      <div class="image-section">
        <img src="@/assets/images/mogra.jpeg" alt="Mogra Rescue Center" class="home-image">
      </div>
      <div class="info-section">
        <h2>About Mogra Rescue Center</h2>
        <p>Mogra Rescue Center is dedicated to rescuing and rehabilitating children from difficult circumstances. We provide immediate care, counseling, and long-term support to help children rebuild their lives.</p>
        
        <h3>Our Programs</h3>
        <ul>
          <li>Emergency Rescue Services</li>
          <li>Psychological Counseling</li>
          <li>Education and Training</li>
          <li>Reintegration Support</li>
        </ul>

        <h3>How You Can Help</h3>
        <p>Your support is crucial in helping us continue our mission:</p>
        <ul>
          <li>Emergency Fund Donations</li>
          <li>Educational Sponsorship</li>
          <li>Counseling Support</li>
          <li>Resource Donations</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: var(--darkBrown);
  margin-bottom: 2rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

.info-section {
  padding: 1rem;
}

h2 {
  color: var(--darkBrown);
  margin-bottom: 1rem;
}

h3 {
  color: var(--midBrown);
  margin: 1.5rem 0 1rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

.donate-btn {
  display: inline-block;
  background-color: var(--midBrown);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.donate-btn:hover {
  background-color: var(--darkBrown);
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style> 