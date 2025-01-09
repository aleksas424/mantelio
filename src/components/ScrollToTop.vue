<template>
    <div class="scroll-to-top" @click="scrollToTop" v-if="isVisible">
      <svg class="progress-ring" width="100" height="100">
        <circle
          class="progress-ring__background"
          stroke="#ccc"
          stroke-width="6"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          class="progress-ring__circle"
          stroke="#ff7700"
          stroke-width="6"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          :style="{ strokeDashoffset: strokeDashoffset }"
        />
      </svg>
      <span class="arrow">↑</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "ScrollToTop",
    data() {
      return {
        isVisible: false,
        progress: 0,
      };
    },
    computed: {
      strokeDashoffset() {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        return circumference - (this.progress / 100) * circumference;
      },
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.progress = (scrollTop / docHeight) * 100;
  
        this.isVisible = scrollTop > 100; // Rodyti mygtuką, kai slinkimas > 100px
      },
    },
    mounted() {
      window.addEventListener("scroll", this.updateScrollProgress);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.updateScrollProgress);
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
    background: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: all 0.3s ease-in-out;
  }
  
  .scroll-to-top:hover {
    background: #444;
  }
  
  .arrow {
    color: white;
    font-size: 2rem;
    position: absolute;
  }
  
  .progress-ring {
    position: absolute;
    transform: rotate(-90deg);
  }
  
  .progress-ring__background {
    stroke-dasharray: 282; /* Circumference of the circle (2 * π * r) */
    stroke-dashoffset: 0;
  }
  
  .progress-ring__circle {
    stroke-dasharray: 282;
    transition: stroke-dashoffset 0.3s linear;
  }
  
  /* Mažesniems ekranams - sumažinti mygtuko dydį */
  @media (max-width: 768px) {
    .scroll-to-top {
      width: 60px;
      height: 60px;
    }
  
    .arrow {
      font-size: 1.5rem;
    }
  
    .progress-ring {
      width: 60px;
      height: 60px;
    }
  
    .progress-ring__background,
    .progress-ring__circle {
      r: 28; /* Sumažintas apskritimo spindulys */
      cx: 30;
      cy: 30;
      stroke-width: 4; /* Plonesnė linija */
    }
  }
  </style>
  