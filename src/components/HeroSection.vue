<template>
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1>Ramuneliu arbata</h1>
      <p>Pirma karta Lietuvoje</p>
      <button class="cta-button">Sužinoti daugiau</button>
    </div>
    <div class="hero-video-wrapper">
      <video autoplay muted loop class="hero-video">
        <source src="@/assets/video.mp4" type="video/mp4" />
        Jūsų naršyklė nepalaiko video formato.
      </video>
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
  background: linear-gradient(135deg, #2c3e50, #34495e);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.hero-content {
  max-width: 50%;
  color: #ecf0f1;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #ffa726;
  margin-bottom: 15px;
}

.hero p {
  font-size: 1.4rem;
  margin: 15px 0;
  color: #bdc3c7;
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

.hero-video-wrapper {
  position: relative;
  max-width: 45%;
  border-radius: 10px;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: brightness(40%);
  transition: filter 0.3s ease;
}

.hero-video-wrapper:hover .hero-video {
  filter: brightness(60%);
}
</style>
