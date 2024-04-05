<template>
  <Header />
  <div v-show="!searchQuery">
    <slot />
  </div>
  <div v-show="searchQuery">
    <SearchResults />
  </div>
  <Footer />
</template>
<script setup>
import { useSearchStore } from "@/store/useSearchStore";
const searchStore = useSearchStore();
const searchQuery = computed(() => searchStore.searchQuery);
</script>
