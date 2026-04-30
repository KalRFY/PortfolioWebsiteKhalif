<template>
  <div class="min-h-screen flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20 md:px-12">
    
    <!-- Back Button -->
    <div class="mb-12 fade-in" v-motion-fade-visible-once>
      <router-link to="/" class="inline-flex items-center gap-2 text-sm text-[#646464] hover:text-cyan-400 transition-colors">
        <ArrowLeft class="w-4 h-4" />
        Back to Home
      </router-link>
    </div>

    <div v-if="project">
      <!-- Header Section -->
      <section class="mb-12 fade-in" v-motion-fade-visible-once>
        <div class="text-xs text-cyan-400 font-bold tracking-wider mb-4 uppercase">{{ project.category }}</div>
        <h1 class="text-3xl md:text-5xl font-medium text-[#E6E6E6] tracking-tight mb-4">
          {{ project.title }}
        </h1>
        <p class="text-sm font-medium text-[#646464] mb-6">
          Role: <span class="text-[#E6E6E6]">{{ project.role }}</span>
        </p>
      </section>

      <!-- Main Display / Asset -->
      <section class="mb-16 fade-in" v-motion-fade-visible-once>
        <!-- Single image: full width -->
        <div v-if="!project.image2" class="w-full aspect-video rounded-2xl bg-[#0a0a0a] overflow-hidden border border-[#262626] shadow-xl">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]" :class="project.imagePosition || 'object-center'" @click="openLightbox(project.image, project.title)" />
          <div v-else class="w-full h-full bg-[#141414] flex items-center justify-center text-[#646464] font-medium">
            Main Image / App Screenshot Placeholder
          </div>
        </div>

        <!-- Two images: side by side -->
        <div v-if="project.image2" class="grid grid-cols-2 gap-4">
          <div class="w-full aspect-[4/3] rounded-2xl bg-[#0a0a0a] overflow-hidden border border-[#262626] shadow-xl">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]" :class="project.imagePosition || 'object-center'" @click="openLightbox(project.image, project.title)" />
          </div>
          <div class="w-full aspect-[4/3] rounded-2xl bg-[#0a0a0a] overflow-hidden border border-[#262626] shadow-xl">
            <img :src="project.image2" :alt="project.title + ' Dashboard'" class="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]" :class="project.image2Position || 'object-center'" @click="openLightbox(project.image2, project.title + ' Dashboard')" />
          </div>
        </div>
      </section>

      <!-- Tech Stack Tags -->
      <section v-if="project.techStack" class="mb-12 fade-in" v-motion-fade-visible-once>
        <div class="flex flex-wrap gap-3">
          <span v-for="tech in project.techStack" :key="tech" class="px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full shadow-sm">
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Overview Section -->
      <section v-if="project.description" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Overview</h2>
        <p class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed whitespace-pre-line" v-html="project.description"></p>
      </section>

      <!-- Problem Context -->
      <section v-if="project.problemContext" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Problem Context</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.problemContext" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Solution -->
      <section v-if="project.solution" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Solution</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.solution" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- System Architecture -->
      <section v-if="project.architecture" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">System Architecture</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.architecture" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Deep Dive Section (Timeline Style) -->
      <section v-if="project.content" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-10">{{ project.contentTitle || 'Project Details' }}</h2>
        
        <div class="space-y-12">
          <div v-for="(section, index) in project.content" :key="index" class="relative pl-6 md:pl-8 border-l border-[#262626] hover:border-cyan-500/50 transition-colors duration-500 group">
            <!-- Timeline Dot -->
            <div class="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#262626] group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500"></div>
            
            <h3 class="text-xl font-medium text-[#E6E6E6] mb-4 group-hover:text-cyan-400 transition-colors duration-500">
              {{ section.heading }}
            </h3>
            <p class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="section.text"></p>
          </div>
        </div>
      </section>

      <!-- Engineering Work & Contributions -->
      <section v-if="project.engineering" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Engineering Work & Contributions</h2>
        <ul class="space-y-4">
          <li v-for="(item, index) in project.engineering" :key="index" class="flex items-start gap-3 text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed">
            <span class="text-cyan-400 mt-1 font-bold">→</span>
            <span v-html="item"></span>
          </li>
        </ul>
      </section>

      <!-- Technical Challenges -->
      <section v-if="project.challenges" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Technical Challenges</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.challenges" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Development Process -->
      <section v-if="project.developmentProcess" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Development Process</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.developmentProcess" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Impact -->
      <section v-if="project.impact" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Impact</h2>
        <ul class="space-y-4">
          <li v-for="(item, index) in project.impact" :key="index" class="flex items-start gap-3 text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed">
            <span class="text-cyan-400 mt-1 font-bold">→</span>
            <span v-html="item"></span>
          </li>
        </ul>
      </section>

      <!-- Lessons Learned -->
      <section v-if="project.lessonsLearned" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">Lessons Learned</h2>
        <div class="space-y-4">
          <p v-for="(para, index) in project.lessonsLearned" :key="index" class="text-base md:text-lg text-[#646464] max-w-4xl leading-relaxed" v-html="para"></p>
        </div>
      </section>

      <!-- Gallery Slider -->
      <section v-if="project.gallery && project.gallery.length" class="mb-16 fade-in" v-motion-fade-visible-once>
        <h2 class="text-2xl font-medium text-[#E6E6E6] mb-6">{{ project.galleryTitle || 'Gallery' }}</h2>
        <div class="relative w-full aspect-video rounded-2xl bg-[#0a0a0a] overflow-hidden border border-[#262626] shadow-xl group">
          <!-- Slides -->
          <div
            class="flex h-full transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${galleryIndex * 100}%)` }"
          >
            <div
              v-for="(item, index) in project.gallery"
              :key="index"
              class="w-full h-full flex-shrink-0 flex items-center justify-center bg-[#0a0a0a]"
            >
              <img
                :src="item.src || item"
                :alt="item.alt || `${project.title} gallery ${index + 1}`"
                class="w-full h-full object-cover cursor-pointer"
                :class="item.position || 'object-center'"
                @click="openLightbox(item.src || item, item.alt || `${project.title} gallery ${index + 1}`)"
              />
            </div>
          </div>

          <!-- Prev Button -->
          <button
            v-if="project.gallery.length > 1"
            @click="prevSlide"
            class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-[#262626] text-[#E6E6E6] hover:bg-cyan-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          <!-- Next Button -->
          <button
            v-if="project.gallery.length > 1"
            @click="nextSlide"
            class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-[#262626] text-[#E6E6E6] hover:bg-cyan-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight class="w-5 h-5" />
          </button>

          <!-- Caption -->
          <div
            v-if="currentGalleryCaption"
            class="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-sm text-[#E6E6E6]"
          >
            {{ currentGalleryCaption }}
          </div>
        </div>

        <!-- Dot Indicators -->
        <div v-if="project.gallery.length > 1" class="flex justify-center gap-2 mt-4">
          <button
            v-for="(item, index) in project.gallery"
            :key="index"
            @click="galleryIndex = index"
            :class="[
              'h-2 rounded-full transition-all',
              galleryIndex === index ? 'w-8 bg-cyan-400' : 'w-2 bg-[#262626] hover:bg-[#404040]'
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </section>
    </div>

    <div v-else class="flex-1 flex flex-col items-center justify-center text-center fade-in">
      <h1 class="text-4xl font-bold text-[#E6E6E6] mb-4">Project Not Found</h1>
      <p class="text-[#646464]">The project you're looking for doesn't exist.</p>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="lightboxImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
        @click.self="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#141414] border border-[#262626] text-[#E6E6E6] hover:bg-cyan-400 hover:text-black transition-colors z-10"
          aria-label="Close"
        >
          <X class="w-5 h-5" />
        </button>
        <img
          :src="lightboxImage"
          :alt="lightboxAlt"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </Transition>

    <!-- Footer -->
    <footer class="mt-auto border-t border-[#262626] pt-8 flex items-center justify-between gap-4">
      <p class="text-sm text-[#646464]">
        © Copyright 2026. All rights Reserved.
      </p>
    </footer>

  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() => projects[route.params.id])

const lightboxImage = ref(null)
const lightboxAlt = ref('')

function openLightbox(src, alt) {
  lightboxImage.value = src
  lightboxAlt.value = alt || ''
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxImage.value = null
  lightboxAlt.value = ''
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (e.key === 'Escape' && lightboxImage.value) {
    closeLightbox()
  }
}

// Gallery Slider
const galleryIndex = ref(0)

const currentGalleryCaption = computed(() => {
  const item = project.value?.gallery?.[galleryIndex.value]
  return item && typeof item === 'object' ? item.caption : ''
})

function nextSlide() {
  if (!project.value?.gallery?.length) return
  galleryIndex.value = (galleryIndex.value + 1) % project.value.gallery.length
}

function prevSlide() {
  if (!project.value?.gallery?.length) return
  const len = project.value.gallery.length
  galleryIndex.value = (galleryIndex.value - 1 + len) % len
}

watch(() => route.params.id, () => { galleryIndex.value = 0 })

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

:deep(strong) {
  color: #E6E6E6;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>