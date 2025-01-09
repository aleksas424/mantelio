<template>
  <section id="team" class="team">
    <h2>Meet Our Team</h2>
    <div class="team-members">
      <div class="member" v-for="(member, index) in team" :key="index">
        <img :src="member.image" :alt="member.name" />
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamSection",
  data() {
    return {
      team: [
        { image: "@/assets/images/team1.jpg", name: "Mantas jjj", position: "Mihanik" },
        { image: "@/assets/images/team2.jpg", name: "Mantas JJ", position: "Manager" },
        { image: "@/assets/images/team3.jpg", name: "Mantas J", position: "Technician" },
      ],
    };
  },
};
</script>

<style scoped>
.team {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #1a1a1a, #333);
  color: #fff;
}

.team h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffa726;
  position: relative;
}

.team h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #ffa726;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.member {
  background: #333;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 200px;
}

.member:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
}

.member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.member img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.member h3 {
  font-size: 1.2rem;
  color: #ffa726;
  margin: 10px 0 5px;
}

.member p {
  font-size: 1rem;
  color: #ccc;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .team h2 {
    font-size: 2rem;
  }

  .member {
    max-width: 150px;
    padding: 15px;
  }

  .member img {
    width: 80px;
    height: 80px;
  }

  .member h3 {
    font-size: 1rem;
  }

  .member p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .team h2 {
    font-size: 1.8rem;
  }

  .member {
    max-width: 120px;
    padding: 10px;
  }

  .member img {
    width: 70px;
    height: 70px;
  }

  .member h3 {
    font-size: 0.9rem;
  }

  .member p {
    font-size: 0.8rem;
  }
}
</style>
