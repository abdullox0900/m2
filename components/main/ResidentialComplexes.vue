<!-- components/main/ResidentialComplexes.vue -->
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SectionHeader from './SectionHeader.vue'

// Import image - Nuxt 3 way
const flatImg = 'img/flat-img.png'

const complexes = ref([
  {
    id: 1,
    image: flatImg,
    price: '9.1',
    title: 'Архитектор',
    description: 'г. Владивосток, ул. Бежецкая 1',
    icon: 'location'
  },
  {
    id: 2,
    image: flatImg,
    price: '8.9',
    title: 'Футурист',
    description: 'Квартиры с террасами',
    icon: 'terrace'
  },
  {
    id: 3,
    image: flatImg,
    price: '9.6',
    title: 'Каштановый двор',
    description: 'Двор-сад без машин',
    icon: 'garden'
  },
  {
    id: 4,
    image: flatImg,
    price: '6.1',
    title: 'Sport Village',
    description: 'Квартиры с терраками',
    icon: 'terrace'
  },
  {
    id: 5,
    image: flatImg,
    price: '15.4',
    title: 'Development-Plaza',
    description: 'Первый мультиформатный дом',
    icon: 'building'
  },
  {
    id: 6,
    image: flatImg,
    price: '8.4',
    title: 'Состояние',
    description: 'г. Ростов-на-Дону, ул. Благодатная, 104/14',
    icon: 'location'
  },
  {
    id: 7,
    image: flatImg,
    price: '6.1',
    title: 'Центральный',
    description: 'г. Астрахань, ул. Акшарумова, 29',
    icon: 'location'
  },
  {
    id: 8,
    image: flatImg,
    price: '4.6',
    title: 'Погода',
    description: 'г. Пермь, ул. Сапфирная',
    icon: 'location'
  },
  {
    id: 9,
    image: flatImg,
    price: '5',
    title: 'ЮГ на Беляева',
    description: 'г. Пермь, р-н Индустриальный, ул. Космона',
    icon: 'location'
  }
])

const selectedCity = ref('Любой')
const isCityDropdownOpen = ref(false)
const minPrice = ref('4.6')
const maxPrice = ref('37')
const viewMode = ref<'grid' | 'list'>('grid')
const showCount = ref(9)
const totalCount = ref(11)
const currentIndex = ref(0)

const cities = ['Любой', 'Москва', 'Санкт-Петербург', 'Владивосток']

const toggleCityDropdown = () => {
  isCityDropdownOpen.value = !isCityDropdownOpen.value
}

const selectCity = (city: string) => {
  selectedCity.value = city
  isCityDropdownOpen.value = false
}

const closeDropdownOnOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.city-dropdown-container')) {
    isCityDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdownOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnOutsideClick)
})

const showMore = () => {
  showCount.value = totalCount.value
}

const currentComplex = computed(() => complexes.value[currentIndex.value])

const nextCard = () => {
  if (currentIndex.value < complexes.value.length - 1) {
    currentIndex.value++
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<template>
  <section class="pb-[170px] max-md:pb-[60px]">
    <div class="container">
      <!-- Header -->
      <SectionHeader title="Жилые комплексы" />

      <!-- Mobile Filter Buttons -->
      <div class="hidden max-md:grid grid-cols-2 gap-[20px] mb-[20px]">
        <button
          class="flex items-center justify-center gap-[20px] rounded-xl border border-m2-gray-light bg-white px-4 py-3 text-m2-dark hover:bg-m2-light transition-colors"
          type="button"
        >
          <img src="../../app/assets/img/fillter-icon.svg" alt="Filter Icon" class="w-[22px] h-[18px]">
          <span>Фильтр</span>
        </button>
        <button
          class="flex items-center justify-center gap-2 rounded-xl border border-m2-gray-light bg-white px-4 py-3 text-m2-dark hover:bg-m2-light transition-colors"
          type="button"
        >
          <img src="../../app/assets/img/map.svg" alt="Map Icon" class="w-[22px] h-[18px]">
          <span>На карте</span>
        </button>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-end gap-6 mb-[40px] pb-6 max-md:hidden">
        <!-- City Filter -->
        <div class="flex flex-col relative city-dropdown-container">
          <label class="mb-2 text-sm text-m2-gray">Город</label>
          <div class="relative">
            <button
              @click="toggleCityDropdown"
              :class="[
                'w-full flex items-center justify-between rounded-xl border bg-white px-4 py-3 pr-10 text-m2-dark focus:border-m2-accent focus:outline-none min-w-[200px] text-left',
                isCityDropdownOpen ? 'border-m2-accent' : 'border-m2-gray-light'
              ]"
              type="button"
            >
              <span>{{ selectedCity }}</span>
              <svg
                :class="[
                  'absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-m2-gray transition-transform',
                  isCityDropdownOpen ? 'rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="isCityDropdownOpen"
                class="absolute z-10 mt-1 w-full rounded-xl border border-m2-gray-light bg-white shadow-lg"
              >
                <div class="py-1">
                  <button
                    v-for="city in cities"
                    :key="city"
                    @click="selectCity(city)"
                    :class="[
                      'w-full text-left px-4 py-2 text-sm text-m2-dark hover:bg-m2-light transition-colors',
                      selectedCity === city ? 'bg-m2-light text-m2-accent font-medium' : ''
                    ]"
                    type="button"
                  >
                    {{ city }}
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Price Filter -->
        <div class="flex flex-col rounded-xl">
          <label class="mb-2 text-sm text-m2-gray">Стоимость, млн Р</label>
          <div class="flex items-center relative border-m2-gray-light rounded-xl border h-[50px]">
            <div class="flex items-center justify-between gap-2">
            <input
              v-model="minPrice"
              type="number"
              class="w-20 rounded-xl text-m2-gray bg-white px-3 py-0 text-m2-dark focus:border-m2-accent focus:outline-none"
              step="0.1"
              placeholder="0"
            />
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8359 0.136719L19.8633 3.16406C19.9544 3.26823 20 3.38542 20 3.51562C20 3.64583 19.9544 3.75651 19.8633 3.84766L16.8359 6.875C16.7448 6.96615 16.6309 7.01172 16.4941 7.01172C16.3574 7.01172 16.2435 6.96615 16.1523 6.875C16.0612 6.78385 16.0156 6.67318 16.0156 6.54297C16.0156 6.41276 16.0612 6.30208 16.1523 6.21094L18.3789 3.98438H0.46875C0.338541 3.98438 0.227865 3.9388 0.136719 3.84766C0.0455723 3.75651 0 3.64583 0 3.51562C0 3.38542 0.0455723 3.27148 0.136719 3.17383C0.227865 3.07617 0.338541 3.02734 0.46875 3.02734H18.3789L16.1523 0.820312C16.0612 0.729167 16.0156 0.615234 16.0156 0.478516C16.0156 0.341797 16.0612 0.227865 16.1523 0.136719C16.2435 0.0455728 16.3574 0 16.4941 0C16.6309 0 16.7448 0.0455728 16.8359 0.136719Z" fill="#7A7D9D"/>
            </svg>
            <input
              v-model="maxPrice"
              type="number"
              class="w-20 rounded-xl text-m2-gray bg-white px-3 py-0 text-m2-dark focus:border-m2-accent focus:outline-none"
              step="0.1"
            />
          </div>
          <!-- Range Slider -->
          <div class="w-[200px] absolute left-0 right-0 mx-auto bottom-[3px] border-m2-gray-light rounded-xl">
            <div class="relative h-0 rounded-lg bg-m2-light">
              <div
                class="absolute h-1 top-0.5 rounded-lg bg-m2-accent"
                :style="{
                  left: (parseFloat(minPrice) / 50 * 100) + '%',
                  width: ((parseFloat(maxPrice) - parseFloat(minPrice)) / 50 * 100) + '%'
                }"
              ></div>
              <input
                type="range"
                min="0"
                max="50"
                step="0.1"
                :value="minPrice"
                @input="minPrice = ($event.target as HTMLInputElement).value"
                class="absolute left-0 top-0 h-2 w-full appearance-none bg-transparent border-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-m2-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-m2-accent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max="50"
                step="0.1"
                :value="maxPrice"
                  @input="maxPrice = ($event.target as HTMLInputElement).value"
                  class="absolute left-0 top-0 h-2 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-m2-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-m2-accent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>
          </div>
          </div>
        </div>

        <!-- View Mode Toggle -->
        <div class="ml-auto flex gap-2">
          <button
            :class="[
              'flex h-[50px] w-[50px] items-center justify-center rounded-xl transition-colors border border-m2-gray-light bg-m2-light text-m2-dark'
            ]"
            type="button"
            @click="viewMode = 'grid'"
            aria-label="Grid view"
          >
            <img src="../../app/assets/img/box.svg" alt="Grid Icon" class="w-[22px] h-[18px]"></img>
          </button>
          <button
            :class="[
              'flex h-[50px] w-[50px] items-center justify-center rounded-xl transition-colors border border-m2-gray-light text-m2-dark'
            ]"
            type="button"
            @click="viewMode = 'list'"
            aria-label="List view"
          >
            <img src="../../app/assets/img/map.svg" alt="List Icon" class="w-[22px] h-[18px]"></img>
          </button>
        </div>
      </div>

      <!-- Cards Grid - Desktop -->
      <div
        :class="[
          'mb-[40px] hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]',
        ]"
      >
        <div
          v-for="complex in complexes.slice(0, showCount)"
          :key="complex.id"
          class="group cursor-pointer rounded-xl overflow-hidden bg-white"
        >
          <!-- Image Container -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="complex.image"
              :alt="complex.title"
              class="h-full w-full object-cover"
              @error="($event.target as HTMLImageElement).src = flatImg"
            />
            <!-- Price Tag -->
            <div class="absolute left-[20px] top-[20px] rounded-xl bg-white px-[22px] py-[12px] shadow-md">
              <span class="text-[16px] font-bold text-m2-accent">
                от {{ complex.price }} млн ₽
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-[20px]">
            <h3 class="mb-[5px] text-[20px] font-bold text-m2-dark">{{ complex.title }}</h3>
            <p class="flex items-center gap-2 text-[14px] text-m2-gray">
              <svg
                v-if="complex.icon === 'location'"
                class="h-4 w-4 flex-shrink-0 text-m2-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else-if="complex.icon === 'terrace'"
                class="h-4 w-4 flex-shrink-0 text-m2-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <svg
                v-else
                class="h-4 w-4 flex-shrink-0 text-m2-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {{ complex.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile Single Card View -->
      <div class="md:hidden mb-[40px]">
        <div
          v-if="currentComplex"
          :key="currentComplex.id"
          class="group cursor-pointer rounded-xl overflow-hidden bg-white"
        >
          <!-- Image Container -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="currentComplex.image"
              :alt="currentComplex.title"
              class="h-full w-full object-cover"
              @error="($event.target as HTMLImageElement).src = flatImg"
            />
            <!-- Price Tag -->
            <div class="absolute left-[20px] top-[20px] rounded-xl bg-white px-[22px] py-[12px] shadow-md">
              <span class="text-[16px] font-bold text-m2-accent">
                от {{ currentComplex.price }} млн ₽
              </span>
            </div>
            <!-- Image Pagination Dots -->
            <div class="absolute top-[20px] right-[20px] flex gap-2">
              <div
                v-for="(_, index) in complexes"
                :key="index"
                :class="[
                  'w-2 h-2 rounded-full',
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                ]"
              ></div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-[20px]">
            <h3 class="mb-[5px] text-[20px] font-bold text-m2-dark">{{ currentComplex.title }}</h3>
            <p class="flex items-center gap-2 text-[14px] text-m2-gray">
              <svg
                v-if="currentComplex.icon === 'location'"
                class="h-4 w-4 flex-shrink-0 text-m2-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else-if="currentComplex.icon === 'terrace'"
                class="h-4 w-4 flex-shrink-0 text-m2-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <svg
                v-else
                class="h-4 w-4 flex-shrink-0 text-m2-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {{ currentComplex.description }}
            </p>
          </div>
        </div>

        <!-- Mobile Pagination -->
        <div class="flex items-center justify-between mt-6 px-4 h-[50px] py-[12px] border border-m2-gray-light rounded-[10px] bg-white">
          <button
            @click="prevCard"
            :disabled="currentIndex === 0"
            :class="[
              'flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-m2-light'
            ]"
            type="button"
            aria-label="Previous"
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
          <span class="text-m2-dark text-[14px] font-bold">{{ currentIndex + 1 }} из {{ complexes.length }}</span>
          <button
            @click="nextCard"
            :disabled="currentIndex === complexes.length - 1"
            :class="[
              'flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
              currentIndex === complexes.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-m2-light'
            ]"
            type="button"
            aria-label="Next"
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

      <!-- Load More Button - Desktop -->
      <div v-if="showCount < totalCount" class="hidden md:flex justify-center">
        <button
          class="flex justify-between items-center gap-[20px] rounded-xl bg-m2-accent px-[21px] py-[12px] text-[16px] font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
          type="button"
          @click="showMore"
        >
          <span class="text-white/50 font-light">{{ showCount }} из {{ totalCount }} </span>
          Показать ещё
          <span class="text-xl"><img src="../../app/assets/img/ovals.svg" alt="Arrow Right"></span>
        </button>
      </div>
    </div>
  </section>
</template>
