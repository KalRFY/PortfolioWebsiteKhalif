<template>
  <nav class="flex flex-col gap-1 w-full px-2">
    <router-link 
      v-for="item in menuItems" 
      :key="item.name"
      :to="item.path"
      class="flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-all duration-200"
      :class="[
        $route.path === item.path 
          ? 'bg-[#141414] text-[#E6E6E6]' 
          : 'text-[#646464] hover:bg-[#0a0a0a] hover:text-[#E6E6E6]'
      ]"
    >
      <component :is="item.icon" class="w-4 h-4" />
      {{ item.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { 
  Home, 
  CircleUserRound, 
  LayoutGrid, 
  Layers, 
  Briefcase,
  Mail 
} from 'lucide-vue-next'

const menuItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: CircleUserRound },
  { name: 'Experience', path: '/experience', icon: Briefcase },
  { name: 'Projects', path: '/projects', icon: LayoutGrid },
  { name: 'Stack', path: '/skills', icon: Layers },
  { name: 'Contact', path: '/contact', icon: Mail }
]
</script>
