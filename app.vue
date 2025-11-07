<template>
  <div>
    <Header />
    <Main v-if="route.path === '/'" />
    <div class="container">
      <NuxtPage />
    </div>
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'
import Header from './components/header/Header.vue'
import Main from './components/main/Main.vue'

const route = useRoute()
</script>

