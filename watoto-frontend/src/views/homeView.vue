<template>
  <div class="watoto-wrapper">
    <!-- Header -->
    <header class="watoto-header">
      <div class="logo">WATOTO</div>
    </header>

    <!-- Main Section -->
    <section class="watoto-main">
      <div class="image" />
      <div class="text">
        <h2>Helping Little Hearts Thrive</h2>
        <p>
          Watoto is a compassionate platform dedicated to connecting generous donors with children's homes across Kenya.
          Whether you're donating clothes, books, or love, every bit counts.
        </p>
        <router-link to="/login" class="cta-button">Get Started</router-link>
      </div>
    </section>
  </div>
</template>


<style scoped>
.watoto-wrapper {
  margin: 0;
  padding: 0;
  font-family: 'Georgia', serif;
  background-color: #fefaf0;
  color: #5e4b3c;
}

.watoto-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  background-color: #e5d4c0;
  transition: all 0.3s ease-in-out;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #4b3621;
  font-family: 'Palatino Linotype', 'Book Antiqua', serif;
}

.watoto-main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
}

.image {
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url('/images/homeView.jpeg');
  background-size: cover;
  background-position: center;
  border: 8px solid #e5d4c0;
  margin-right: 40px;
  margin-bottom: 20px;
  transition: transform 0.4s ease;
}

.image:hover {
  transform: scale(1.05);
}

.text {
  max-width: 500px;
  font-size: 1.2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #3d2b1f;
  transition: opacity 0.4s ease;
}

.text h2 {
  font-family: 'Georgia';
  font-size: 2rem;
  margin-top: 0;
}

.cta-button {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 30px;
  background-color: #a47148;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  font-family: 'Segoe UI', sans-serif;
}

.cta-button:hover {
  background-color: #8c5c38;
  transform: scale(1.05);
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  .watoto-main {
    flex-direction: column;
    text-align: center;
  }

  .image {
    width: 220px;
    height: 220px;
    margin-right: 0;
  }

  .text {
    font-size: 1rem;
    padding: 0 15px;
  }

  .text h2 {
    font-size: 1.5rem;
  }

  .cta-button {
    padding: 10px 24px;
    font-size: 0.95rem;
  }
}
</style>
