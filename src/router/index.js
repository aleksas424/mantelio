import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import EVRepair from '../views/EVRepair.vue';
import HybridRepair from '../views/HybridRepair.vue';
import BatteryRepair from '../views/BatteryRepair.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/ev-repair', name: 'EVRepair', component: EVRepair },
  { path: '/hybrid-repair', name: 'HybridRepair', component: HybridRepair },
  { path: '/battery-repair', name: 'BatteryRepair', component: BatteryRepair },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
