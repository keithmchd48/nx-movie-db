<template>
  <li v-for="route in headerMenuArray" :key="route.name">
    <NuxtLink :to="route.path">
      {{ route.title }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { HEADER_MENU, type MenuRouteInterface } from "@/constants/assets";
import { type LanguageType } from "@/translations/types";

const { TRANSLATION }: { TRANSLATION: ComputedRef<LanguageType> } = useTranslations();
const headerMenuTranslation: ComputedRef<LanguageType["headerMenu"]> = computed(() => TRANSLATION.value.headerMenu);

const headerMenuArray = computed(() => HEADER_MENU.map((route: MenuRouteInterface) => ({
  ...route,
  title: headerMenuTranslation.value[route.title as keyof LanguageType["headerMenu"]]
})));
</script>

<style scoped>
.router-link-active {
  @apply text-white font-normal;
}
</style>
