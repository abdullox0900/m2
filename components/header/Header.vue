<!-- components/AppHeader.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from '#imports'

const route = useRoute()
const router = useRouter()

const mobileOpen = ref(false)

const topLinks = [
  { label: 'Документы', to: '/docs' },
  { label: 'О компании', to: '/about' }
]

const nav = [
  { label: 'Жилые комплексы', to: '/complexes' },
  { label: 'Ипотека', to: '/mortgage' },
  { label: 'Квартиры', to: '/flats' },
  { label: 'Блог', to: '/blog' },
  { label: 'Вакансии', to: '/vacancies' },
  { label: 'Контакты', to: '/contacts' }
]

const isActive = (path: string) => computed(() => route.path.startsWith(path))
const go = async (to: string) => {
  mobileOpen.value = false
  await router.push(to)
}
</script>

<template>
  <header class="w-full container mx-auto border-b border-m2-gray-light/50 bg-white max-md:border-none">
    <!-- Top bar (desktop) -->
    <div class="hidden md:block pt-[63px]">
      <div>
        <div class="flex items-center justify-between py-2 text-[13px] text-slate-500">
          <div class="flex items-center gap-[40px]">
            <NuxtLink v-for="l in topLinks" :key="l.to" :to="l.to" class="font-regular text-m2-gray text-[12px] hover:text-slate-800">
              {{ l.label }}
            </NuxtLink>
          </div>
          <div class="ml-auto flex items-center gap-3 mr-[130px]">
            <a href="tel:+79595772020" class="font-bold text-m2-gray text-[12px] hover:text-slate-900">
              +7 (959) 577-20-20
            </a>
            <NuxtLink to="/callback" class="text-m2-gray text-[12px] font-regular hover:text-slate-700 underline">
              Перезвоните мне
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main line -->
    <div class="pt-[40px] max-md:pt-[20px]">
      <div class="flex items-center justify-between pb-[20px]">
       <div class="flex items-center gap-[40px]">
         <!-- Logo -->
         <NuxtLink to="/" class="flex items-center justify-center h-full">
          <img src="../../app/assets/img/logo.png" alt="Logo" class="w-[250px] h-full object-contain max-md:w-[220px] max-[368px]:w-[190px]" />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-[30px]">
          <template v-for="item in nav" :key="item.to">
            <span class="relative">
              <NuxtLink
                :to="item.to"
                class="inline-block text-[14px] hover:text-slate-900 transition text-m2-dark font-light"
                :class="{ 'text-rose-600': isActive(item.to).value }"
              >
                {{ item.label }}
              </NuxtLink>
              <!-- aktiv underline: matn kengligi bilan -->
              <span
                v-if="isActive(item.to).value"
                class="absolute left-0 right-0 -bottom-[27px] h-[1px] w-full bg-rose-600"
              />
            </span>
          </template>
        </nav>
       </div>

        <!-- Right buttons -->
        <div class="flex items-center gap-[10px]">
          <!-- phone -->
          <a
            href="tel:+79595772020"
            class="hidden max-md:flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-white ring-1 ring-m2-gray-light text-slate-800 hover:bg-slate-50"
            aria-label="Call"
          >
            <img src="../../app/assets/img/phone-icon.svg" alt="Phone" class="w-[21px] h-[20px]">
          </a>

          <!-- burger (desktopda ham, mobilda ham) -->
          <div class="flex items-center gap-[30px]">
            <button class="max-md:hidden">
            <img src="../../app/assets/img/stateg-icon.svg" alt="Phone" class="w-[16px] h-[22px]">
           </button>
           <button class="max-md:hidden">
            <img src="../../app/assets/img/heart-icon.svg" alt="Phone" class="w-[27px] h-[22px]">
           </button>
          <button
            class="inline-flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-m2-light hover:bg-slate-100"
            aria-label="Menu"
            @click="mobileOpen = true"
          >
            <img src="../../app/assets/img/menu-icon.svg" alt="Menu" class="w-[16px] h-[8px]">
          </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Backdrop -->
  <transition name="fade">
    <div v-if="mobileOpen" class="fixed inset-0 z-[80] bg-black/30" @click="mobileOpen = false" />
  </transition>

  <!-- Drawer -->
  <transition name="slide">
    <aside
      v-if="mobileOpen"
      class="fixed right-0 top-0 z-[90] bg-m2-light w-full h-screen
             md:w-[440px] md:h-[80vh] md:my-10 md:rounded-2xl md:right-6 md:top-6 md:bottom-6 shadow-xl"
      role="dialog" aria-modal="true"
    >
      <div class="p-[15px] relative h-full overflow-y-auto">
        <!-- Close -->
        <button
          @click="mobileOpen = false"
          class="absolute top-4 right-4 h-[40px] w-[40px] flex items-center justify-center bg-white rounded-xl"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#8688A2]" stroke="currentColor" fill="none" stroke-width="2">
            <path d="M6 6l12 12M6 18L18 6" stroke-linecap="round"/>
          </svg>
        </button>


        <!-- Links -->
        <nav class="space-y-1 mt-[115px] mb-[60px]">
          <button
            v-for="item in nav"
            :key="item.to"
            @click="go(item.to)"
            class="group w-full text-left"
          >
            <div class="flex items-center justify-between py-4 border-b border-[#DADBE5]">
              <span class="relative inline-block text-[20px] font-semibold text-[#2D2452]">
                {{ item.label }}
                <span
                  v-if="isActive(item.to).value"
                  class="absolute left-0 -bottom-1 h-[2px] w-full bg-rose-600"
                />
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 9.19766H17.5" stroke="black" stroke-linecap="round"/>
<path d="M9.19775 17.5L9.19775 0.5" stroke="black" stroke-linecap="round"/>
</svg>
            </div>
          </button>
        </nav>

        <!-- Contacts -->
        <div class="text-[#2D2452]">
          <a href="tel:+79595772020" class="font-extrabold text-[20px]">+7 (959) 577-20-20</a>
          <NuxtLink to="/callback" class="font-light text-[#7A7D9D] underline block mt-[5px]">Перезвоните мне</NuxtLink>

          <p class="font-semibold mt-[20px] text-[20px]">г. Луганск, ул. Лутугинская, 47</p>
          <p class="text-[#7A7D9D] text-[14px] font-light">1 этаж</p>
        </div>

        <!-- Socials -->
        <div class="flex gap-[2px] mt-6">
          <a class="h-[40px] w-[40px] bg-white rounded-lg flex items-center justify-center" href="#" aria-label="Telegram">
            <img src="../../app/assets/img/telegram-logo.svg" alt="Telegram" class="w-[20px] h-[20px]">
          </a>
          <a class="h-[40px] w-[40px] bg-white rounded-lg flex items-center justify-center" href="#" aria-label="VK">
            <img src="../../app/assets/img/vk-logo.svg" alt="VK" class="w-[20px] h-[20px]">
          </a>
          <a class="h-[40px] w-[40px] bg-white rounded-lg flex items-center justify-center" href="#" aria-label="R">
            <img src="../../app/assets/img/rutube-logo.svg" alt="Youtube" class="w-[20px] h-[20px]">
          </a>
        </div>

        <!-- Floating call -->
        <a
          href="tel:+79595772020"
          class="fixed md:absolute bottom-[320px] right-6 bg-m2-accent text-white h-[60px] w-[60px] rounded-full shadow-lg flex items-center justify-center"
          aria-label="Call"
        >
          <img src="../../app/assets/img/white-phone-icon.svg" alt="Phone" class="w-[30px] h-[30px] relative top-[-4px] left-[-4px]">
        </a>
      </div>
    </aside>
  </transition>
</template>

<style scoped>
/* Animations */
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform .2s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>