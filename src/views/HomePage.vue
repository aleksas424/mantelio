<template>
  <div>
    <HeroSection />
    <ServiceCards />
    <AboutSection />
    <TeamSection />
    <Testimonials />
    <ContactForm />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import ServiceCards from "@/components/ServiceCards.vue";
import AboutSection from "@/components/AboutSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import Testimonials from "@/components/Testimonials.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    ServiceCards,
    AboutSection,
    TeamSection,
    Testimonials,
    ContactForm,
  },
};
</script>

<style scoped>
/* Specifiniai pagrindinio puslapio stiliai */
</style>
