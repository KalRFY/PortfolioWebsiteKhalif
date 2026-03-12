<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Header -->
    <section class="mb-16 fade-in" v-motion-fade-visible-once>
      <h1 class="text-3xl md:text-5xl font-medium text-[#E6E6E6] tracking-tight">
        Let's Connect!
      </h1>
    </section>

    <!-- Info Section -->
    <section class="mb-20 fade-in" v-motion-fade-visible-once>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <!-- Contact Details -->
        <div>
          <h2 class="text-xl font-medium text-[#E6E6E6] mb-8">Contact</h2>
          <div class="flex flex-col gap-6">
            <a href="mailto:m.khalif.r@gmail.com" target="_blank" class="flex items-center gap-4 text-base text-[#646464] hover:text-[#E6E6E6] transition-colors group">
              <Mail class="w-5 h-5 text-[#646464] group-hover:text-cyan-400 transition-colors" />
              m.khalif.r@gmail.com
            </a>
            <a href="tel:+6287889977529" target="_blank" class="flex items-center gap-4 text-base text-[#646464] hover:text-[#E6E6E6] transition-colors group">
              <Phone class="w-5 h-5 text-[#646464] group-hover:text-cyan-400 transition-colors" />
              +62 878 8997 7529
            </a>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h2 class="text-xl font-medium text-[#E6E6E6] mb-8">Social Media</h2>
          <div class="flex flex-col gap-6">
            <a href="https://www.linkedin.com/in/khalif-raflika-868404246" target="_blank" class="flex items-center gap-4 text-base text-[#646464] hover:text-[#E6E6E6] transition-colors group">
              <Linkedin class="w-5 h-5 text-[#646464] group-hover:text-cyan-400 transition-colors" />
              LinkedIn
            </a>
            <a href="https://github.com/KalRFY" target="_blank" class="flex items-center gap-4 text-base text-[#646464] hover:text-[#E6E6E6] transition-colors group">
              <Github class="w-5 h-5 text-[#646464] group-hover:text-cyan-400 transition-colors" />
              Github
            </a>
            <a href="https://www.behance.net/mkhalifr" target="_blank" class="flex items-center gap-4 text-base text-[#646464] hover:text-[#E6E6E6] transition-colors group">
              <span class="w-5 h-5 flex items-center justify-center text-[#646464] group-hover:text-cyan-400 transition-colors font-bold text-sm">Bé</span>
              Behance
            </a>
            <a href="#" target="_blank" class="flex items-center gap-4 text-base text-[#646464] hover:text-[#E6E6E6] transition-colors group">
              <Folder class="w-5 h-5 text-[#646464] group-hover:text-cyan-400 transition-colors" />
              Google Drive Portfolio Files
            </a>
          </div>
        </div>
        
      </div>
    </section>
    
    <!-- Message Form Section -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <h2 class="text-xl font-medium text-[#E6E6E6] mb-8">Message Me</h2>
      
      <form @submit.prevent="sendMessage" class="flex flex-col gap-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Name" 
            v-model="form.name"
            class="w-full bg-[#0a0a0a] border border-[#262626] rounded-xl px-5 py-4 text-base text-[#E6E6E6] placeholder-[#646464] focus:outline-none focus:border-cyan-500 transition-colors"
            required
          >
          <input 
            type="email" 
            placeholder="Email" 
            v-model="form.email"
            class="w-full bg-[#0a0a0a] border border-[#262626] rounded-xl px-5 py-4 text-base text-[#E6E6E6] placeholder-[#646464] focus:outline-none focus:border-cyan-500 transition-colors"
            required
          >
        </div>
        
        <button 
          type="submit" 
          class="w-full bg-cyan-400 hover:bg-cyan-300 text-[#050505] font-semibold rounded-xl px-4 py-4 text-base transition-colors mt-2"
        >
          Send Message
        </button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="mt-auto border-t border-[#262626] pt-8 flex items-center justify-start gap-4">
      <p class="text-sm text-[#646464]">
        © Copyright 2026. All rights Reserved.
      </p>
    </footer>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Mail, Phone, Linkedin, Github, Folder } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: ''
})

const sendMessage = () => {
  console.log('Message logic placeholder', form)
  // Logic to handle message sending goes here
  alert(`Thanks ${form.name}, this is a demo form!`)
  form.name = ''
  form.email = ''
}
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
