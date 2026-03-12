<template>
  <div class="min-h-screen bg-[#050505] text-[#E6E6E6] flex">
    <!-- Mobile Hamburger Button -->
    <button
      @click="isSidebarOpen = !isSidebarOpen"
      class="md:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]"
      aria-label="Toggle Sidebar"
    >
      <MenuIcon v-if="!isSidebarOpen" class="w-6 h-6 text-[#E6E6E6]" />
      <XIcon v-else class="w-6 h-6 text-[#E6E6E6]" />
    </button>

    <!-- Sidebar Overlay for Mobile -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="md:hidden fixed inset-0 bg-[#050505]/80 z-30"
    ></div>

    <!-- Sidebar -->
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Main Content -->
    <main class="flex-1 min-h-screen transition-all duration-300 md:ml-[280px]">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'
import Sidebar from './components/Sidebar.vue'

const isSidebarOpen = ref(false)
</script>
