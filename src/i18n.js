import { createI18n } from 'vue-i18n';

// Vertimų objektai
const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Team",
      contact: "Contact",
      evRepair: "EV Repair",
      hybridRepair: "Hybrid Repair",
      batteryRepair: "Battery Repair",
    },
    home: {
      title: "Welcome to Our Auto Service",
      description: "We provide high-quality auto repair services.",
    },
  },
  lt: {
    navbar: {
      home: "Pagrindinis",
      about: "Apie mus",
      services: "Paslaugos",
      team: "Komanda",
      contact: "Kontaktai",
      evRepair: "Elektromobilių remontas",
      hybridRepair: "Hibridų remontas",
      batteryRepair: "Baterijų remontas",
    },
    home: {
      title: "Sveiki atvykę į mūsų autoservisą",
      description: "Mes teikiame aukštos kokybės automobilių remonto paslaugas.",
    },
  },
  ru: {
    navbar: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      team: "Команда",
      contact: "Контакты",
      evRepair: "Ремонт электромобилей",
      hybridRepair: "Ремонт гибридов",
      batteryRepair: "Ремонт батарей",
    },
    home: {
      title: "Добро пожаловать в наш автосервис",
      description: "Мы предоставляем услуги по ремонту автомобилей высокого качества.",
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre nosotros",
      services: "Servicios",
      team: "Equipo",
      contact: "Contacto",
      evRepair: "Reparación de vehículos eléctricos",
      hybridRepair: "Reparación de híbridos",
      batteryRepair: "Reparación de baterías",
    },
    home: {
      title: "Bienvenido a nuestro servicio automotriz",
      description: "Proporcionamos servicios de reparación de automóviles de alta calidad.",
    },
  },
};

// Sukuriame i18n instanciją
const i18n = createI18n({
  locale: 'lt', // Numatyta kalba
  fallbackLocale: 'en', // Atsarginė kalba
  messages,
});

export default i18n;
