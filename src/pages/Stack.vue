<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Header -->
    <section class="mb-12 fade-in" v-motion-fade-visible-once>
      <h1 class="text-3xl md:text-5xl font-medium text-[#E6E6E6] tracking-tight">
        My Tech Toolbox
      </h1>
    </section>

    <!-- Stack List -->
    <section class="mb-24 fade-in" v-motion-fade-visible-once>
      <div class="flex flex-col gap-6">
        
        <div v-for="stack in stacks" :key="stack.name" class="p-6 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#646464] transition-colors">
          <div class="flex flex-col sm:flex-row items-start gap-6">
            
            <div class="flex items-center gap-4 w-full sm:w-auto min-w-[200px]">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold bg-[#141414]" :class="stack.colorClass">
                {{ stack.icon }}
              </div>
              
              <div>
                <h3 class="text-lg font-medium text-[#E6E6E6]">{{ stack.name }}</h3>
                <p class="text-sm text-[#646464]">{{ stack.category }}</p>
              </div>
            </div>

            <div class="mt-4 sm:mt-0 relative pl-4 sm:pl-8 sm:before:absolute sm:before:left-0 sm:before:top-2 sm:before:bottom-2 sm:before:w-[1px] sm:before:bg-[#262626] flex-1">
              <p class="text-base text-[#646464] leading-relaxed">
                {{ stack.description }}
              </p>
            </div>
            
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
const stacks = [
  { 
    name: 'Vue.js', 
    category: 'Programming language', 
    icon: 'V', 
    colorClass: 'text-green-500',
    description: "I use Vue.js for building interactive and scalable web interfaces. It's my go-to framework for crafting single-page applications with clean, component-based architectures." 
  },
  { 
    name: 'Node.js', 
    category: 'Programming language', 
    icon: 'N', 
    colorClass: 'text-green-600',
    description: "I rely on Node.js to power the backend of my web applications. It allows me to use JavaScript full-stack, building fast, scalable network applications and RESTful APIs." 
  },
  { 
    name: 'Python', 
    category: 'Programming language', 
    icon: 'P', 
    colorClass: 'text-blue-500',
    description: "I use Python for a wide range of tasks, from automated repetitive processes to complex data analysis. Its simplicity and powerful libraries like Pandas and NumPy make it my go-to for any data-driven project." 
  },
  { 
    name: 'MySQL', 
    category: 'Database', 
    icon: 'M', 
    colorClass: 'text-yellow-500',
    description: "SQL helps me manage and query databases efficiently. Whether I'm retrieving data for analysis or optimizing database performance, SQL is essential for making sense of structured data." 
  },
  { 
    name: 'R', 
    category: 'Programming language', 
    icon: 'R', 
    colorClass: 'text-blue-400',
    description: "R is my tool of choice for statistical analysis and data visualization. It's perfect for diving deep into large datasets, running models, and creating insightful graphics to better understand patterns." 
  },
  { 
    name: 'Java', 
    category: 'Programming language', 
    icon: 'J', 
    colorClass: 'text-red-500',
    description: "I turn to Java when I need to build scalable, reliable applications. It's been a very valuable tool for me in developing both web and mobile apps that require robust architecture." 
  },
  { 
    name: 'Figma', 
    category: 'Collaborative Design', 
    icon: 'F', 
    colorClass: 'text-pink-500',
    description: "Figma is my go-to for UI/UX design. I love using it to create clean, intuitive user interfaces and collaborate with teams in real-time, turning ideas into tangible designs." 
  },
  { 
    name: 'HTML 5', 
    category: 'Structure and Content', 
    icon: '5', 
    colorClass: 'text-orange-500',
    description: "HTML is essential for me in creating the structure of web pages. I use it to build clean, organized layouts that form the foundation of any web project." 
  },
  { 
    name: 'JavaScript', 
    category: 'Programming language', 
    icon: 'JS', 
    colorClass: 'text-yellow-400',
    description: "JavaScript adds life to my web projects. I use it to make websites interactive and dynamic, enhancing the user experience with smooth, responsive functionalities." 
  },
  { 
    name: 'C', 
    category: 'Programming language', 
    icon: 'C', 
    colorClass: 'text-blue-600',
    description: "C gives me the low-level control I need for projects that require performance optimization. I use it when I need to understand how things work under the hood, from memory management to efficient algorithms." 
  }
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
