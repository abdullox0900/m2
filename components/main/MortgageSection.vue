<script setup>
import { ref, computed } from 'vue'

/* --- Form state --- */
const price = ref(8_942_000)          // Стоимость, ₽
const downPayment = ref(2_861_440)    // Первоначальный взнос, ₽
const downPercent = computed(() =>
  Math.max(0, Math.min(100, Math.round((downPayment.value / price.value) * 100)))
)

const years = ref(20)               // Срок, лет
const minYears = 1
const maxYears = 40

const stepPrice = 10_000
const stepDown = 10_000

function incPrice () { price.value += stepPrice }
function decPrice () { price.value = Math.max(stepPrice, price.value - stepPrice) }

function incDown  () { downPayment.value = Math.min(price.value, downPayment.value + stepDown) }
function decDown  () { downPayment.value = Math.max(0, downPayment.value - stepDown) }

function incYears () { years.value = Math.min(maxYears, years.value + 1) }
function decYears () { years.value = Math.max(minYears, years.value - 1) }

/* --- Feature card pager (1 из 7) --- */
const featureIndex = ref(1)
const featureTotal = 7
function prevFeature(){ featureIndex.value = featureIndex.value <= 1 ? featureTotal : featureIndex.value - 1 }
function nextFeature(){ featureIndex.value = featureIndex.value >= featureTotal ? 1 : featureIndex.value + 1 }

/* --- Bank offers (mock) --- */
const offers = ref([
  {
    id: 1, bank: 'Совкомбанк', rate: '1.7%', sum: '6 080 560 ₽', payment: '29 904 ₽',
    notes: ['Максимальная сумма', 'Плавающая ставка: 1.75% – 2.50%']
  },
  {
    id: 2, bank: 'ВТБ', rate: '2%', sum: '6 080 560 ₽', payment: '30 761 ₽',
    notes: ['Максимальная сумма', 'Плавающая ставка: 2.00% – 3.00%']
  },
  {
    id: 3, bank: 'Сбербанк', rate: '2%', sum: '6 080 560 ₽', payment: '30 761 ₽',
    notes: ['Максимальная сумма', 'Плавающая ставка: 2.00% – 3.00%']
  },
])
</script>

<template>
  <section class="container pb-[140px] max-md:pb-[60px]">

    <!-- Top row -->
    <div class="relative grid gap-[24px] lg:grid-cols-[320px_1fr]">
      <!-- Left intro card -->
      <div class="rounded-2xl bg-m2-light p-[24px] lg:p-[28px]">
        <div class="flex items-center gap-3 mb-3">
          <h2 class="text-m2-dark text-[22px] font-bold leading-none">Квартиры в ипотеку</h2>
          <button class="inline-flex h-[32px] w-[32px] items-center justify-center rounded-xl bg-m2-accent text-white" type="button" aria-label="Перейти">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <p class="text-m2-gray text-[14px] leading-[22px]">
          Реальный способ уже сегодня стать владельцем собственной недвижимости.
        </p>
      </div>

      <!-- Right feature card with pager -->
      <div class="rounded-2xl bg-m2-light p-[20px] lg:p-[24px]">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-m2-dark font-bold">Преимущества нашего ипотечного центра</h3>
          <div class="flex items-center gap-3 rounded-xl border border-m2-gray-light px-3 py-2 text-m2-dark/70">
            <button class="p-1" @click="prevFeature" aria-label="Назад" type="button">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M0.23 5.30c-.15.15-.23.34-.23.56s.08.45.23.61l4.44 4.45c.15.15.34.23.56.23s.41-.08.56-.23c.15-.15.22-.34.22-.56s-.07-.41-.22-.56L3.40 7.34c-.13-.13-.16-.27-.09-.44.07-.17.19-.25.37-.25H13.21c.22 0 .40-.08.55-.23.15-.15.23-.34.23-.56s-.08-.41-.23-.56a.78.78 0 0 0-.55-.23H3.68c-.18 0-.31-.08-.38-.25-.07-.17-.04-.31.09-.44l2.41-2.40c.15-.15.22-.34.22-.56s-.07-.41-.22-.56a.78.78 0 0 0-.56-.23c-.22 0-.41.08-.56.23L0.23 5.30Z" fill="#7A7D9D"/></svg>
            </button>
            <span class="text-[14px] font-bold">{{ featureIndex }} из {{ featureTotal }}</span>
            <button class="p-1" @click="nextFeature" aria-label="Вперёд" type="button">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M13.77 6.07c.15-.15.23-.34.23-.56s-.08-.41-.23-.56L9.32.50A.78.78 0 0 0 8.76.26c-.22 0-.41.08-.56.23-.15.15-.22.34-.22.56s.07.41.22.56l2.41 2.40c.13.13.16.27.09.44-.07.17-.19.25-.37.25H.79c-.22 0-.40.08-.56.23C.08 5.10 0 5.29 0 5.51s.08.41.23.56c.15.15.34.23.56.23h9.53c.18 0 .31.08.38.25.07.17.04.31-.09.44L8.19 9.39c-.15.15-.22.34-.22.56s.07.41.22.56c.15.15.34.23.56.23.22 0 .41-.08.56-.23l4.46-4.44Z" fill="#2D2452"/></svg>
            </button>
          </div>
        </div>
        <p class="text-m2-gray text-[14px] leading-[22px]">
          Оформление ипотечной заявки в офисе корпорации без визита в банк.
        </p>
      </div>
    </div>

    <!-- Best offers -->
    <div class="mt-[40px]">
      <!-- Section header with mini pager -->
      <div class="mb-6 flex items-center justify-between">
        <h3 class="text-m2-dark text-[26px] font-extrabold">Лучшие предложения от банков-партнёров</h3>
        <div class="hidden md:flex items-center gap-5 rounded-xl border border-m2-gray-light px-3 py-2 text-m2-dark/70">
          <button class="p-1" aria-label="Назад" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <span aria-hidden="true" class="select-none">—</span>
          <button class="p-1" aria-label="Вперёд" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <!-- Form + cards -->
      <div class="grid gap-[24px] lg:grid-cols-[360px_1fr]">
        <!-- Left form -->
        <div class="rounded-2xl bg-white border border-m2-gray-light p-4">
          <!-- Price -->
          <label class="block text-[12px] text-m2-gray mb-2">Стоимость, ₽</label>
          <div class="mb-4 flex items-center gap-2 rounded-xl border border-m2-gray-light px-3">
            <input
              type="number"
              v-model.number="price"
              class="h-[46px] w-full rounded-xl bg-transparent outline-none"
            />
            <div class="flex items-center gap-1 py-1">
              <button class="h-8 w-8 rounded-lg bg-m2-light text-m2-dark" @click="decPrice" type="button">−</button>
              <button class="h-8 w-8 rounded-lg bg-m2-light text-m2-dark" @click="incPrice" type="button">+</button>
            </div>
          </div>

          <!-- Down payment -->
          <label class="block text-[12px] text-m2-gray mb-2">Первоначальный взнос, ₽</label>
          <div class="mb-4 flex items-center gap-2 rounded-xl border border-m2-gray-light px-3">
            <input
              type="number"
              v-model.number="downPayment"
              class="h-[46px] w-full rounded-xl bg-transparent outline-none"
            />
            <span class="rounded-lg bg-m2-light px-2 py-1 text-[12px] text-m2-dark">{{ downPercent }} %</span>
            <div class="flex items-center gap-1 py-1">
              <button class="h-8 w-8 rounded-lg bg-m2-light text-m2-dark" @click="decDown" type="button">−</button>
              <button class="h-8 w-8 rounded-lg bg-m2-light text-m2-dark" @click="incDown" type="button">+</button>
            </div>
          </div>

          <!-- Years (Срок кредита, лет) — siz bergan “Стоимость” filtri uslubida -->
          <div class="flex flex-col rounded-xl">
            <label class="mb-2 text-sm text-m2-gray">Срок кредита, лет</label>

            <div class="flex items-center relative border-m2-gray-light rounded-xl border h-[50px]">
              <div class="flex items-center justify-between gap-2 w-full px-3">
                <input
                  v-model.number="years"
                  type="number"
                  :min="minYears"
                  :max="maxYears"
                  class="w-20 rounded-xl text-m2-gray bg-white px-3 py-0 text-m2-dark focus:border-m2-accent focus:outline-none"
                />

                <div class="ml-auto flex items-center gap-2">
                  <button
                    type="button"
                    @click="decYears"
                    class="h-7 w-7 rounded-lg bg-m2-light text-m2-dark flex items-center justify-center"
                  >−</button>
                  <button
                    type="button"
                    @click="incYears"
                    class="h-7 w-7 rounded-lg bg-m2-light text-m2-dark flex items-center justify-center"
                  >+</button>
                </div>
              </div>

              <!-- Range Slider (pastki chiziq bilan) -->
              <div class="w-[200px] absolute left-0 right-0 mx-auto bottom-[3px] border-m2-gray-light rounded-xl">
                <div class="relative h-0 rounded-lg bg-m2-light">
                  <div
                    class="absolute h-1 top-0.5 rounded-lg bg-m2-accent"
                    :style="{ width: ((years - minYears) / (maxYears - minYears) * 100) + '%' }"
                  ></div>

                  <input
                    type="range"
                    :min="minYears"
                    :max="maxYears"
                    step="1"
                    :value="years"
                    @input="years = +$event.target.value"
                    class="absolute left-0 top-0 h-2 w-full appearance-none bg-transparent border-none
                           [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                           [&::-webkit-slider-thumb]:bg-m2-accent [&::-webkit-slider-thumb]:cursor-pointer
                           [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                           [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-m2-accent
                           [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="button"
            class="mt-5 w-full rounded-xl bg-m2-accent py-[12px] font-bold text-white hover:opacity-95 active:opacity-90"
          >
            Оставить заявку
          </button>
        </div>

        <!-- Right cards -->
        <div class="grid gap-[16px] md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="o in offers"
            :key="o.id"
            class="rounded-2xl bg-m2-dark text-white p-[20px] relative overflow-hidden"
          >
            <h4 class="mb-6 text-[18px] font-semibold opacity-90">{{ o.bank }}</h4>

            <div class="mb-6">
              <div class="text-[13px] opacity-70">Ставка</div>
              <div class="text-[40px] leading-[1.1] font-extrabold">{{ o.rate }}</div>
            </div>

            <div class="mb-4 opacity-90">
              <div class="text-[12px] uppercase opacity-70">Сумма кредита</div>
              <div class="text-[18px] font-semibold">{{ o.sum }}</div>
            </div>

            <div class="mb-6">
              <div class="text-[12px] uppercase opacity-70">Ежемесячный платёж</div>
              <div class="text-[18px] font-semibold text-m2-accent">{{ o.payment }}</div>
            </div>

            <ul class="space-y-2 text-[12px] opacity-80">
              <li v-for="(n, i) in o.notes" :key="i" class="flex items-start gap-2">
                <span class="mt-[6px] inline-block h-2 w-2 rounded-sm bg-m2-accent"></span>
                <span>{{ n }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>