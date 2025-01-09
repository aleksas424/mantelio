<template>
  <section id="contact" class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="cta-button">Send Message</button>
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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px 20px;
background: linear-gradient(135deg, #1a1a1a, #333);
color: #fff;
font-family: Arial, sans-serif;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form h2 {
font-size: 2.5rem;
margin-bottom: 20px;
color: #ffa726;
position: relative;
}

.contact-form h2::after {
content: "";
position: absolute;
left: 0;
bottom: -10px;
width: 50%;
height: 2px;
background-color: #ffa726;
transition: width 0.3s ease;
}

.contact-form h2:hover::after {
width: 100%;
}

.form-group {
width: 100%;
max-width: 500px;
margin: 20px 0;
}

label {
display: block;
margin-bottom: 5px;
font-size: 1rem;
color: #ccc;
}

input,
textarea {
width: 100%;
padding: 12px;
margin-bottom: 10px;
border: 1px solid #555;
border-radius: 5px;
background-color: #222;
color: #fff;
font-size: 1rem;
}

input:focus,
textarea:focus {
outline: none;
border-color: #ffa726;
box-shadow: 0 0 5px #ffa726;
}

.cta-button {
background: linear-gradient(135deg, #555, #777);
color: #fff;
padding: 12px 24px;
font-size: 1rem;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
background: linear-gradient(135deg, #777, #999);
}

.cta-button:active {
background-color: #444;
transform: scale(0.95);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
.contact-form {
  padding: 20px;
}

.contact-form h2 {
  font-size: 2rem;
}

input,
textarea {
  font-size: 0.9rem;
}

.cta-button {
  font-size: 0.9rem;
}
}

@media (max-width: 480px) {
.contact-form h2 {
  font-size: 1.8rem;
}

input,
textarea {
  font-size: 0.8rem;
  padding: 10px;
}

.cta-button {
  font-size: 0.8rem;
  padding: 10px 16px;
}
}
</style>