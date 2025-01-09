<template>
  <nav class="navbar">
    <!-- Logotipas -->
    <div class="Logo">
  <img src="C:\Users\aleks\Documents\GitHub\mantelio\src\assets\images\Logo1.png" alt="Logo1" />
</div>
    <!-- Hamburger meniu mygtukas -->
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle navigation">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>

    <!-- Navigacijos nuorodos ir kalbos -->
    <div :class="['menu', { open: isMenuOpen }]">
      <ul class="nav-links">
        <li><a href="#hero" @click="closeMenu">Home</a></li>
        <li><a href="#services" @click="closeMenu">Services</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#team" @click="closeMenu">Team</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
      <div class="language-switcher">
        <button @click="changeLanguage('lt')">LT</button>
        <button @click="changeLanguage('en')">EN</button>
        <button @click="changeLanguage('ru')">RU</button>
        <button @click="changeLanguage('es')">ES</button>
      </div>
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
      this.$i18n.locale = lang; // Kalbos pakeitimas naudojant Vue i18n
      localStorage.setItem("locale", lang); // Išsaugoma pasirinkta kalba
    },
  },
};
</script>

<style scoped>
/* Bendras navbar stilius */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  position: relative;
}

.logo img {
  width: 100px;
}

/* Hamburger mygtukas */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 3px;
}

/* Navigacijos nuorodos */
.menu {
  display: flex;
  align-items: center;
  gap: 20px;
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
  color: #ffa726;
}

/* Kalbos pasirinkimas */
.language-switcher {
  display: flex;
  gap: 10px;
}

.language-switcher button {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.language-switcher button:hover {
  background-color: #555;
}

/* Responsyvumas */
@media screen and (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    display: none;
  }

  .menu.open {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .language-switcher {
    margin-top: 20px;
  }
}

@media screen and (max-width: 480px) {
  .logo img {
    width: 80px;
  }

  .hamburger .line {
    width: 20px;
  }
}
</style>
