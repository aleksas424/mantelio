<template>
  <nav class="navbar">
    <div class="logo">
      <img src="..\assets\images\car-logo.png" alt="Car Logo" class="car-logo" />
    </div>
    <button class="hamburger" @click="toggleMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <ul :class="['nav-links', { 'open': isMenuOpen }]">
      <li><a href="#hero" @click="closeMenu">{{ $t('navbar.home') }}</a></li>
      <li><a href="#services" @click="closeMenu">{{ $t('navbar.services') }}</a></li>
      <li><a href="#about" @click="closeMenu">{{ $t('navbar.about') }}</a></li>
      <li><a href="#team" @click="closeMenu">{{ $t('navbar.team') }}</a></li>
      <li><a href="#contact" @click="closeMenu">{{ $t('navbar.contact') }}</a></li>
    </ul>
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
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('locale', lang);
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
  position: relative;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

.language-switcher {
  display: none;
}

/* Logotipo stilius */
.car-logo {
  width: 100px;
  height: auto;
}

/* Hamburger meniu stilius */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

/* Mobilus dizainas */
@media screen and (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #333;
    transform: translateY(-100%);
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .language-switcher {
    display: block;
    text-align: center;
    margin-top: 10px;
  }

  .hamburger {
    display: flex;
  }
}
</style>
