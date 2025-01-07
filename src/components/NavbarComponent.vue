<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/car-logo.png" alt="Car Logo" class="car-logo" />
    </div>
    <ul class="nav-links">
      <li><a href="#hero">{{ $t('navbar.home') }}</a></li>
      <li><a href="#services">{{ $t('navbar.services') }}</a></li>
      <li><a href="#about">{{ $t('navbar.about') }}</a></li>
      <li><a href="#team">{{ $t('navbar.team') }}</a></li>
      <li><a href="#contact">{{ $t('navbar.contact') }}</a></li>
    </ul>
    <!-- Kalbų perjungiklis -->
    <div class="language-switcher">
      <button @click="changeLanguage('lt')">Lietuvių</button>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('ru')">Русский</button>
      <button @click="changeLanguage('es')">Español</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Keičia kalbą
      localStorage.setItem('locale', lang); // Išsaugo pasirinkimą naršyklėje
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.nav-links a:hover {
  text-decoration: underline;
}
.language-switcher button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
}
.language-switcher button:hover {
  background-color: #555;
}

/* Logotipo stilius */
.car-logo {
  width: 100px; /* Pakeiskite pagal norimą dydį */
  height: auto;
}
</style>
