<template>
  <div>
    <header class="top-bar">
      <div class="logo">WATOTO</div>
      <a href="/donate" class="donate-btn" aria-label="Donate Now">DONATE NOW</a>
    </header>

    <section class="dashboard">
      <p class="description">
        Join us in making a difference in the lives of children in need. Your support helps provide shelter, education, and care for orphaned and vulnerable children. Choose a home to learn more and contribute to their mission.
      </p>

      <router-link
        v-for="home in homes"
        :key="home.title"
        :to="home.link"
        class="card-link"
        :aria-label="`Learn more about ${home.title}`"
      >
        <div class="card">
          <img :src="home.image" :alt="home.title" loading="lazy" />
          <div class="card-body">
            <h3>{{ home.title }}</h3>
            <p>{{ home.description }}</p>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script setup>
const homes = [
  {
    title: "Mully Children's Home",
    description:
      "Located in Machakos, Mully offers shelter, education, and love to over 150 orphaned children.",
    image: "/images/mully.jpeg",
    link: "/mully-childrens-home",
  },
  {
    title: "SOS Children's Village Nairobi",
    description:
      "One of Kenya's most renowned homes, SOS supports vulnerable children with family-based care and stability.",
    image: "/images/sos.jpeg",
    link: "/sos-childrens-home",
  },
  {
    title: "Mogra Rescue Centre",
    description:
      "Based in Nairobi, Mogra is a safe haven for street children and abandoned babies, offering full-time care.",
    image: "/images/mogra.jpeg",
    link: "/mogra-rescue-center",
  },
  {
    title: "Happy Life Children's Home",
    description:
      "Located in Juja, Happy Life provides education, meals, and medical services to abandoned children.",
    image: "/images/happylife.jpeg",
    link: "/happy-life-childrens-home",
  },
];
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: white; /* Light brown background for entire page */
  color: var(--midbrown);
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--darkBrown);
  border-radius: 12px;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
  color: white;
}

.donate-btn {
  background-color: var(--midbrown);
  color: white;
  padding: 14px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.donate-btn:hover {
  background-color: black;
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 50px 80px;
  background-color: var(--lightBrown); /* Light brown background behind cards */
}

.description {
  grid-column: span 2;
  font-size: 1.2rem;
  text-align: center;
  color: var(--midbrown);
  margin-bottom: 30px;
}

.card {
  background-color: var(--lightBrown); /* Matching background color for cards */
  border-radius: 18px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 500px;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 75%;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--lightBrown); /* Keeping card body background same */
}

.card h3 {
  margin: 0 0 8px 0;
  font-size: 1.4rem;
  color: var(--darkBrown);
}

.card p {
  font-size: 1rem;
  color: var(--midbrown);
  margin: 0;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 900px) {
  .dashboard {
    grid-template-columns: 1fr;
    padding: 30px;
  }

  .card {
    height: auto;
  }

  .card img {
    height: 300px;
  }

  .card-body {
    height: auto;
  }
}

/* Root colors */
:root {
  --darkBrown: #8c5c38;
  --lightBrown: #e5d4c0;
  --midbrown: #a47148;
  --white:#fff;
}
</style>
