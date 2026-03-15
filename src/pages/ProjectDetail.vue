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
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover" :class="project.imagePosition || 'object-center'" />
          <div v-else class="w-full h-full bg-[#141414] flex items-center justify-center text-[#646464] font-medium">
            Main Image / App Screenshot Placeholder
          </div>
        </div>
      </section>

      <!-- Tech Stack Tags -->
      <section v-if="project.techStack" class="mb-12 fade-in" v-motion-fade-visible-once>
        <div class="flex flex-wrap gap-3">
          <span v-for="tech in project.techStack" :key="tech" class="px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full shadow-sm">
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Overview Section -->
      <section v-if="project.description" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Overview</h2>
        <p class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed whitespace-pre-line" v-html="project.description"></p>
      </section>

      <!-- Problem Context -->
      <section v-if="project.problemContext" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Problem Context</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.problemContext" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Solution -->
      <section v-if="project.solution" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Solution</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.solution" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- System Architecture -->
      <section v-if="project.architecture" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">System Architecture</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.architecture" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Deep Dive Section (Timeline Style) -->
      <section v-if="project.content" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-10">{{ project.contentTitle || 'Project Details' }}</h2>
        
        <div class="space-y-12">
          <div v-for="(section, index) in project.content" :key="index" class="relative pl-6 md:pl-8 border-l border-[#262626] hover:border-cyan-500/50 transition-colors duration-500 group">
            <!-- Timeline Dot -->
            <div class="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#262626] group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500"></div>
            
            <h3 class="text-xl font-medium text-[#E6E6E6] mb-4 group-hover:text-cyan-400 transition-colors duration-500">
              {{ section.heading }}
            </h3>
            <p class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="section.text"></p>
          </div>
        </div>
      </section>

      <!-- Engineering Work & Contributions -->
      <section v-if="project.engineering" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Engineering Work & Contributions</h2>
        <ul class="space-y-4">
          <li v-for="(item, index) in project.engineering" :key="index" class="flex items-start gap-3 text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed">
            <span class="text-cyan-400 mt-1 font-bold">→</span>
            <span v-html="item"></span>
          </li>
        </ul>
      </section>

      <!-- Technical Challenges -->
      <section v-if="project.challenges" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Technical Challenges</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.challenges" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Development Process -->
      <section v-if="project.developmentProcess" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Development Process</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.developmentProcess" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Impact -->
      <section v-if="project.impact" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Impact</h2>
        <ul class="space-y-4">
          <li v-for="(item, index) in project.impact" :key="index" class="flex items-start gap-3 text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed">
            <span class="text-cyan-400 mt-1 font-bold">→</span>
            <span v-html="item"></span>
          </li>
        </ul>
      </section>

      <!-- Lessons Learned -->
      <section v-if="project.lessonsLearned" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Lessons Learned</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.lessonsLearned" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
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
import robotInspectionImg from '../assets/Experience/Robot Inspection 1.jpg'

const route = useRoute()

const projectData = {
  'smartandon': {
    title: 'Smartandon',
    category: 'Software Development Project',
    role: 'Software Engineer Intern',
    description: "<strong>Smartandon</strong> is a web-based <strong>manufacturing monitoring system</strong> designed to improve machine performance visibility and disruption handling in production environments.\n\nIn many manufacturing environments, machine disturbance reporting is still performed <strong>manually</strong>, resulting in delayed responses, fragmented documentation, and limited data for maintenance analysis. To address this challenge, I developed Smartandon, a <strong>digital Andon system</strong> that enables operators and supervisors to monitor machine conditions, report disturbances in <strong>real time</strong>, and analyze historical production issues through a centralized web platform.\n\nThe system integrates <strong>real-time reporting</strong>, <strong>historical problem tracking</strong>, and <strong>performance analytics</strong> to support faster maintenance decisions and more efficient production monitoring. By transforming manual reporting processes into a structured digital system, Smartandon improves information transparency and enables data-driven maintenance analysis through key metrics such as Mean Time to Repair <strong>(MTTR)</strong> and Mean Time Between Failures <strong>(MTBF)</strong>.",
    image: smartandonImg,
    techStack: ["Vue.js", "Node.js", "Express.js", "MySQL", "CoreUI", "REST API"],
    problemContext: [
      "In manufacturing environments, machine disruptions can significantly impact production flow and operational efficiency. However, many factories still rely on <strong>manual reporting systems</strong> for documenting machine failures. This approach often leads to <strong>delayed responses</strong>, inconsistent documentation, and difficulty in analyzing historical maintenance data.",
      "Without a centralized monitoring platform, operators and maintenance teams have <strong>limited visibility</strong> into machine performance, making it difficult to identify recurring issues or measure production efficiency."
    ],
    solution: [
      "Smartandon was developed as a <strong>web-based Andon system</strong> that digitizes machine disturbance reporting and production monitoring. The system provides a <strong>centralized platform</strong> where operators can report machine issues instantly while supervisors and maintenance teams can monitor production conditions through real-time dashboards.",
      "The system stores all operational events in a <strong>structured database</strong>, allowing historical analysis of machine failures and enabling <strong>data-driven maintenance strategies</strong>."
    ],
    architecture: [
      "Smartandon is designed using a <strong>modular web application architecture</strong> that separates the system into frontend, backend, and database layers. The frontend is built using <strong>Vue.js</strong> with <strong>CoreUI</strong> components to provide a responsive and intuitive user interface.",
      "The backend is implemented using <strong>Node.js</strong> and <strong>Express.js</strong> to handle business logic, API routing, and data processing. A <strong>MySQL</strong> relational database is used to store machine disturbance records, historical problem logs, and production performance metrics.",
      "This architecture enables <strong>scalable data management</strong> and supports real-time monitoring of machine performance across production lines."
    ],
    contentTitle: "Key Features",
    content: [
      {
        heading: "Real-Time Machine Monitoring",
        text: "Smartandon provides a <strong>centralized dashboard</strong> that displays real-time information about machine status, production conditions, and operational disruptions. The dashboard aggregates data such as active problems, repair durations, and production performance metrics to help supervisors monitor factory operations efficiently."
      },
      {
        heading: "Machine Stop Input System",
        text: "Operators can directly report machine disturbances through the <strong>Machine Stop Input</strong> feature. The system records information such as machine name, problem category, and description of the issue. This input is stored instantly in the database and becomes part of the operational monitoring data."
      },
      {
        heading: "Historical Problem Tracking",
        text: "All machine disturbances are stored in the <strong>Problem History</strong> module. This feature allows users to search, filter, and analyze past problems based on machine name, production line, date range, and problem category."
      },
      {
        heading: "Performance Metrics (MTBF & MTTR)",
        text: "Smartandon automatically calculates maintenance performance indicators such as Mean Time to Repair <strong>(MTTR)</strong> and Mean Time Between Failures <strong>(MTBF)</strong>. These metrics help evaluate machine reliability and maintenance efficiency."
      },
      {
        heading: "Maintenance Analytics & Pareto Analysis",
        text: "The system provides analytical visualizations such as <strong>Pareto charts</strong> to identify the most frequent or impactful machine failures. This helps engineering teams focus on the root causes that have the greatest impact on production efficiency."
      }
    ],
    developmentProcess: [
      "The system was developed using the <strong>Agile methodology</strong> with a <strong>Feature-Driven Development (FDD)</strong> approach. Development was organized around specific features such as machine disturbance input, historical analysis, and dashboard visualization.",
      "Each feature was designed, implemented, and tested <strong>iteratively</strong> to ensure system stability and usability. This approach allowed continuous improvement based on system testing and feedback during development."
    ],
    impact: [
      "<strong>Digitalized</strong> manual machine disturbance reporting.",
      "<strong>Improved visibility</strong> of machine performance across production lines.",
      "Enabled <strong>structured historical documentation</strong> of machine failures.",
      "Supported <strong>data-driven maintenance decisions</strong> using MTBF and MTTR metrics.",
      "<strong>Reduced information delay</strong> between operators and maintenance teams."
    ]
  },
  'robot-inspection': {
    title: 'Robot Inspection System',
    category: 'Software Engineering Project',
    role: 'Frontend Developer',
    description: "The <strong>Robot Inspection System</strong> is a web-based monitoring and control interface designed to support automated inspection robots used in industrial environments.\n\nThe system enables engineers and operators to monitor robot inspection processes, configure camera settings, manage inspection routing, and interact with inspection data through a web dashboard.\n\nMy role in this project focused on <strong>architecting and developing the frontend application from scratch</strong>, ensuring system stability, and seamlessly integrating it with a backend system built using <strong>Flask</strong> and <strong>REST APIs</strong>.",
    image: robotInspectionImg, 
    imagePosition: 'object-top',
    techStack: ["Vue.js", "JavaScript", "HTML", "CSS", "Flask (Python)", "REST API", "PostgreSQL"],
    problemContext: [
      "Inspection robots are used to monitor production environments, but the engineers previously lacked a dedicated, reliable interface to interact with the inspection data and control the robots effectively.",
      "To address this, there was a critical need to build a <strong>stable and structured web interface from the ground up</strong>. The goal of the project was to design the frontend architecture and create a clean, intuitive application that integrates smoothly with the backend inspection services."
    ],
    architecture: [
      "The system follows a scalable <strong>client–server architecture</strong>:",
      "<strong>Frontend:</strong> A Vue.js web application used as the primary operator dashboard.",
      "<strong>Backend:</strong> Flask-based API services that process robot inspection data.",
      "<strong>Database:</strong> PostgreSQL is used to store inspection data and system configurations.",
      "<strong>System Flow:</strong> Operators access the dashboard through the web interface. The Vue.js frontend sends requests to Flask REST APIs. The backend services process robot inspection data and configuration parameters, allowing the frontend to render inspection information and system status. The frontend acts as the main control layer for interacting with the inspection infrastructure."
    ],
    contentTitle: "Key Features",
    content: [
      { heading: "Robot Inspection Dashboard", text: "Displays inspection activities and monitoring data through a structured web interface that allows users to observe system status and inspection workflows." },
      { heading: "Inspection Routing Interface", text: "Allows operators to manage and visualize robot inspection routes within the system interface." },
      { heading: "Camera Settings Configuration", text: "Provides a configuration page where camera parameters used by the inspection robot can be adjusted through the web interface." },
      { heading: "Frontend–Backend API Integration", text: "The frontend communicates with backend services through <strong>REST APIs</strong> built with Flask, enabling data exchange between the web dashboard and the inspection system." },
      { heading: "Scalable UI Architecture", text: "Built a highly responsive and reliable user interface from scratch, ensuring long-term maintainability and smooth user interactions." }
    ],
    engineering: [
      "Architected and implemented the entire frontend routing structure using <strong>Vue.js</strong>.",
      "Developed modular UI components for robot inspection monitoring features.",
      "Designed and developed the robot inspection dashboard layout to ensure high usability.",
      "Built the camera settings configuration page from the ground up.",
      "Established a robust state management and component structure for system interaction.",
      "Integrated the newly built frontend with <strong>Flask-based REST APIs</strong>.",
      "Collaborated in technical discussions regarding system architecture and API contract design."
    ],
    challenges: [
      "One major challenge was <strong>building a frontend interface from scratch</strong> and integrating it with an independent backend system built using Flask APIs. Establishing clear communication and ensuring compatibility between new frontend routes, API endpoints, and data structures required careful planning and iterative testing.",
      "Another challenge involved designing an intuitive inspection interface tailored for industrial operators while ensuring the application remained highly performant.",
      "Through iterative development and continuous feedback, the newly developed frontend became a stable and reliable control layer for the entire system."
    ],
    impact: [
      "Delivered a <strong>highly usable and stable</strong> inspection platform built entirely from scratch.",
      "Allowed operators to interact with the inspection system <strong>efficiently</strong>, introducing structured routing and a clean UI to simplify system navigation.",
      "Established a solid frontend foundation that is <strong>easy to maintain and extend</strong> for future industrial system integrations."
    ],
    lessonsLearned: [
      "This project provided hands-on experience in developing web interfaces for <strong>industrial systems</strong> and integrating frontend applications with existing backend infrastructures.",
      "It also strengthened understanding of <strong>REST API integration</strong>, frontend architecture design, debugging complex UI systems, and collaborating in engineering environments.",
      "The experience helped build stronger skills in designing maintainable web applications that interact with real-world systems."
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

:deep(strong) {
  color: #E6E6E6;
  font-weight: 600;
}
</style>