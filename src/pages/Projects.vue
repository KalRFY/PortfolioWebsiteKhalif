<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Header -->
    <section class="mb-12 fade-in" v-motion-fade-visible-once>
      <h1 class="text-3xl md:text-5xl font-medium text-[#E6E6E6] tracking-tight">
        My Remarkable Projects
      </h1>
    </section>

    <!-- Projects Grid -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        
        <!-- Project 1 - Smartandon -->
        <router-link to="/projects/smartandon" class="group block cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <img :src="smartandonImg" alt="Smartandon" class="w-full h-full object-cover" />
          </div>
          <div class="text-xs text-cyan-500 font-bold tracking-wider mb-2 uppercase">SOFTWARE ENGINEERING PROJECT</div>
          <h3 class="text-xl font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Smartandon</h3>
          <p class="text-sm text-[#646464] mt-1">Web-based Manufacturing Monitoring System</p>
        </router-link>

        <!-- Project 2 - Robot Inspection -->
        <router-link to="/projects/robot-inspection" class="group block cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <img :src="robotInspectionImg" alt="Robot Inspection System" class="w-full h-full object-cover object-top" />
          </div>
          <div class="text-xs text-cyan-500 font-bold tracking-wider mb-2 uppercase">SOFTWARE ENGINEERING PROJECT</div>
          <h3 class="text-xl font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Robot Inspection System</h3>
          <p class="text-sm text-[#646464] mt-1">AI-Based Industrial Robot Frontend</p>
        </router-link>

        <!-- Project 3 - LSTM Stock Prediction -->
        <router-link to="/projects/stock-prediction" class="group block cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <div class="w-full h-full bg-[#0d1117] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
               <div class="relative z-10 text-center px-4">
                 <div class="text-2xl font-bold text-[#E6E6E6] tracking-tight mb-1">LSTM Stock Prediction</div>
                 <div class="text-xs text-[#646464]">Deep Learning · TensorFlow · Python</div>
               </div>
             </div>
          </div>
          <div class="text-xs text-blue-400 font-bold tracking-wider mb-2 uppercase">DATA SCIENCE PROJECT</div>
          <h3 class="text-xl font-medium text-[#E6E6E6] group-hover:text-blue-400 transition-colors">Stock Prediction Using LSTM</h3>
          <p class="text-sm text-[#646464] mt-1">Deep Learning · TensorFlow · Python</p>
        </router-link>

        <!-- Project 4 - Cyclistic Bike-Share (Kaggle) -->
        <router-link to="/projects/cyclistic-bike-share" class="group block cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <div class="w-full h-full bg-[#0d1117] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>
               <div class="relative z-10 text-center px-4">
                 <div class="text-2xl font-bold text-[#E6E6E6] tracking-tight mb-1">Cyclistic Bike-Share</div>
                 <div class="text-xs text-[#646464]">Google Data Analytics Capstone · Kaggle</div>
               </div>
             </div>
          </div>
          <div class="text-xs text-emerald-400 font-bold tracking-wider mb-2 uppercase">DATA ANALYTICS · KAGGLE</div>
          <h3 class="text-xl font-medium text-[#E6E6E6] group-hover:text-emerald-400 transition-colors">Cyclistic Bike-Share Analysis</h3>
          <p class="text-sm text-[#646464] mt-1">Google Data Analytics Capstone Project</p>
        </router-link>
        
      </div>
    </section>
        

    <!-- Let's Connect -->
    <section class="mb-24 flex items-center justify-center fade-in" v-motion-fade-visible-once>
      <router-link to="/contact">
        <h1 class="text-6xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#E6E6E6] to-[#646464] text-center hover:scale-105 transition-transform duration-500 cursor-pointer">
          Let's Connect!
        </h1>
      </router-link>
    </section>

    <!-- Footer -->
    <footer class="mt-auto border-t border-[#262626] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-[#646464]">
        © Copyright 2026. All rights Reserved
      </p>
      <button class="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] rounded-full text-sm text-[#E6E6E6] border border-[#262626] hover:bg-[#141414] transition-colors">
        <span>Made by Khalif</span>
      </button>
    </footer>

  </div>
</template>

<script setup>
// Projects Component
import smartandonImg from '../assets/Experience/Smartandon Image 1.jpg'
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
</style>
