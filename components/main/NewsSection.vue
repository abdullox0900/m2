<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from './SectionHeader.vue'

type NewsItem = {
  id: number | string
  date: string
  title: string
  excerpt: string
  href?: string
}

// Lokal ma'lumot (keyin API ga almashtirsa bo'ladi)
const allItems = ref<NewsItem[]>([
  {
    id: 1,
    date: '01 марта 2025 г.',
    title: 'Юбилей «Девелопмент-Юг» — 30 лет. Всё только развивается',
    excerpt:
      '1 марта корпорация «Девелопмент-Юг» отмечает 30-летие. За это время компания реализует проекты в 6 регионах России.',
    href: '#'
  },
  {
    id: 2,
    date: '01 марта 2025 г.',
    title:
      'Всё только развивается: интервью основателя корпорации «Девелопмент-Юг» Сергея Иванова',
    excerpt:
      'Инвестиционно-строительная корпорация была зарегистрирована в марте 1995 года. Основал её Сергей Петрович Иванов.',
    href: '#'
  },
  {
    id: 3,
    date: '23 февраля 2025 г.',
    title: 'Поздравляем с Днём защитника Отечества!',
    excerpt:
      'Этот праздник символизирует мужество и стойкость. Желаем благополучия и мира!',
    href: '#'
  },
  // Qo'shimcha itemlar bo'lsa, shu yerga qo'shasiz
])

// Desktop pagination (3 карточки)
const perPage = 3
const page = ref(0)
const pageCount = computed(() => Math.max(1, Math.ceil(allItems.value.length / perPage)))
const items = computed(() => {
  const start = page.value * perPage
  return allItems.value.slice(start, start + perPage)
})

// Mobile pagination (1 карточка)
const currentIndex = ref(0)
const currentNews = computed(() => allItems.value[currentIndex.value])

function prev() {
  page.value = (page.value - 1 + pageCount.value) % pageCount.value
}
function next() {
  page.value = (page.value + 1) % pageCount.value
}

function prevMobile() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
function nextMobile() {
  if (currentIndex.value < allItems.value.length - 1) {
    currentIndex.value++
  }
}
</script>

<template>
  <section class="pb-[160px] max-md:pb-[60px] container">
    <!-- Header -->
    <div class="mb-[28px] flex items-center justify-between gap-4">
      <SectionHeader title="Новости" class="mb-0" />

      <!-- Desktop Pager (← — →) -->
      <div class="hidden md:flex items-center gap-5 rounded-xl border border-m2-gray-light px-3 py-2 text-m2-dark/70">
        <button class="p-1 transition-colors hover:text-m2-dark" aria-label="Назад" type="button" @click="prev">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_654)">
              <path d="M0.232422 5.30058C0.077474 5.45539 0 5.64208 0 5.86063C0 6.07919 0.077474 6.26588 0.232422 6.42069L4.67578 10.8738C4.83073 11.0286 5.01986 11.106 5.24316 11.106C5.46647 11.106 5.6556 11.0286 5.81055 10.8738C5.96549 10.719 6.04297 10.53 6.04297 10.3069C6.04297 10.0838 5.96549 9.89485 5.81055 9.74003L3.4043 7.3359C3.27669 7.20841 3.24707 7.0627 3.31543 6.89878C3.38379 6.73486 3.50456 6.6529 3.67773 6.6529H13.207C13.4258 6.6529 13.6126 6.5755 13.7676 6.42069C13.9225 6.26588 14 6.07919 14 5.86063C14 5.64208 13.9225 5.45539 13.7676 5.30058C13.6126 5.14577 13.4258 5.06836 13.207 5.06836H3.67773C3.50456 5.06836 3.38379 4.9864 3.31543 4.82248C3.24707 4.65857 3.27669 4.51286 3.4043 4.38537L5.81055 1.98123C5.96549 1.82642 6.04297 1.63974 6.04297 1.42118C6.04297 1.20262 5.96549 1.01594 5.81055 0.861124C5.6556 0.706312 5.46647 0.628906 5.24316 0.628906C5.01986 0.628906 4.83073 0.706312 4.67578 0.861124L0.232422 5.30058Z" fill="#7A7D9D"/>
            </g>
            <defs>
              <clipPath id="clip0_1_654">
                <rect width="11.37" height="14" fill="white" transform="matrix(0 1 1 0 0 0)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <span aria-hidden="true" class="select-none">—</span>
        <button class="p-1 transition-colors hover:text-m2-dark" aria-label="Вперёд" type="button" @click="next">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_659)">
              <path d="M13.7676 6.06954C13.9225 5.91473 14 5.72804 14 5.50948C14 5.29093 13.9225 5.10424 13.7676 4.94943L9.32422 0.496316C9.16927 0.341504 8.98014 0.264098 8.75684 0.264098C8.53353 0.264098 8.3444 0.341504 8.18945 0.496316C8.03451 0.651128 7.95703 0.840089 7.95703 1.0632C7.95703 1.28631 8.03451 1.47527 8.18945 1.63008L10.5957 4.03422C10.7233 4.16171 10.7529 4.30742 10.6846 4.47134C10.6162 4.63525 10.4954 4.71721 10.3223 4.71721H0.792969C0.574219 4.71721 0.38737 4.79462 0.232422 4.94943C0.0774736 5.10424 0 5.29093 0 5.50948C0 5.72804 0.0774736 5.91473 0.232422 6.06954C0.38737 6.22435 0.574219 6.30176 0.792969 6.30176H10.3223C10.4954 6.30176 10.6162 6.38372 10.6846 6.54763C10.7529 6.71155 10.7233 6.85726 10.5957 6.98475L8.18945 9.38888C8.03451 9.5437 7.95703 9.73038 7.95703 9.94894C7.95703 10.1675 8.03451 10.3542 8.18945 10.509C8.3444 10.6638 8.53353 10.7412 8.75684 10.7412C8.98014 10.7412 9.16927 10.6638 9.32422 10.509L13.7676 6.06954Z" fill="#2D2452"/>
            </g>
            <defs>
              <clipPath id="clip0_1_659">
                <rect width="11.37" height="14" fill="white" transform="matrix(0 -1 -1 0 14 11.3701)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>

    <!-- Desktop Cards Grid (3 колонки) -->
    <div class="hidden md:grid gap-[24px] md:grid-cols-3">
      <article
        v-for="n in items"
        :key="n.id"
        class="rounded-2xl min-h-[500px] border border-m2-gray-light bg-white p-[41px] shadow-[0_1px_0_rgba(17,24,39,0.03)] transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)]"
      >
        <p class="text-[12px] leading-[16px] text-m2-gray mb-[40px]">
          {{ n.date }}
        </p>

        <h3 class="text-m2-dark text-[20px] font-extrabold leading-[26px] mb-[40px]">
          {{ n.title }}
        </h3>

        <p class="text-[14px] leading-[22px] text-m2-gray">
          {{ n.excerpt }}
        </p>
      </article>
    </div>

    <!-- Mobile Single Card View -->
    <div class="md:hidden mb-[40px]">
      <article
        v-if="currentNews"
        :key="currentNews.id"
        class="rounded-2xl border border-m2-gray-light bg-white p-[21px] min-h-[350px] shadow-[0_1px_0_rgba(17,24,39,0.03)]"
      >
        <p class="text-[12px] leading-[16px] text-m2-gray mb-[26px]">
          {{ currentNews.date }}
        </p>

        <h3 class="text-m2-dark text-[20px] font-extrabold leading-[26px] mb-[26px]">
          {{ currentNews.title }}
        </h3>

        <p class="text-[14px] leading-[22px] text-m2-gray">
          {{ currentNews.excerpt }}
        </p>
      </article>

      <!-- Mobile Navigation -->
      <div class="flex items-center justify-between mt-6 px-4 h-[50px] py-[12px] border border-m2-gray-light rounded-[10px] bg-white">
        <button
          @click="prevMobile"
          :disabled="currentIndex === 0"
          :class="[
            'flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-m2-light'
          ]"
          type="button"
          aria-label="Назад"
        >
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1122)">
              <path d="M0.232422 5.30058C0.077474 5.45539 0 5.64208 0 5.86063C0 6.07919 0.077474 6.26588 0.232422 6.42069L4.67578 10.8738C4.83073 11.0286 5.01986 11.106 5.24316 11.106C5.46647 11.106 5.6556 11.0286 5.81055 10.8738C5.96549 10.719 6.04297 10.53 6.04297 10.3069C6.04297 10.0838 5.96549 9.89485 5.81055 9.74003L3.4043 7.3359C3.27669 7.20841 3.24707 7.0627 3.31543 6.89878C3.38379 6.73486 3.50456 6.6529 3.67773 6.6529H13.207C13.4258 6.6529 13.6126 6.5755 13.7676 6.42069C13.9225 6.26588 14 6.07919 14 5.86063C14 5.64208 13.9225 5.45539 13.7676 5.30058C13.6126 5.14577 13.4258 5.06836 13.207 5.06836H3.67773C3.50456 5.06836 3.38379 4.9864 3.31543 4.82248C3.24707 4.65857 3.27669 4.51286 3.4043 4.38537L5.81055 1.98123C5.96549 1.82642 6.04297 1.63974 6.04297 1.42118C6.04297 1.20262 5.96549 1.01594 5.81055 0.861124C5.6556 0.706312 5.46647 0.628906 5.24316 0.628906C5.01986 0.628906 4.83073 0.706312 4.67578 0.861124L0.232422 5.30058Z" fill="#7A7D9D"/>
            </g>
            <defs>
              <clipPath id="clip0_1_1122">
                <rect width="11.37" height="14" fill="white" transform="matrix(0 1 1 0 0 0)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <span class="text-m2-dark text-[14px] font-bold font-medium">{{ currentIndex + 1 }} из {{ allItems.length }}</span>
        <button
          @click="nextMobile"
          :disabled="currentIndex === allItems.length - 1"
          :class="[
            'flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
            currentIndex === allItems.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-m2-light'
          ]"
          type="button"
          aria-label="Вперёд"
        >
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1130)">
              <path d="M13.7676 6.06942C13.9225 5.91461 14 5.72792 14 5.50937C14 5.29081 13.9225 5.10412 13.7676 4.94931L9.32422 0.496199C9.16927 0.341387 8.98014 0.263981 8.75684 0.263981C8.53353 0.263981 8.3444 0.341387 8.18945 0.496199C8.03451 0.651011 7.95703 0.839972 7.95703 1.06308C7.95703 1.28619 8.03451 1.47515 8.18945 1.62997L10.5957 4.0341C10.7233 4.16159 10.7529 4.3073 10.6846 4.47122C10.6162 4.63514 10.4954 4.7171 10.3223 4.7171H0.792969C0.574219 4.7171 0.38737 4.7945 0.232422 4.94931C0.0774736 5.10412 0 5.29081 0 5.50937C0 5.72792 0.0774736 5.91461 0.232422 6.06942C0.38737 6.22423 0.574219 6.30164 0.792969 6.30164H10.3223C10.4954 6.30164 10.6162 6.3836 10.6846 6.54752C10.7529 6.71143 10.7233 6.85714 10.5957 6.98463L8.18945 9.38877C8.03451 9.54358 7.95703 9.73026 7.95703 9.94882C7.95703 10.1674 8.03451 10.3541 8.18945 10.5089C8.3444 10.6637 8.53353 10.7411 8.75684 10.7411C8.98014 10.7411 9.16927 10.6637 9.32422 10.5089L13.7676 6.06942Z" fill="#2D2452"/>
            </g>
            <defs>
              <clipPath id="clip0_1_1130">
                <rect width="11.37" height="14" fill="white" transform="matrix(0 -1 -1 0 14 11.37)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>