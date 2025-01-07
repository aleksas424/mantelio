<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
      <ul class="footer-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="social-icons">
      <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
      <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.footer-links a {
  color: white;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
.social-icons {
  margin-top: 10px;
}
.social-icons a {
  color: white;
  margin: 0 5px;
  font-size: 1.5rem;
}
</style>
