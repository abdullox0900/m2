<!-- components/PromoGrid.vue -->
<script setup lang="ts">
const props = defineProps<{
  phone?: string
}>()
</script>

<template>
  <section class="pb-[140px]">
    <div class="grid gap-[40px] lg:grid-cols-3 max-md:gap-[20px]">
        <!-- Block 1 -->
      <div class="rounded-xl bg-m2-light p-[40px] lg:col-span-2 max-md:p-[20px]">
        <h2 class="text-[45px] leading-tight font-bold text-m2-dark mb-[48px] max-md:mb-[20px] max-md:text-[30px]">
          Квартиры<br />
          в доме бизнес-класса<br />
          <span class="text-[45px] max-md:text-[30px]">от 1 000 ₽ / мес.</span>
        </h2>

        <p class="text-m2-gray mb-[48px] font-medium text-[16px] max-md:mb-[40px]">Траншевая ипотека</p>

        <button
          class="group inline-flex items-center justify-center rounded-xl bg-m2-accent px-[77px] pr-[50px] py-[12px] font-bold text-white shadow-sm hover:opacity-95 active:opacity-90 max-md:w-full max-md:mb-[20px]"
          type="button"
        >
          <span>Подробнее</span>
          <span class="ml-[10px] inline-flex h-[18px] w-[15px] flex-shrink-0 items-center justify-center">
            <img
              src="../../app/assets/img/right-icon.svg"
              alt=""
              class="h-[18px] w-[15px] opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </span>
        </button>
      </div>

      <!-- Block 2 -->
      <div class="flex flex-col gap-[40px] max-md:gap-[20px]">
        <div class="rounded-xl bg-m2-dark p-[40px] text-white relative max-md:p-[20px]">
        <h3 class="font-regular text-white text-[20px] mb-[10px] leading-[30px] max-md:mb-[20px] max-md:text-[16px]">Удваиваем материнский<br/> капитал!</h3>
        <p class="font-light text-[16px] text-m2-gray-light mb-[15px] leading-[24px] max-md:text-[14px] max-md:mb-[20px]">
          Выгода до 1,2 млн ₽<br/>до конца января
        </p>

        <button
          class="flex items-center justify-end ml-auto mb-[23px] rounded-xl border border-m2-gray-light bg-transparent px-[21px] py-[13px] text-[14px] font-regular text-m2-gray-light hover:bg-white/10 max-md:mr-auto max-md:ml-0 max-md:mb-[0px]"
          type="button"
        >
          Подробнее
        </button>
      </div>

      <!-- Block 3 -->
      <div class="rounded-xl bg-m2-accent p-[40px] text-white max-md:p-[20px]">
        <p class="font-bold text-[16px]">
          Подбор квартир за 3 минуты
        </p>
      </div>     
      </div>
    </div>
  </section>
</template>