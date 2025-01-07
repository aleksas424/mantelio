<template>
    <header class="header">
      <!-- Įterpiame NavbarComponent -->
      <NavbarComponent />
    </header>
  </template>
  
  <script>
  import NavbarComponent from './NavbarComponent.vue';
  
  export default {
    name: "HeaderComponent",
    components: {
      NavbarComponent,
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    padding: 10px 20px;
  }
  </style>
  