<template>
  <section class="w-full mt-[60px] mb-[140px] max-[425px]:mt-0 max-md:mb-[60px]">
    <img
      v-if="imageUrl && !hasError"
      :src="imageUrl"
      alt="Hero Banner"
      @error="hasError = true"
      class="lg:h-[560px] w-full max-md:h-[168px] max-md:object-cover md:h-[168px] max-md:rounded-xl object-cover"
    />

    <div v-else class="lg:h-[560px] w-full max-md:h-[168px] md:h-[168px] max-md:rounded-xl bg-gray-200 flex items-center justify-center">
      <span class="text-gray-500">Изображение отсутствует</span>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { endpoints } from '../../api/endpoints'
import { getApi } from '../../api/api'

const api = getApi()
const { data: img } = await useAsyncData('hero-axios', () => api.get(endpoints.hero).then(r => r.data))

const hasError = ref(false)
watch(img, () => (hasError.value = false), { immediate: true })

const imageUrl = computed(() => {
  const d = img.value
  if (!d) return null
  return Array.isArray(d) ? d[0]?.image || d[0]?.image_thumb : d.image || d.image_thumb
})
</script>

<style scoped>
/* kerak bo'lsa qo'shing */
</style>