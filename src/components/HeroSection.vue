<template>
    <section id="hero" class="hero">
      <div class="hero-content">
        <h1>Ramuneliu arbata</h1>
        <p>Pirma karta Lietuvoje</p>
        <button class="cta-button">Sužinoti daugiau</button>
      </div>
      <div class="hero-image-wrapper">
        <img src="@/assets/images/home.jpg" alt="Hero Image" class="hero-image" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
    background: #f4f4f9;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .hero-content {
    max-width: 50%;
    color: #333;
  }
  
  .hero h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 15px;
  }
  
  .hero p {
    font-size: 1.4rem;
    margin: 15px 0;
    color: #7f8c8d;
  }
  
  .cta-button {
    background-color: #e63946;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #d62839;
  }
  
  .hero-image-wrapper {
    position: relative;
    max-width: 45%;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(50%);
    object-fit: cover;
    transition: filter 0.3s ease;
  }
  
  .hero-image-wrapper:hover .hero-image {
    filter: brightness(70%);
  }
  </style>
  