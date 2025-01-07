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
    padding: 40px;
  }
  .team-members {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  </style>
  