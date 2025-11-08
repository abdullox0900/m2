<template>
  <footer class="border-t border-m2-light">
    <!-- Main Footer Content -->
    <div class="container py-[60px] max-md:py-[40px]">
      <!-- Desktop Layout: 3 columns -->
      <div class="grid grid-cols-3 gap-8 max-md:grid-cols-1 lg:gap-12">

        <NuxtLink to="/" class="hidden items-center h-full max-md:flex mb-[30px]">
                 <img src="../../app/assets/img/logo.png" alt="Logo" class="w-[250px] h-full object-contain max-md:w-[220px] max-[368px]:w-[190px]" />
            </NuxtLink>
        <!-- Navigation Links - Desktop -->
        <div class="grid grid-cols-2 gap-[40px] max-md:text-[14px]">
          <div class="flex flex-col gap-[20px]">
            <NuxtLink to="/complexes" class="text-m2-gray hover:text-m2-accent transition-colors">
              Жилые комплексы
            </NuxtLink>
            <NuxtLink to="/payment" class="text-m2-gray hover:text-m2-accent transition-colors">
              Способы покупки
            </NuxtLink>
            <NuxtLink to="/flats" class="text-m2-gray hover:text-m2-accent transition-colors">
              Квартиры
            </NuxtLink>
            <NuxtLink to="/blog" class="text-m2-gray hover:text-m2-accent transition-colors">
              Блог
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-[20px]">
            <NuxtLink to="/contacts" class="text-m2-gray hover:text-m2-accent transition-colors">
              Контакты
            </NuxtLink>
            <NuxtLink to="/docs" class="text-m2-gray hover:text-m2-accent transition-colors">
              Документы
            </NuxtLink>
            <NuxtLink to="/about" class="text-m2-gray hover:text-m2-accent transition-colors">
              О корпорации
            </NuxtLink>
            <NuxtLink to="/realtors" class="text-m2-gray hover:text-m2-accent transition-colors">
              Риелторам
            </NuxtLink>
          </div>
        </div>

        <!-- Contact Information and Social Media - Desktop -->
        <div class="flex flex-col gap-[28px]">
          <div>
            <a href="tel:+79595772020" class="text-m2-dark font-bold text-[20px] hover:text-m2-accent transition-colors">
              +7 (959) 577-20-20
            </a>
            <NuxtLink to="/callback" class="block text-m2-gray text-sm font-light mt-1 hover:text-m2-accent transition-colors underline">
              Перезвоните мне
            </NuxtLink>
          </div>
          <div>
            <p class="text-m2-dark font-semibold text-[16px]">г. Луганск, ул. Лутугинская, 47</p>
          </div>
          <!-- Social Media Icons -->
          <div class="flex gap-[2px] mt-2 max-md:mt-0">
            <a
              href="#"
              class="h-[40px] w-[40px] bg-m2-light rounded-lg flex items-center justify-center hover:bg-m2-accent transition-colors"
              aria-label="Telegram"
            >
              <img src="../../app/assets/img/telegram-logo.svg" alt="Telegram" class="w-[20px] h-[20px]">
            </a>
            <a
              href="#"
              class="h-[40px] w-[40px] bg-m2-light rounded-lg flex items-center justify-center hover:bg-m2-accent transition-colors"
              aria-label="VK"
            >
              <img src="../../app/assets/img/vk-logo.svg" alt="VK" class="w-[20px] h-[20px]">
            </a>
            <a
              href="#"
              class="h-[40px] w-[40px] bg-m2-light rounded-lg flex items-center justify-center hover:bg-m2-accent transition-colors"
              aria-label="Rutube"
            >
              <img src="../../app/assets/img/rutube-logo.svg" alt="Rutube" class="w-[20px] h-[20px]">
            </a>
          </div>
        </div>

        <!-- Company Logo and Legal Links - Desktop -->
        <div class="flex flex-col gap-[85px] max-md:gap-0">
          <div>
            <NuxtLink to="/" class="flex items-center h-full max-md:hidden">
                 <img src="../../app/assets/img/logo.png" alt="Logo" class="w-[250px] h-full object-contain max-md:w-[220px] max-[368px]:w-[190px]" />
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-[10px] ml-[20px] max-md:ml-0">
            <NuxtLink to="/privacy" class="text-m2-gray text-sm hover:text-m2-accent transition-colors underline">
              Политика конфиденциальности
            </NuxtLink>
            <NuxtLink to="/privacy-google" class="text-m2-gray text-sm hover:text-m2-accent transition-colors underline">
              Privacy policy Google
            </NuxtLink>
            <NuxtLink to="/terms" class="text-m2-gray text-sm hover:text-m2-accent transition-colors underline">
              Условия использования
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Strip -->
    <div class="bg-m2-light">
      <div class="container py-[40px] max-md:pt-[20px] max-md:pb-[120px]">
        <p class="text-start max-md:text-left text-m2-gray text-[12px] leading-[22px]">
          © 2025 ООО «М2 Девелопмент»
        </p>
      </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-m2-gray-light rounded-t-2xl shadow-lg md:hidden z-50">
      <div class="container">
        <nav class="flex items-center justify-around py-3">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'flex flex-col items-center justify-center gap-1 px-2 py-1 transition-colors',
              isActive(item.to) ? 'text-m2-accent' : 'text-m2-gray'
            ]"
          >
            <!-- Icon -->
            <div class="w-6 h-6 flex items-center justify-center">
              <svg
                v-if="item.icon === 'home'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <svg
                v-else-if="item.icon === 'complex'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <svg
                v-else-if="item.icon === 'flats'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                />
              </svg>
              <svg
                v-else-if="item.icon === 'mortgage'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <svg
                v-else-if="item.icon === 'profile'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <!-- Label -->
            <span class="text-xs font-medium">{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'

const route = useRoute()

const navItems = [
  { label: 'Главная', to: '/', icon: 'home' },
  { label: 'ЖК', to: '/complexes', icon: 'complex' },
  { label: 'Квартиры', to: '/flats', icon: 'flats' },
  { label: 'Ипотека', to: '/mortgage', icon: 'mortgage' },
  { label: 'Профиль', to: '/profile', icon: 'profile' }
]

const isActive = (path: string) => route.path === path || (path !== '/' && route.path.startsWith(path))
</script>

<style scoped>
</style>

