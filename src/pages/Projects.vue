<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Header -->
    <section class="mb-12 fade-in" v-motion-fade-visible-once>
      <h1 class="text-3xl md:text-5xl font-medium text-[#E6E6E6] tracking-tight">
        My Remarkable Projects
      </h1>
    </section>

    <!-- Projects List -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <div class="flex flex-col gap-16">
        
        <!-- Project 1 -->
        <div class="group cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <!-- Placeholder for Smartandon Image -->
             <div class="w-full h-full bg-[#141414] flex items-center justify-center text-[#646464] font-medium">
               <span class="opacity-50 text-xl">Smartandon Presentation Image Placeholder</span>
             </div>
          </div>
          <div class="text-xs text-cyan-500 font-bold tracking-wider mb-2 uppercase">SOFTWARE ENGINEERING PROJECT</div>
          <h3 class="text-2xl font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Smartandon</h3>
        </div>
        
        <!-- Project 2 -->
        <div class="group cursor-pointer">
          <div class="w-full aspect-video rounded-2xl bg-[#0a0a0a] mb-4 overflow-hidden border border-[#262626] shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
             <!-- Placeholder for Data Analytics Image -->
             <div class="w-full h-full bg-[#141414] flex items-center justify-center text-[#646464] font-medium tracking-tight text-center px-4">
               <span class="opacity-50 text-xl">LSTM Stock Predictions Dashboard Placeholder</span>
             </div>
          </div>
          <div class="text-xs text-cyan-500 font-bold tracking-wider mb-2 uppercase">DATA ANALYTICS PROJECT</div>
          <h3 class="text-2xl font-medium text-[#E6E6E6] group-hover:text-cyan-400 transition-colors">Project Data Analytics Stock Predictions Using LSTM</h3>
        </div>
        
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
