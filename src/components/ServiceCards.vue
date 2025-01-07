<template>
    <section id="services" class="services">
      <h2>Our Services</h2>
      <div class="service-cards">
        <router-link
          v-for="(service, index) in services"
          :key="index"
          :to="service.link" class="card">
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
            image: "@/assets/images/service1.jpg",
            title: "Battery Repair",
            description: "Expert battery replacement and repair.",
            link: "/battery-repair", // Nuoroda į Battery Repair puslapį
          },
          {
            image: "@/assets/images/service2.jpg",
            title: "EV Repair",
            description: "Specialized repair for electric vehicles.",
            link: "/ev-repair", // Nuoroda į EV Repair puslapį
          },
          {
            image: "@/assets/images/service3.jpg",
            title: "Hybrid Repair",
            description: "Top-notch maintenance for hybrid cars.",
            link: "/hybrid-repair", // Nuoroda į Hybrid Repair puslapį
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
  }
  .service-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .card {
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 10px;
    text-align: left;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .card img {
    width: 100%;
    height: auto;
  }
  .card h3 {
    margin: 10px 0;
    color: #e63946;
  }
  </style>
  