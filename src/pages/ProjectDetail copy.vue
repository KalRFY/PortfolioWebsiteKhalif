<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Back Button -->
    <div class="mb-12 fade-in" v-motion-fade-visible-once>
      <router-link to="/" class="inline-flex items-center gap-2 text-sm text-[#646464] hover:text-cyan-400 transition-colors">
        <ArrowLeft class="w-4 h-4" />
        Back to Home
      </router-link>
    </div>

    <div v-if="project">
      <!-- Header Section -->
      <section class="mb-12 fade-in" v-motion-fade-visible-once>
        <div class="text-xs text-cyan-400 font-bold tracking-wider mb-4 uppercase">{{ project.category }}</div>
        <h1 class="text-3xl md:text-5xl font-medium text-[#E6E6E6] tracking-tight mb-4">
          {{ project.title }}
        </h1>
        <p class="text-sm font-medium text-[#646464] mb-6">
          Role: <span class="text-[#E6E6E6]">{{ project.role }}</span>
        </p>
      </section>

      <!-- Main Display / Asset -->
      <section class="mb-16 fade-in" v-motion-fade-visible-once>
        <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] overflow-hidden border border-[#262626] shadow-xl">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
          <div v-else class="w-full h-full bg-[#141414] flex items-center justify-center text-[#646464] font-medium">
            Main Image / App Screenshot Placeholder
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Overview</h2>
        <p class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed whitespace-pre-line">
          {{ project.description }}
        </p>
      </section>

      <!-- Deep Dive Section (Timeline Style) -->
      <section v-if="project.content" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-10">Project Details</h2>
        
        <div class="space-y-12">
          <div v-for="(section, index) in project.content" :key="index" class="relative pl-6 md:pl-8 border-l border-[#262626] hover:border-cyan-500/50 transition-colors duration-500 group">
            <!-- Timeline Dot -->
            <div class="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#262626] group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500"></div>
            
            <h3 class="text-xl font-medium text-[#E6E6E6] mb-4 group-hover:text-cyan-400 transition-colors duration-500">
              {{ section.heading }}
            </h3>
            <p class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed">
              {{ section.text }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div v-else class="flex-1 flex flex-col items-center justify-center text-center fade-in">
      <h1 class="text-4xl font-bold text-[#E6E6E6] mb-4">Project Not Found</h1>
      <p class="text-[#646464]">The project you're looking for doesn't exist.</p>
    </div>

    <!-- Footer -->
    <footer class="mt-auto border-t border-[#262626] pt-8 flex items-center justify-between gap-4">
      <p class="text-sm text-[#646464]">
        © Copyright 2026. All rights Reserved.
      </p>
    </footer>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

// Gambar spesifik untuk project jika ada (contoh untuk smartandon)
import smartandonImg from '../assets/Experience/Smartandon Image 1.jpg'

const route = useRoute()

const projectData = {
  'smartandon': {
    title: 'Smartandon',
    category: 'Software Development Project',
    role: 'Software Engineer Intern',
    description: "Smartandon was developed as a web-based production machine performance and disruption monitoring system aimed at supporting fast and accurate decision-making in manufacturing environments. The system's development began with an analysis of user needs (operators, supervisors, and maintenance) through a study of existing business processes at Toyota Plant 3. From this stage, core features such as Machine Stop Input, Problem History, Dashboard Monitoring, and supporting data integration for machine performance analysis were determined. Needs analysis serves as the main foundation for ensuring the system is truly relevant to operational conditions in the field.",
    image: smartandonImg,
    content: [
      {
        heading: "System Architecture & Design",
        text: "In the system design phase, Smartandon was designed using a client–server architecture with a separation between the frontend, backend, and database. The frontend was developed using Vue.js to ensure a responsive and interactive display, while the backend was built with Node.js and Express.js as a RESTful API that handles business logic and data processing. A MySQL database is used to store machine failure data, problem history, and performance parameters such as MTBF, MTTR, and OEE. The database design was carried out in a structured manner to support data consistency, ease of querying, and system scalability."
      },
      {
        heading: "Incremental Implementation",
        text: "Smartandon was implemented in stages, following the principle of incremental development. The Machine Stop Input feature was developed to allow operators to record machine failures in real time, complete with information on time, location, problem category, and failure description. Input data is immediately processed by the backend and saved to the database, then displayed on the dashboard in tables and graphs. At this stage, special attention is paid to data validation, routing management, and performance optimization to ensure the system remains stable even when handling large amounts of data."
      },
      {
        heading: "Advanced Analysis & Visualization",
        text: "Furthermore, the Problem History feature was developed to support advanced analysis of machine failures. This feature allows users to search, filter, and evaluate problem history by machine, time period, or failure category. Implementation of this feature involved creating complex data relationships, optimizing queries, and implementing cache fetches to improve data access speeds. Additionally, a visualization dashboard was developed using performance graphs and machine status indicators to assist supervisors and maintenance personnel in monitoring overall production conditions."
      },
      {
        heading: "Testing & Deployment",
        text: "The final stage of Smartandon development included system testing, bug fixes, and deployment to a production server. Testing was conducted to ensure each feature ran according to user requirements and was free of critical errors, particularly in the problem editing function, backend integration, and data visualization. The system was then refined through code refactoring and UI/UX adjustments to make it more intuitive. Through this process, Smartandon became not only a technical monitoring system, but also a digital solution that supports the principles of continuous improvement and operational efficiency in Toyota."
      }
    ]
  },
  'stock-prediction': {
    title: 'Stock Prediction Using LSTM',
    category: 'Data Analytics Project',
    role: 'Data Scientist & Data Analyst',
    description: 'Developed a stock price prediction model using Python and TensorFlow. Achieved a Mean Absolute Error (MAE) below 0.015 and improved accuracy by 15% compared to baseline models.',
    image: '' // Kosongkan agar template menampilkan placeholder jika belum punya screenshot
  },
  'cyclistic-bike-share': {
    title: 'Cyclistic Bike-Share Analysis',
    category: 'Data Analytics Project',
    role: 'Data Analyst • Google Data Analytics Capstone',
    description: 'Analyzed 25+ million rows of bike-share data using RStudio. Cleaned and standardized datasets to ensure consistency and accuracy. Performed exploratory data analysis to identify behavioral patterns and created 5+ visualizations using ggplot2 to deliver actionable recommendations.',
    image: ''
  }
}

const project = computed(() => projectData[route.params.id])
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>