<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Hero / Bio Section -->
    <section class="mb-16 fade-in" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-medium text-[#E6E6E6] tracking-tight mb-8">
        Get to Know Me
      </h1>
      
      <div class="space-y-6 text-base md:text-lg text-[#646464] max-w-3xl leading-relaxed mb-10">
        <p>
          Welcome! I'm Khalif, a Computer Science student at BINUS University with a passion for data analysis, business analysis, and software development. I have experience working with programming languages like Python, R, SQL, and Java, and I also enjoy using tools like Tableau and Figma to create practical and innovative solutions.
        </p>
        <p>
          Beyond the technical side, I love working in collaborative environments, bringing teams together to solve problems and achieve shared goals. My involvement in various projects and leadership roles has helped me sharpen my communication, problem-solving, and leadership skills. I'm always excited to take on new challenges and explore how technology can drive meaningful change.
        </p>
        <p>
          Feel free to browse through my portfolio to see some of the projects I've worked on, and how I'm using my skills to make an impact!
        </p>
      </div>

      <div class="flex items-center text-sm text-[#646464] gap-2 mb-4">
        <MapPin class="w-5 h-5 text-cyan-400" />
        <span>Jakarta, Indonesia</span>
      </div>
    </section>

    <!-- Education Section -->
    <section class="mb-20 fade-in" v-motion-fade-visible-once>
      <h2 class="text-2xl font-medium text-[#E6E6E6] mb-8">Education</h2>
      
      <div class="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#262626] before:to-transparent">
        <div v-for="(edu, index) in education" :key="index" class="relative pl-8 md:pl-0">
          <div class="md:flex items-center justify-between md:flex-row-reverse">
            <div class="flex items-center justify-start w-full md:w-1/2 md:pl-8">
               <div class="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#646464] -translate-x-1/2"></div>
               <div class="md:hidden absolute left-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#646464] mt-1.5 translate-x-[0.5px]"></div>
               
               <div>
                 <h3 class="text-[#E6E6E6] font-medium text-base sm:text-lg flex items-center gap-2">
                    <CheckCircle2 class="w-5 h-5 text-[#646464] hidden md:block" /> 
                    {{ edu.school }}
                 </h3>
                 <p class="text-sm text-[#646464] mt-1">{{ edu.period }}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack Section -->
    <section class="mb-20 fade-in" v-motion-fade-visible-once>
      <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Stack</h2>
      
      <p class="text-base md:text-lg text-[#646464] max-w-3xl leading-relaxed mb-8">
        My technical toolkit includes proficiency in Python, R, SQL, Java, JavaScript, and C, which I use for everything from data analysis to building robust applications. Additionally, I leverage Tableau for data visualization and Android Studio for mobile app development, ensuring that the projects I work on are both functional and visually engaging across different platforms.
      </p>

      <div class="flex justify-end">
        <router-link to="/skills" class="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] text-base font-medium text-[#E6E6E6] hover:border-[#646464] transition-colors">
          View All Stack
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mb-20 fade-in" v-motion-fade-visible-once>
      <h2 class="text-2xl font-medium text-[#E6E6E6] mb-8">Experience</h2>
      
      <div class="flex flex-col gap-8">
        <div v-for="(exp, index) in experience" :key="index" class="flex items-start gap-4">
          <div class="mt-2 w-2 h-2 rounded-full bg-[#646464] shrink-0"></div>
          <div>
            <h3 class="text-[#E6E6E6] font-medium text-lg">{{ exp.role }}</h3>
            <p class="text-sm text-[#646464] mt-1">{{ exp.company }}, {{ exp.period }}</p>
          </div>
        </div>
      </div>
      
      <div class="flex justify-end mt-10">
        <router-link to="/experience" class="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] text-base font-medium text-[#E6E6E6] hover:border-[#646464] transition-colors">
          View Detailed Experience
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>
    </section>

    <!-- Volunteer Experience Section -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <h2 class="text-2xl font-medium text-[#E6E6E6] mb-8">Volunteer Experience</h2>
      
      <div class="flex flex-col gap-8">
        <div v-for="(vol, index) in volunteer" :key="index" class="flex items-start gap-4">
          <div class="mt-2 w-2 h-2 rounded-full bg-[#646464] shrink-0"></div>
          <div>
            <h3 class="text-[#E6E6E6] font-medium text-lg">{{ vol.role }}</h3>
            <p class="text-sm text-[#646464] mt-1">{{ vol.company }}, {{ vol.period }}</p>
          </div>
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
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const education = [
  { school: 'Universitas Bina Nusantara', period: '2022 - Present' },
  { school: 'SMAN 13 Jakarta', period: '2019 - 2022' },
  { school: 'SMPI Al-Azhar 12 Rawamangun', period: '2016 - 2019' }
]

const experience = [
  { role: 'Software Engineer Intern', company: 'PT Toyota Motor Manufacturing Indonesia (TMMIN)', period: 'Feb 2025 – Feb 2026' },
  { role: 'Web Development Division', company: 'Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS', period: 'March 2023 - March 2025' },
  { role: 'TECHNO Sponsorship Committee', company: 'TECHNO HIMTI BINUS', period: 'April 2023 - September 2023' }
]

const volunteer = [
  { role: 'Volunteer Teacher TFI (Teach For Indonesia)', company: 'Teach For Indonesia', period: 'February 2023 - March 2023' }
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
