<template>
  <div>
    <Header />
    <Main v-if="route.path === '/'" />
    <NuxtRouteAnnouncer />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/header/Header.vue'
import Main from '../components/main/Main.vue'
import { useRoute } from '#imports'
import Footer from '../components/footer/Footer.vue'

const route = useRoute()
</script>
