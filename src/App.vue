<template>
  <div id="app">
    <HeaderComponent />
    <router-view /> <!-- Čia bus atvaizduojamas maršrutų turinys -->
    <ScrollToTop />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    ScrollToTop, // Pridėjome „Scroll to Top“ komponentą
  },
};
</script>

<style>
/* Galite pridėti bendrų stilių čia */
</style>
