<!-- components/main/SectionHeader.vue -->
<script setup lang="ts">
interface Props {
  title: string
  showButton?: boolean
}

withDefaults(defineProps<Props>(), {
  showButton: true
})

const emit = defineEmits<{
  buttonClick: []
}>()

const handleButtonClick = () => {
  emit('buttonClick')
}
</script>

<template>
  <div class="flex items-center gap-[20px] mb-[60px] max-md:mb-[20px]">
    <h1 class="text-[30px] font-bold text-m2-dark max-md:text-[20px]">{{ title }}</h1>
    <button
      v-if="showButton"
      class="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-m2-accent text-white hover:opacity-90 transition-opacity"
      type="button"
      aria-label="Navigation"
      @click="handleButtonClick"
    >
      <img src="../../app/assets/img/right-icon.svg" alt="Arrow Right" class="w-[15px] h-[18px]">
    </button>
  </div>
</template>

