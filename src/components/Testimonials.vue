<template>
  <section id="testimonials" class="testimonials">
    <h2>Sosal?</h2>
    <div class="testimonial-cards">
      <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
        <p>"{{ testimonial.quote }}"</p>
        <h3>- {{ testimonial.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsSection",
  data() {
    return {
      testimonials: [
        { quote: "Patiko filmas?", name: "Alisa" },
        { quote: "Puikios kainos", name: "Bobdebilas" },
        { quote: "Atvaziavau pakeisti padanga, pakeite lyti!", name: "Christine" },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #1a1a1a, #333);
  color: #fff;
  font-family: Arial, sans-serif;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #ffa726;
  margin-bottom: 30px;
  position: relative;
}

.testimonials h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 50%;
  height: 2px;
  background-color: #ffa726;
}

.testimonial-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.testimonial {
  max-width: 300px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: #444;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, background 0.3s ease;
}

.testimonial:hover {
  transform: scale(1.05);
  background: #555;
}

.testimonial p {
  font-style: italic;
  color: #ccc;
  margin-bottom: 10px;
}

.testimonial h3 {
  color: #ffa726;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .testimonials h2 {
    font-size: 2rem;
  }

  .testimonial {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .testimonials h2 {
    font-size: 1.8rem;
  }

  .testimonial h3 {
    font-size: 1rem;
  }
}
</style>
