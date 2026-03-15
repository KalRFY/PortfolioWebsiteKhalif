<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Header -->
    <section class="mb-16 fade-in" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-medium text-[#E6E6E6] tracking-tight mb-6">
        My Journey
      </h1>
      <p class="text-base md:text-lg text-[#646464] max-w-2xl leading-relaxed">
        A timeline of my professional experience, projects, and continuous learning path.
      </p>
    </section>

    <!-- Professional Experience -->
    <section class="mb-20 fade-in relative" v-motion-fade-visible-once>
      <div class="flex items-center gap-4 mb-12">
        <Briefcase class="w-6 h-6 text-cyan-400" />
        <h2 class="text-2xl font-medium text-[#E6E6E6]">Professional Experience</h2>
      </div>
      
      <!-- Timeline Line -->
      <div class="absolute left-3 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#262626] via-[#262626] to-transparent md:left-1/2 md:-ml-px"></div>
      
      <div class="space-y-12">
        <!-- TMMIN -->
        <div class="relative flex flex-col md:flex-row items-center md:items-start md:justify-between w-full group">
          <div class="flex flex-col w-full md:w-[45%] items-start md:items-end text-left md:text-right pl-10 md:pl-0 pr-0 md:pr-8 pt-1 mb-4 md:mb-0">
            <h3 class="text-lg md:text-xl font-bold md:font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">PT Toyota Motor Manufacturing Indonesia (TMMIN)</h3>
            <p class="text-xs md:text-sm font-medium text-cyan-500 mb-4">Feb 2025 – Feb 2026 • Karawang, West Java</p>
            <div class="w-full aspect-video rounded-xl bg-[#141414] mb-4 border border-[#262626] overflow-hidden">
               <img :src="tmminImg1" alt="TMMIN Experience" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="w-full aspect-video rounded-xl bg-[#141414] border border-[#262626] overflow-hidden">
               <img :src="tmminImg2" alt="TMMIN Experience" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          
          <div class="absolute left-3 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-400 -translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:bg-cyan-400"></div>

          <div class="w-full md:w-[45%] pl-10 md:pl-8">
            <div class="p-8 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-all shadow-lg hover:shadow-cyan-900/10">
              <h4 class="text-lg text-[#E6E6E6] font-medium mb-4">Software Engineer Intern</h4>
              <ul class="text-base text-[#646464] space-y-3 list-none custom-list leading-relaxed">
                <li>Designed and developed a web-based production monitoring system to track machine performance and manage real-time breakdown reporting.</li>
                <li>Built interactive dashboards using Vue.js and CoreUI to visualize MTTR, MTBR, and LTB metrics.</li>
                <li>Developed modular backend services using Node.js and Express.js with optimized RESTful APIs.</li>
                <li>Migrated database from MySQL to PostgreSQL, redesigned ERD, and improved data integrity and performance.</li>
                <li>Collaborated with engineers and production operators to translate operational requirements into scalable system features.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Robot Inspection System -->
        <div class="relative flex flex-col md:flex-row items-center md:items-start md:justify-between w-full group">
          <div class="flex flex-col w-full md:w-[45%] items-start text-left pl-10 md:pl-8 pr-0 pt-1 mb-4 md:mb-0 order-1 md:order-3">
             <h3 class="text-lg md:text-xl font-bold md:font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Robot Inspection System</h3>
             <p class="text-xs md:text-sm font-medium text-cyan-500 mb-4">2024 • Frontend Developer</p>
             <div class="w-full aspect-video rounded-xl bg-[#141414] border border-[#262626] overflow-hidden shadow-sm">
               <img :src="robotInspectionImg" alt="Robot Inspection Experience" class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
             </div>
          </div>
          
          <div class="absolute left-3 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-400 -translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:bg-cyan-400 order-2"></div>

          <div class="w-full md:w-[45%] pl-10 md:pr-8 md:pl-0 text-left md:text-right order-3 md:order-1">
            <div class="p-8 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-all shadow-lg text-left hover:shadow-cyan-900/10">
              <h4 class="text-lg text-[#E6E6E6] font-medium mb-4">Key Contributions</h4>
              <ul class="text-base text-[#646464] space-y-3 list-none custom-list leading-relaxed">
                <li>Architected and developed the frontend application from scratch using Vue.js.</li>
                <li>Built a highly responsive user interface to monitor industrial robot inspection processes.</li>
                <li>Integrated the newly built frontend with Flask-based REST APIs.</li>
                <li>Designed clean UI components for camera settings and routing configurations.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- HIMTI Web Dev -->
        <div class="relative flex flex-col md:flex-row items-center md:items-start md:justify-between w-full group">
          <div class="flex flex-col w-full md:w-[45%] items-start md:items-end text-left md:text-right pl-10 md:pl-0 pr-0 md:pr-8 pt-1 mb-4 md:mb-0">
             <h3 class="text-lg md:text-xl font-bold md:font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">HIMTI BINUS</h3>
             <p class="text-xs md:text-sm font-medium text-cyan-500 mb-4">Mar 2023 – Mar 2025 • Jakarta</p>
             <div class="w-full aspect-video rounded-xl bg-[#141414] border border-[#262626] overflow-hidden">
               <img :src="himtiImg" alt="HIMTI Experience" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
             </div>
          </div>
          
          <div class="absolute left-3 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#646464] -translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:border-cyan-400"></div>

          <div class="w-full md:w-[45%] pl-10 md:pl-8">
            <div class="p-8 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-all shadow-lg">
              <h4 class="text-lg text-[#E6E6E6] font-medium mb-4">Web Development Division</h4>
              <ul class="text-base text-[#646464] space-y-3 list-none custom-list leading-relaxed">
                <li>Strengthened backend development skills through structured technical training.</li>
                <li>Learned platform optimization, web management, and industry best practices.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- TECHNO -->
        <div class="relative flex flex-col md:flex-row items-center md:items-start md:justify-between w-full group">
          <div class="flex flex-col w-full md:w-[45%] items-start text-left pl-10 md:pl-8 pr-0 pt-1 mb-4 md:mb-0 order-1 md:order-3">
            <h3 class="text-lg md:text-xl font-bold md:font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">TECHNO HIMTI BINUS</h3>
            <p class="text-xs md:text-sm font-medium text-cyan-500 mb-4">Apr 2023 – Sep 2023 • Jakarta</p>
            <div class="w-full aspect-video rounded-xl bg-[#141414] mb-4 border border-[#262626] overflow-hidden">
               <img :src="technoImg1" alt="TECHNO Experience" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="w-full aspect-video rounded-xl bg-[#141414] mb-4 border border-[#262626] overflow-hidden">
               <img :src="technoImg2" alt="TECHNO Experience" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="w-full aspect-video rounded-xl bg-[#141414] border border-[#262626] overflow-hidden">
               <img :src="technoImg3" alt="TECHNO Experience" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          
          <div class="absolute left-3 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#646464] -translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:border-cyan-400 order-2"></div>

          <div class="w-full md:w-[45%] pl-10 md:pr-8 md:pl-0 text-left md:text-right order-3 md:order-1">
            <div class="p-8 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-all shadow-lg text-left">
              <h4 class="text-lg text-[#E6E6E6] font-medium mb-4">Sponsorship Committee</h4>
              <div class="text-base text-[#646464] space-y-4 mb-6 leading-relaxed">
                <p>As a member of the TECHNO Sponsorship Committee, I spearheaded sponsor partnerships for the largest event catering to Computer Science freshmen at BINUS University. Through strategic negotiation and tailored sponsorship packages, I cultivated relationships with industry leaders, refining my communication and negotiation skills.</p>
                <p>This role also sharpened my abilities in strategic planning, budget management, and problem-solving. I analyzed sponsorship opportunities, ensuring alignment with event objectives and maximizing value for sponsors and participants alike.</p>
              </div>
              <ul class="text-base text-[#646464] gap-y-2 gap-x-4 grid grid-cols-1 sm:grid-cols-2 list-none custom-list leading-relaxed">
                <li>Negotiation</li>
                <li>Strategic Planning</li>
                <li>Budget Management</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Relationship Management</li>
                <li>Event Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Projects -->
    <section class="mb-20 fade-in" v-motion-fade-visible-once>
      <div class="flex items-center gap-4 mb-12">
        <FolderGit2 class="w-6 h-6 text-emerald-400" />
        <h2 class="text-2xl font-medium text-[#E6E6E6]">Project Experience</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- LSTM -->
        <router-link to="/projects/stock-prediction" class="block p-8 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-all shadow-lg group cursor-pointer">
          <div class="flex items-center gap-2 mb-6">
             <div class="px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase">Data Analytics</div>
          </div>
          <h3 class="text-xl font-medium text-[#E6E6E6] mb-2 group-hover:text-emerald-400 transition-colors">Stock Prediction Using LSTM</h3>
          <p class="text-sm font-medium text-[#646464] mb-6">Role: Data Scientist & Data Analyst</p>
          <ul class="text-base text-[#646464] space-y-3 list-none custom-list-emerald leading-relaxed">
            <li>Developed stock price prediction model using Python and TensorFlow.</li>
            <li>Achieved MAE below 0.015 and improved accuracy by 15% compared to baseline models.</li>
          </ul>
        </router-link>
        
        <!-- Google Capstone -->
        <router-link to="/projects/cyclistic-bike-share" class="block p-8 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-all shadow-lg group cursor-pointer">
          <div class="flex items-center gap-2 mb-6">
             <div class="px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase">Data Analytics</div>
          </div>
          <h3 class="text-xl font-medium text-[#E6E6E6] mb-2 group-hover:text-emerald-400 transition-colors">Cyclistic Bike-Share Analysis</h3>
          <p class="text-sm font-medium text-[#646464] mb-6">Role: Data Analyst • Google Data Analytics Capstone</p>
          <ul class="text-base text-[#646464] space-y-3 list-none custom-list-emerald leading-relaxed">
            <li>Analyzed 25+ million rows of bike-share data using RStudio.</li>
            <li>Cleaned and standardized datasets to ensure consistency and accuracy.</li>
            <li>Performed exploratory data analysis to identify behavioral patterns.</li>
            <li>Created 5+ visualizations using ggplot2 and delivered 3 actionable recommendations to increase annual memberships.</li>
          </ul>
        </router-link>
      </div>
    </section>

    <!-- Certifications -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <div class="flex items-center gap-4 mb-12">
        <Award class="w-6 h-6 text-amber-400" />
        <h2 class="text-xl font-medium text-[#E6E6E6]">Certifications</h2>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-colors group">
          <div class="w-14 h-14 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
             <Award class="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 class="text-base font-medium text-[#E6E6E6]">Google Data Analytics Professional</h3>
            <p class="text-sm text-[#646464]">Coursera • Oct 2024</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-colors group">
          <div class="w-14 h-14 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
             <Award class="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 class="text-base font-medium text-[#E6E6E6]">Google AI Essentials</h3>
            <p class="text-sm text-[#646464]">Coursera • Oct 2024</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-auto border-t border-[#262626] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-[#646464]">
        © Copyright 2026. All rights Reserved.
      </p>
      <button class="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] rounded-full text-sm text-[#E6E6E6] border border-[#262626] hover:bg-[#141414] transition-colors">
        <span>Made by Khalif</span>
      </button>
    </footer>

  </div>
</template>

<script setup>
import { Briefcase, FolderGit2, Award } from 'lucide-vue-next'

import tmminImg1 from '../assets/Experience/Smartandon Image 1.jpg'
import tmminImg2 from '../assets/Experience/Smartandon Image 2.jpg'
import himtiImg from '../assets/Experience/Web Development Division.jpg'
import technoImg1 from '../assets/Experience/Techno Image 1.jpg'
import technoImg2 from '../assets/Experience/Techno Image 2.jpg'
import technoImg3 from '../assets/Experience/Techno Image 3.png'
import robotInspectionImg from '../assets/Experience/Robot Inspection 1.jpg'
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.custom-list li {
  position: relative;
  padding-left: 1.25rem;
}
.custom-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #22d3ee; /* cyan-400 */
}

.custom-list-emerald li {
  position: relative;
  padding-left: 1.25rem;
}
.custom-list-emerald li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #34d399; /* emerald-400 */
}
</style>
