<template>
  <section id="about" class="about">
    <div class="content-box" :class="{ expanded }">
      <div class="image-container">
        <img src="@/assets/images/ojoj.png" alt="About Us" />
      </div>
      <div class="text-container">
        <h2>Apie mus</h2>
        <p v-if="!expanded">
          Welcome to our electric vehicle service center. We specialize in repair and maintenance of EVs with cutting-edge technology. 
          <button @click="expanded = true">Skaityti daugiau</button>
        </p>
        <p v-else>
          Welcome to our electric vehicle service center. We specialize in repair and maintenance of EVs with cutting-edge technology. Our dedicated team ensures the highest quality of service to keep your electric vehicles running efficiently and sustainably. Discover our wide range of services tailored for EV owners.
          <button @click="expanded = false">Skaityti maziau</button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      expanded: false,
    };
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh; /* Full screen height */
  background: linear-gradient(135deg, #1a1a1a, #333); /* Gradient background */
  font-family: Arial, sans-serif;
  color: #fff;
}

.content-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #333;
  color: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 1200px;
  min-height: 70vh; /* Partially fills the screen height */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.content-box.expanded {
  flex-direction: column;
  max-height: 100%;
  min-height: 100vh;
  background-color: #444;
  transition: background-color 0.5s ease;
}

.image-container {
  flex: 1;
  position: relative;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
  filter: brightness(60%);
}

.text-container {
  flex: 1;
  padding: 40px;
  text-align: left;
}

.text-container h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffa726; /* Accent color */
  position: relative;
}

.text-container h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50%;
  height: 2px;
  background-color: #ffa726;
  transition: width 0.3s ease;
}

.text-container h2:hover::after {
  width: 100%;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;
  color: #ccc;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.text-container p:hover {
  color: #eee;
}

.text-container button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  background: linear-gradient(135deg, #555, #777);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.text-container button:hover {
  background: linear-gradient(135deg, #777, #999);
}

.text-container button:active {
  background-color: #444;
  transform: scale(0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-box {
    flex-direction: column;
  }

  .text-container {
    padding: 20px;
  }

  .text-container h2 {
    font-size: 2rem;
  }

  .text-container p {
    font-size: 1rem;
  }

  .text-container button {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .text-container h2 {
    font-size: 1.8rem;
  }

  .text-container p {
    font-size: 0.9rem;
  }

  .text-container button {
    font-size: 0.8rem;
    padding: 10px 16px;
  }
}
</style>
