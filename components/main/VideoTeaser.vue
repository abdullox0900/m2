<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from './SectionHeader.vue'

type VideoItem = {
  id: number | string
  title: string
  date: string
  thumb: string
  href?: string
}

const videos = ref<VideoItem[]>([
  {
    id: 1,
    date: '01 марта 2025 г.',
    title: 'Юбилей «Девелопмент-Юг» — 30 лет. Всё только развивается',
    thumb: '../../app/assets/img/video.png', // o'zingizning rasmingizga yo'l
    href: '#'
  },
  // qo'shimcha elementlar bo'lsa shu yerga
])

const idx = ref(0)
const total = computed(() => videos.value.length)
const current = computed(() => videos.value[idx.value])

function prev() {
  idx.value = (idx.value - 1 + total.value) % total.value
}
function next() {
  idx.value = (idx.value + 1) % total.value
}
</script>

<template>
  <section class="container pb-[120px] max-md:pb-[60px]">
    
    <SectionHeader title="Видео" class="mb-[60px] hidden max-[768px]:flex" />
    
    <div class="flex gap-[32px] max-md:gap-[22px] items-center justify-between max-[768px]:flex-col max-[768px]:flex-col max-[768px]:items-start">
      <!-- LEFT: Video preview -->
      <div class="relative">
        <div class="overflow-hidden rounded-2xl">
          <img
            src="../../app/assets/img/video-img.png"
            :alt="current.title"
            class="w-[660px] h-auto object-cover max-sm:h-[200px]"
          />
        </div>

        <!-- Play button (yarim tashqariga chiqib turgan ko'rinish) -->
        <button
          type="button"
          class="flex absolute right-[-40px] top-1/2 -translate-y-1/2 h-[120px] w-[120px] items-center justify-center rounded-full bg-m2-light
  max-[1024px]:w-[100px] max-[1024px]:h-[100px]
  max-[1024px]:left-1/2 max-[1024px]:-translate-x-1/2 max-[1024px]:right-auto"          aria-label="Play video"
        >
        <svg width="41" height="50" class="max-[1024px]:w-[40px] max-[1024px]:h-[40px]" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_736)">
<path d="M38.3125 20.8608L8.74219 1.25146C7.88281 0.678547 6.97136 0.37907 6.00781 0.353027C5.04427 0.326984 4.15234 0.502766 3.33203 0.880371C2.51172 1.25798 1.84114 1.82438 1.32031 2.57959C0.773438 3.3348 0.5 4.2072 0.5 5.19678V44.3765C0.5 45.366 0.773438 46.2384 1.32031 46.9937C1.84114 47.7228 2.51172 48.2827 3.33203 48.6733C4.15234 49.064 5.04427 49.2463 6.00781 49.2202C6.97136 49.1942 7.88281 48.8947 8.74219 48.3218L38.3125 28.7124C39.7708 27.7489 40.5 26.4403 40.5 24.7866C40.5 23.133 39.7708 21.8244 38.3125 20.8608Z" fill="#2D2452"/>
</g>
<defs>
<clipPath id="clip0_1_736">
<rect width="50" height="41" fill="white" transform="matrix(0 -1 -1 0 41 50)"/>
</clipPath>
</defs>
</svg>

        </button>
      </div>

      <!-- RIGHT: Header + meta + pager (desktop); mobil tartib pastda ko'rinadi -->
      <div class="max-w-[360px] max-md:max-w-full">
        <!-- Header -->
        <SectionHeader title="Видео" class="mb-[60px] max-[768px]:hidden" />


        <!-- Meta -->
        <p class="text-[12px] leading-[16px] text-m2-gray mb-[20px] max-md:mb-[5px]">
          {{ current.date }}
        </p>
        <a
          :href="current.href || '#'"
          class="block text-m2-dark text-[18px] font-extrabold leading-[26px] mb-[90px] max-md:mb-[20px] hover:opacity-90"
        >
          {{ current.title }}
        </a>

        <!-- Pager -->
        <div class="flex items-center justify-between w-[200px] max-md:w-full rounded-xl border border-m2-gray-light px-3 py-2 ">
          <button
            class="p-2 rounded-lg transition-colors hover:bg-m2-light"
            type="button"
            aria-label="Prev"
            @click="prev"
          >
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path d="M0.23 5.30c-.15.15-.23.34-.23.56s.08.45.23.61l4.44 4.45c.15.15.34.23.56.23s.41-.08.56-.23c.15-.15.22-.34.22-.56s-.07-.41-.22-.56L3.40 7.34c-.13-.13-.16-.27-.09-.44.07-.17.19-.25.37-.25H13.21c.22 0 .40-.08.55-.23.15-.15.23-.34.23-.56s-.08-.41-.23-.56a.78.78 0 0 0-.55-.23H3.68c-.18 0-.31-.08-.38-.25-.07-.17-.04-.31.09-.44l2.41-2.40c.15-.15.22-.34.22-.56s-.07-.41-.22-.56a.78.78 0 0 0-.56-.23c-.22 0-.41.08-.56.23L0.23 5.30Z" fill="#7A7D9D"/>
            </svg>
          </button>

          <span class="select-none text-m2-dark text-[14px] font-bold">
            {{ idx + 1 }} из {{ total }}
          </span>

          <button
            class="p-2 rounded-lg transition-colors hover:bg-m2-light"
            type="button"
            aria-label="Next"
            @click="next"
          >
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path d="M13.77 6.07c.15-.15.23-.34.23-.56s-.08-.41-.23-.56L9.32.50A.78.78 0 0 0 8.76.26c-.22 0-.41.08-.56.23-.15.15-.22.34-.22.56s.07.41.22.56l2.41 2.40c.13.13.16.27.09.44-.07.17-.19.25-.37.25H.79c-.22 0-.40.08-.56.23C.08 5.10 0 5.29 0 5.51s.08.41.23.56c.15.15.34.23.56.23h9.53c.18 0 .31.08.38.25.07.17.04.31-.09.44L8.19 9.39c-.15.15-.22.34-.22.56s.07.41.22.56c.15.15.34.23.56.23.22 0 .41-.08.56-.23l4.46-4.44Z" fill="#2D2452"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- MOBILE STACK (auto) -->
      <!-- Layout allaqachon grid bo‘lib, sm/md da bir ustun ko‘rinadi — ikkinchi skrinshotga mos -->
    </div>

    <!-- Mobilda header yuqorida bo‘lishini xohlasang, yuqoridagi headerni
         right-blokdan chiqarib umumiy grid tepasiga o‘tkazish mumkin, hozirgi holat ham mos tushadi -->
  </section>
</template>