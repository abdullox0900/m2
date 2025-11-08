<script setup>
import { ref, computed } from 'vue'
import SectionHeader from './SectionHeader.vue'

const view = ref('list') // 'list' | 'grid'
const activeTag = ref('Все')

const tags = [
  'Все',
  'Астрахань',
  'Краснодар',
  'Пермь',
  'Ростов-на-Дону',
  'Екатеринбург',
  'Владивосток'
]

const offices = ref([
  {
    id: 1,
    city: 'Владивосток',
    title: 'Центральный офис г. Владивосток',
    phone: '+7 (423) 222-22-32',
    address: 'ул. Владивостокская, ул. Семафорная, 115',
    hours: ['ПН–ПТ: 09:00 – 20:00'],
    image: '/img/office-1.jpg'
  },
  {
    id: 2,
    city: 'Владивосток',
    title: 'Магазин квартир ЖК “Футурист”',
    phone: '+7 (423) 222-22-32',
    address: 'Рынок, мкр. Карбышева, 11',
    hours: ['ПН–ПТ: 10:00 – 19:00'],
    image: '/img/office-2.jpg'
  }
])

const filtered = computed(() =>
  activeTag.value === 'Все'
    ? offices.value
    : offices.value.filter(o => o.city === activeTag.value)
)

function setTag(tag) {
  activeTag.value = tag
}
</script>

<template>
  <section class="container pb-[120px] max-md:pb-[60px]">

    <!-- Header -->
    <div class="mb-[60px] max-md:mb-[20px] flex items-center justify-between gap-4 max-md:gap-[10px] max-md:flex-col max-md:items-start">
        <SectionHeader title="Офисы продаж" class="mb-[0px]" />


      <div class="flex items-center gap-3 max-md:w-full">
        <button
          type="button"
          class="rounded-xl h-[50px] bg-m2-accent text-[16px] text-white font-bold px-6 py-2 hover:opacity-95 active:opacity-90 max-md:w-full"
        >
          Записаться на встречу
        </button>
      </div>
    </div>

    <!-- Fillter -->
    <div class="flex items-center justify-between mb-[60px]  max-md:hidden">
        <!-- Chips / filters -->
    <div class="flex flex-wrap gap-2 max-md:overflow-x-auto max-md:whitespace-nowrap">
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        @click="setTag(tag)"
        :class="[
          'px-4 py-[13px] h-[50px] rounded-xl border text-sm transition-colors',
          activeTag === tag
            ? 'bg-m2-light border-m2-gray-light text-m2-gray'
            : 'border-m2-gray-light text-m2-gray hover:bg-m2-light/60'
        ]"
      >
        {{ tag }}
      </button>
    </div>

     <!-- View toggle (list/grid) -->
     <div class="hidden sm:flex items-center gap-2">
          <button
            :class="['h-[50px] w-[50px] rounded-xl border flex items-center justify-center',
                     view==='list' ? 'bg-m2-light border-m2-gray-light' : 'border-m2-gray-light text-m2-dark']"
            @click="view='list'"
            aria-label="List"
            type="button"
          >
            <img src="../../app/assets/img/box.svg" alt="" class="w-[18px] h-[18px]">
          </button>
          <button
            :class="['h-[50px] w-[50px] rounded-xl border flex items-center justify-center',
                     view==='grid' ? 'bg-m2-light border-m2-gray-light' : 'border-m2-gray-light text-m2-dark']"
            @click="view='grid'"
            aria-label="Grid"
            type="button"
          >
          <img src="../../app/assets/img/map.svg" alt="" class="w-[18px] h-[18px]">
          </button>
        </div>
    </div>

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

    <!-- Content -->
    <div v-if="view==='list'" class="flex flex-col gap-[40px]">
      <div
        v-for="o in filtered"
        :key="o.id"
        class="flex items-center lg:gap-[40px] sm:gap-[10px] bg-white max-[768px]:flex-col max-[768px]:items-start"
      >

        <div class="w-[260px] h-[180px] shrink-0 overflow-hidden rounded-xl">
          <img src="../../app/assets/img/ofis.png" :alt="o.title" class="w-full h-full object-cover" />
        </div>

        <div class="flex-1">

          <h3 class="text-m2-dark text-[18px] md:text-[20px] font-extrabold mb-[10px]">
            {{ o.title }}
          </h3>

          <p class="text-m2-dark text-[14px] md:text-[16px] mb-[10px]">{{ o.phone }}</p>

          <p class="flex items-center gap-2 text-m2-gray text-[14px] mb-[10px]">

          <img src="../../app/assets/img/location-icon.svg" :alt="o.title" class="w-[12px] h-[14px] object-cover" />
            <span>{{ o.address }}</span>
          </p>

          <ul class="flex items-center text-m2-gray text-[14px] space-y-1">
            <li v-for="(h, i) in o.hours" :key="i">{{ h }} </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- GRID VIEW -->
    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="o in filtered"
        :key="o.id"
        class=" overflow-hidden"
      > 
        <div class="aspect-[4/4] w-full overflow-hidden mb-[20px]">
          <img src="../../app/assets/img/ofis.png" :alt="o.title" class="w-full h-full object-cover rounded-[10px]" />
        </div>
        <div>
          <h3 class="text-m2-dark text-[18px] font-extrabold mb-1">{{ o.title }}</h3>
          <p class="text-m2-dark text-[14px] mb-2">{{ o.phone }}</p>
          <p class="text-m2-gray text-[14px] mb-2">{{ o.address }}</p>
          <ul class="text-m2-gray text-[14px] space-y-1">
            <li v-for="(h, i) in o.hours" :key="i">{{ h }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>