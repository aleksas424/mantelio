<template>
    <section id="testimonials" class="testimonials">
      <h2>What Our Clients Say</h2>
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
    name: "TestimonialsSection", // Atnaujintas pavadinimas
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
    background-color: #f7f7f7;
  }
  .testimonial-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .testimonial {
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 10px;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  .testimonial p {
    font-style: italic;
  }
  .testimonial h3 {
    margin-top: 10px;
    color: #e63946;
  }
  </style>
  