<template>
  <section id="services" class="services">
    <h2>Our Services</h2>
    <div class="service-cards-container">
      <div class="service-cards" ref="serviceCards">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="card"
        >
          <img :src="service.image" :alt="service.title" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
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
        },
        {
          image: "https://via.placeholder.com/300x200?text=EV+Repair",
          title: "EV Repair",
          description: "Specialized repair for electric vehicles.",
        },
        {
          image: "https://via.placeholder.com/300x200?text=Hybrid+Repair",
          title: "Hybrid Repair",
          description: "Top-notch maintenance for hybrid cars.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Bendras stilius */
.services {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #2c2c2c, #444); /* Tamsesnis fonas su šiek tiek pilkšvu tonų perėjimu */
  color: #fff;
}

.services h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ff6f00; /* Ryškesnė oranžinė spalva */
}

.service-cards-container {
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto; /* Horizontalus slinkimas */
  overflow-y: auto; /* Vertikalus slinkimas */
  height: 50vh; /* Užtikrina, kad konteineris neužims daugiau vietos nei ekranas */
}

.service-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px; /* Apriboja plotį, kad būtų gražiau */
  width: 100%;
}

/* Kortelės stilius */
.card {
  flex: 0 0 calc(33.33% - 20px); /* 3 kortelės vienoje eilėje */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px; /* Šiek tiek suapvalintos kortelės kampai */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  background: rgba(255, 255, 255, 0.15); /* Pakeičiamas fonas ant hover efekto */
}

/* Mobiliesiems įrenginiams */
@media (max-width: 768px) {
  .card {
    flex: 0 0 calc(50% - 10px); /* 2 kortelės vienoje eilėje ant mažų ekranų */
  }

  .service-cards {
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #ff6f00 #1a1a1a;
  }

  .service-cards::-webkit-scrollbar {
    height: 8px;
  }

  .service-cards::-webkit-scrollbar-thumb {
    background-color: #ff6f00;
    border-radius: 10px;
  }
}
</style>
