<template>
  <div id="app">
    <HeaderComponent />
    <router-view /> <!-- Čia bus atvaizduojamas maršrutų turinys -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Galite pridėti bendrų stilių čia */
</style>
