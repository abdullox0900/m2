<template>
  <section class="container pb-[160px] max-md:pb-[60px]">
    <div
      class="relative rounded-[20px] bg-m2-light px-[200px] py-[80px] max-xl:px-[100px] max-lg:px-[60px] max-md:px-[20px] max-md:py-[20px]"
    >
      <!-- flex: desktop o‘z holicha, mobil uchun column-reverse -->
      <div
        class="flex items-end justify-between gap-[140px] max-lg:gap-[60px] max-md:gap-[40px] max-md:flex-col-reverse max-md:items-start max-md:pt-[25px]"
      >
        <!-- Chap ustun (rasm + forma) -->
        <div
          class="flex flex-col relative items-start gap-[20px] max-w-[260px] max-md:gap-0 max-md:max-w-full w-full"
        >
          <!-- Rasm: desktop absolute, mobil static yuqorida -->
          <div
            class="mr-[8px] sm:block absolute top-[-200px] max-md:top-[-315px] max-md:left-[0px] left-[15%] max-md:mb-[20px]"
          >
            <img
              src="../../app/assets/img/email-section-img.svg"
              alt="email illustration"
              class="max-md:w-[80px] max-md:mx-auto"
            />
          </div>

          <!-- Forma -->
          <div class="flex-1 max-w-full w-full">
            <label
              for="email"
              class="block mb-2 text-[14px] text-m2-gray max-md:text-[13px]"
              >Email</label
            >

            <div class="space-y-3">
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="pochta@email.ru"
                class="w-full rounded-[10px] border border-m2-gray-light bg-transparent px-4 py-3 text-m2-dark mb-[30px]
                       placeholder:text-m2-gray focus:outline-none focus:border-m2-accent max-md:mb-[20px]  max-md:h-[55px]"
                :class="{ 'border-m2-accent': email && !isValid }"
                @keydown.enter.prevent="submit"
              />

              <button
                type="button"
                @click="submit"
                :disabled="!isValid || loading || submitted"
                class="inline-flex h-[50px] w-full items-center justify-center rounded-[10px] bg-m2-accent px-6 font-bold text-white
                       shadow-sm transition-opacity hover:opacity-95 active:opacity-90 disabled:opacity-50 max-md:h-[55px]"
              >
                <span v-if="!submitted">Подписаться</span>
                <span v-else>Готово ✓</span>
              </button>
            </div>
          </div>
        </div>

        <!-- O‘ng ustun (sarlavha + matn) -->
        <div class="max-w-[520px] max-md:max-w-full">
          <h3
            class="text-m2-dark text-[30px] lg:text-[28px] font-extrabold mb-[40px] max-md:mb-[20px] max-md:text-[24px]"
          >
            Подпишитесь на новости
          </h3>
          <p
            class="text-m2-dark max-w-[420px] text-[16px] leading-[26px] mb-[40px] max-md:mb-[20px] max-md:mx-auto max-md:text-[15px]"
          >
            Вы первыми узнаете новости рынка недвижимости, актуальные цифры,
            мнения экспертов о развитии рынка жилой недвижимости и многое другое.
          </p>
          <p
            class="text-[12px] max-w-[300px] leading-[22px] text-m2-gray"
          >
            Нажимая кнопку «Подписаться», вы даёте согласие на обработку
            персональных данных.
          </p>
        </div>
      </div>

      <div
        class="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(17,24,39,0.02)]"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const email = ref('')
const submitted = ref(false)
const loading = ref(false)

const isValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
)

async function submit() {
  if (!isValid.value || loading.value) return
  loading.value = true
  try {
    // TODO: bu yerda haqiqiy API chaqiruvi (fetch/axios)
    await new Promise(r => setTimeout(r, 600))
    submitted.value = true
    email.value = ''
  } finally {
    loading.value = false
  }
}
</script>