<template>
  <div class="container">
    <h1>SOS Children's Home</h1>
    <div class="content">
      <div class="image-section">
        <img src="/images/sos.jpeg" alt="SOS Children's Home" class="home-image">
      </div>
      <div class="info-section">
        <h2>About SOS Children's Home</h2>
        <p>SOS Children's Home provides a loving family environment for children who have lost parental care. We focus on creating a stable and supportive atmosphere where children can grow and thrive.</p>
        
        <h3>Our Services</h3>
        <ul>
          <li>Family-based Care</li>
          <li>Education Support</li>
          <li>Healthcare Services</li>
          <li>Life Skills Training</li>
        </ul>

        <h3>Ways to Support</h3>
        <p>Join us in making a difference in children's lives through:</p>
        <ul>
          <li>Child Sponsorship</li>
          <li>Educational Support</li>
          <li>Healthcare Donations</li>
          <li>Volunteer Programs</li>
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