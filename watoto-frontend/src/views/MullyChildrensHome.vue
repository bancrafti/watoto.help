<template>
  <div class="container">
    <h1>Mully Children's Home</h1>
    <div class="content">
      <div class="image-section">
        <img src="/images/mully.jpeg" alt="Mully Children's Home" class="home-image">
      </div>
      <div class="info-section">
        <h2>About Mully Children's Home</h2>
        <p>Mully Children's Home is dedicated to providing a safe and nurturing environment for children in need. Our mission is to ensure every child has access to education, healthcare, and a loving family environment.</p>
        
        <h3>Our Programs</h3>
        <ul>
          <li>Education and Scholarship Programs</li>
          <li>Healthcare and Nutrition Support</li>
          <li>Psychosocial Support</li>
          <li>Vocational Training</li>
        </ul>

        <h3>How You Can Help</h3>
        <p>Your support can make a difference in these children's lives. Consider:</p>
        <ul>
          <li>Making a donation</li>
          <li>Sponsoring a child's education</li>
          <li>Volunteering your time</li>
          <li>Donating essential items</li>
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