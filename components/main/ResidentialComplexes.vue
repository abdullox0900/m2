<!-- components/main/ResidentialComplexes.vue -->
<script setup lang="ts">
import { ref } from 'vue'

// Import image - Nuxt 3 way
const flatImg = new URL('../../app/assets/img/flat-img.png', import.meta.url).href

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
const minPrice = ref('4.6')
const maxPrice = ref('37')
const viewMode = ref<'grid' | 'list'>('grid')
const showCount = ref(9)
const totalCount = ref(11)

const showMore = () => {
  showCount.value = totalCount.value
}
</script>

<template>
  <section class="pb-[170px]">
    <div class="container">
      <!-- Header -->
      <div class="flex items-center gap-[20px] mb-[60px]">
        <h1 class="text-[30px] font-bold text-m2-dark">Жилые комплексы</h1>
        <button
          class="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-m2-accent text-white hover:opacity-90 transition-opacity"
          type="button"
          aria-label="Navigation"
        >
          <img src="../../app/assets/img/right-icon.svg" alt="Arrow Right" class="w-[15px] h-[18px]">
        </button>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-end gap-6 mb-[40px] pb-6">
        <!-- City Filter -->
        <div class="flex flex-col">
          <label class="mb-2 text-sm text-m2-gray">Город</label>
          <div class="relative">
            <select
              v-model="selectedCity"
              class="appearance-none rounded-xl border border-m2-gray-light bg-white px-4 py-3 pr-10 text-m2-dark focus:border-m2-accent focus:outline-none min-w-[200px]"
            >
              <option value="Любой">Любой</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Владивосток">Владивосток</option>
            </select>
            <svg
              class="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-m2-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Price Filter -->
        <div class="flex flex-col">
          <label class="mb-2 text-sm text-m2-gray">Стоимость, млн Р</label>
          <div class="flex items-center gap-2">
            <input
              v-model="minPrice"
              type="number"
              class="w-20 rounded-xl border border-m2-gray-light bg-white px-3 py-2 text-m2-dark focus:border-m2-accent focus:outline-none"
              step="0.1"
            />
            <svg class="h-4 w-4 text-m2-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <input
              v-model="maxPrice"
              type="number"
              class="w-20 rounded-xl border border-m2-gray-light bg-white px-3 py-2 text-m2-dark focus:border-m2-accent focus:outline-none"
              step="0.1"
            />
          </div>
          <!-- Range Slider -->
          <div class="mt-3 w-[200px]">
            <div class="relative h-2 rounded-lg bg-m2-light">
              <div
                class="absolute h-2 rounded-lg bg-m2-accent"
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
                class="absolute left-0 top-0 h-2 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-m2-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-m2-accent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
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

        <!-- View Mode Toggle -->
        <div class="ml-auto flex gap-2">
          <button
            :class="[
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
              viewMode === 'grid' ? 'bg-m2-light text-m2-dark' : 'bg-white text-m2-gray hover:bg-m2-light'
            ]"
            type="button"
            @click="viewMode = 'grid'"
            aria-label="Grid view"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            :class="[
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
              viewMode === 'list' ? 'bg-m2-light text-m2-dark' : 'bg-white text-m2-gray hover:bg-m2-light'
            ]"
            type="button"
            @click="viewMode = 'list'"
            aria-label="List view"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Cards Grid -->
      <div
        :class="[
          'mb-[40px]',
          viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]' : 'flex flex-col gap-6'
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

      <!-- Load More Button -->
      <div v-if="showCount < totalCount" class="flex justify-center">
        <button
          class="inline-flex items-center gap-2 rounded-xl bg-m2-accent px-8 py-3 font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
          type="button"
          @click="showMore"
        >
          <span>{{ showCount }} из {{ totalCount }} Показать ещё</span>
          <span class="text-xl">...</span>
        </button>
      </div>
    </div>
  </section>
</template>
