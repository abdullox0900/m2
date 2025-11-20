<template>
  <div class="flex items-center justify-center py-[60px]">
    <div class="flex flex-col items-center gap-4">
      <div class="relative">
        <div class="w-12 h-12 border-4 border-m2-gray-light border-t-m2-accent rounded-full animate-spin"></div>
      </div>
      <p class="text-m2-gray text-sm font-medium">Загрузка...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

