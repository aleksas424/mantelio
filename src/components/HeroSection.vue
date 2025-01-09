<template>
  <section id="hero" class="hero">
    <div class="hero-overlay">
      <div class="hero-content">
        <h1>Ramunėlių arbata</h1>
        <p>Pirma karta Lietuvoje</p>
        <button class="cta-button">Sužinoti daugiau</button>
      </div>
    </div>
    <video autoplay muted loop class="hero-video">
      <source src="@/assets/video.mp4" type="video/mp4" />
      Jūsų naršyklė nepalaiko video formato.
    </video>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh; /* Užtikrina pilno ekrano aukštį */
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(30%); /* Tamsesnis video */
  z-index: 1; /* Užtikrina, kad video bus fone */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Užtikrina, kad tekstas bus virš video */
  background-color: rgba(0, 0, 0, 0.5); /* Pusiau permatomas fonas */
}

.hero-content {
  text-align: center;
  color: #ffffff;
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
  color: #ffffff;
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
</style>
