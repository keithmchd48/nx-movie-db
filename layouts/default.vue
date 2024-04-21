<template>
  <Head>
    <Title>{{ headTitle }}</Title>
  </Head>
  <Header />
  <div v-show="!searchQuery">
    <slot />
  </div>
  <div v-show="searchQuery">
    <SearchResults />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useSearchStore } from "@/store/useSearchStore";
const searchStore = useSearchStore();
const searchQuery: ComputedRef<string> = computed(() => searchStore.searchQuery);

const { headTitle }: { headTitle: ComputedRef<string> } = useHeadTitles();
</script>
