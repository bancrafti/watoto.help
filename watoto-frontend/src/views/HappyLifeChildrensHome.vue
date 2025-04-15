<template>
  <div class="container">
    <h1>Happy Life Children's Home</h1>
    <div class="content">
      <div class="image-section">
        <img src="/images/happylife.jpeg" alt="Happy Life Children's Home" class="home-image">
      </div>
      <div class="info-section">
        <h2>About Happy Life Children's Home</h2>
        <p>Happy Life Children's Home is committed to providing a safe haven for abandoned and vulnerable children. We focus on creating a family environment where children can grow, learn, and develop their full potential.</p>
        
        <h3>Our Initiatives</h3>
        <ul>
          <li>Child Care and Protection</li>
          <li>Education and Development</li>
          <li>Healthcare Services</li>
          <li>Life Skills Programs</li>
        </ul>

        <h3>Support Our Mission</h3>
        <p>You can help us make a difference in these children's lives by:</p>
        <ul>
          <li>Supporting our Education Fund</li>
          <li>Contributing to Healthcare</li>
          <li>Sponsoring a Child</li>
          <li>Donating Essential Items</li>
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