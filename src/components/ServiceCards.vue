<template>
  <section id="services" class="services">
    <h2>Our Services</h2>
    <div class="service-cards">
      <router-link
        v-for="(service, index) in services"
        :key="index"
        :to="service.link"
        class="card"
      >
        <img :src="service.image" :alt="service.title" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceCards",
  data() {
    return {
      services: [
        {
          image: "https://via.placeholder.com/300x200?text=Battery+Repair",
          title: "Battery Repair",
          description: "Expert battery replacement and repair.",
          link: "/battery-repair",
        },
        {
          image: "https://via.placeholder.com/300x200?text=EV+Repair",
          title: "EV Repair",
          description: "Specialized repair for electric vehicles.",
          link: "/ev-repair",
        },
        {
          image: "https://via.placeholder.com/300x200?text=Hybrid+Repair",
          title: "Hybrid Repair",
          description: "Top-notch maintenance for hybrid cars.",
          link: "/hybrid-repair",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #1a1a1a, #333);
  color: #fff;
}

.services h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffa726;
  position: relative;
}

.services h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #ffa726;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background: #333;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 300px;
  color: #fff;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.card img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.card h3 {
  font-size: 1.5rem;
  color: #ffa726;
  margin: 10px 0 5px;
}

.card p {
  font-size: 1rem;
  color: #ccc;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services h2 {
    font-size: 2rem;
  }

  .card {
    max-width: 200px;
    padding: 15px;
  }

  .card h3 {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .services h2 {
    font-size: 1.8rem;
  }

  .card {
    max-width: 150px;
    padding: 10px;
  }

  .card img {
    height: auto;
  }

  .card h3 {
    font-size: 1rem;
  }

  .card p {
    font-size: 0.8rem;
  }
}
</style>
