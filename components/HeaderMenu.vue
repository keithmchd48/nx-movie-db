<template>
  <li v-for="route in HEADER_MENU" :key="route.name">
    <NuxtLink :to="route.path">
      {{ TRANSLATION.headerMenu[route.title] }}
    </NuxtLink>
  </li>
</template>

<script setup>
import { HEADER_MENU } from "@/constants/assets";
const TRANSLATION = useTranslations();
</script>

<style scoped>
.router-link-active {
  @apply text-white font-normal;
}
</style>
