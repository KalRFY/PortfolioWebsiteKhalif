<template>
  <aside 
    class="fixed top-0 left-0 h-full w-[280px] bg-[#050505] border-r border-[#262626] p-6 pt-8 flex flex-col z-40 transition-transform duration-300 md:translate-x-0"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Profile Section -->
    <ProfileCard />

    <!-- Navigation Menu -->
    <NavigationMenu class="mt-8 mb-auto" />

    <!-- Social Links -->
    <div class="flex items-center justify-around w-full mb-8 px-2 text-[#646464]">
      <a href="https://www.linkedin.com/in/khalif-raflika-868404246" target="_blank" class="hover:text-[#E6E6E6] transition-colors" aria-label="LinkedIn">
        <Linkedin class="w-5 h-5" />
      </a>
      <a href="https://github.com/KalRFY" target="_blank" class="hover:text-[#E6E6E6] transition-colors" aria-label="Github">
        <Github class="w-5 h-5" />
      </a>
      <a href="https://www.behance.net/mkhalifr" target="_blank" class="hover:text-[#E6E6E6] transition-colors" aria-label="Behance">
        <span class="font-bold text-lg leading-none flex items-center justify-center">Bē</span>
      </a>
      <a href="#" target="_blank" class="hover:text-[#E6E6E6] transition-colors" aria-label="Google Drive">
        <Triangle class="w-5 h-5" />
      </a>
    </div>
  </aside>
</template>

<script setup>
import { Linkedin, Github, Triangle } from 'lucide-vue-next'
import ProfileCard from './ProfileCard.vue'
import NavigationMenu from './NavigationMenu.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>
