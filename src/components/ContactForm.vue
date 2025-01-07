<template>
    <section id="contact" class="contact-form">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Vardas:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Laiskas:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="cta-button">Siusti pasto balandi</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactForm",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.form);
        alert("Thank you for your message!");
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    text-align: center;
    padding: 40px 20px;
  }
  .form-group {
    margin: 20px 0;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .cta-button {
    background-color: #e63946;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  .cta-button:hover {
    background-color: #d62839;
  }
  </style>
  