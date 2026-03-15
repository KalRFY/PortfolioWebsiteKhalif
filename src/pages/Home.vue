<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Hero Section -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-medium text-[#E6E6E6] tracking-tight mb-6">
        Hello Everyone! I'm Khalif.
      </h1>
      
      <p class="text-base md:text-lg text-[#646464] max-w-2xl leading-relaxed mb-6">
        I'm Computer Science student at BINUS University, passionate about Software Development, Data analytic, and problem solving. I love working with frontend & backend (Vue, React, Python) and I'm always looking to take on new challenge/work.
      </p>
      
      <div class="flex items-center justify-between flex-wrap gap-4 mt-8">
        <div class="flex items-center text-sm text-[#646464] gap-2">
          <MapPin class="w-4 h-4 text-cyan-400" />
          <span>Jakarta - Indonesia</span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#262626] ml-2"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#262626] mx-1"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#262626]"></span>
        </div>
        
        <router-link to="/about" class="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] text-base font-medium text-[#E6E6E6] hover:border-[#646464] transition-colors">
          More About Me
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>
    </section>

    <!-- Recent Projects Section -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <h2 class="text-2xl font-medium text-[#E6E6E6] mb-8">Recent Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Project 1 -->
        <router-link to="/projects/smartandon" class="group block cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <img :src="smartandonImg" alt="Smartandon" class="w-full h-full object-cover" />
          </div>
          <div class="text-xs text-cyan-400 font-bold tracking-wider mb-2 uppercase">Software Development Project</div>
          <h3 class="text-xl font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Smartandon</h3>
        </router-link>
        
        <router-link to="/projects/robot-inspection" class="group block cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <img :src="robotInspectionImg" alt="Robot Inspection System" class="w-full h-full object-cover" />
          </div>
          <div class="text-xs text-cyan-400 font-bold tracking-wider mb-2 uppercase">SOFTWARE ENGINEERING PROJECT</div>
          <h3 class="text-xl font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Robot Inspection System</h3>
        </router-link>
      </div>
      
      <div class="flex justify-end">
        <router-link to="/projects" class="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] text-base font-medium text-[#E6E6E6] hover:border-[#646464] transition-colors">
          View All Projects
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>
    </section>

    <!-- Stack Section -->
    <section class="mb-32 fade-in" v-motion-fade-visible-once>
      <h2 class="text-2xl font-medium text-[#E6E6E6] mb-8">Stack</h2>
      
      <div class="flex flex-col gap-4 mb-8">
        <div v-for="stack in stacks" :key="stack.name" class="flex items-center gap-5 p-5 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-colors">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-[#141414] p-2 overflow-hidden">
            <img :src="stack.icon" :alt="`${stack.name} logo`" class="w-full h-full object-contain" />
          </div>
          <div>
            <h3 class="text-base font-medium text-[#E6E6E6]">{{ stack.name }}</h3>
            <p class="text-sm text-[#646464]">{{ stack.category }}</p>
          </div>
        </div>
      </div>
      
      <div class="flex justify-start">
         <router-link to="/skills" class="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] text-base font-medium text-[#E6E6E6] hover:border-[#646464] transition-colors">
            View All Stack 
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
import { MapPin, ArrowRight } from 'lucide-vue-next'
import smartandonImg from '../assets/Experience/Smartandon Image 1.jpg'
import robotInspectionImg from '../assets/Experience/Robot Inspection 1.jpg'
import vueLogo from '../assets/StackLogo/Vue.js_Logo.png'
import nodeLogo from '../assets/StackLogo/Node.js_Logo.png'
import pythonLogo from '../assets/StackLogo/Python_Logo.png'
import mysqlLogo from '../assets/StackLogo/MySQL_Logo.png'
import rLogo from '../assets/StackLogo/R_Logo.png'
import javaLogo from '../assets/StackLogo/Java_Logo.png'

const stacks = [
  { name: 'Vue.js', category: 'Programming language', icon: vueLogo },
  { name: 'Node.js', category: 'Programming language', icon: nodeLogo },
  { name: 'Python', category: 'Programming language', icon: pythonLogo },
  { name: 'MySQL', category: 'Database & Tools', icon: mysqlLogo },
  { name: 'R', category: 'Programming language', icon: rLogo },
  { name: 'Java', category: 'Programming language', icon: javaLogo }
]
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
