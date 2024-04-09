<template>
  <div class="h-screen w-full layout-padding flex flex-col justify-center">
    <div v-show="isSearching" class="text-white xs:text-sm m:text-xl text-center">
      {{ TRANSLATION.searchResults.searching }}
    </div>
    <div v-show="!isSearching">
      <SampleList
        v-for="section in filteredContent"
        :sectionData="section"
        :key="section.id"
      />
    </div>
  </div>
</template>

<script setup>
import { useDebounceFn } from "@vueuse/core";
import { MEDIA_TYPES } from "@/constants/assets";
const { TRANSLATION } = useTranslations();

const isSearching = ref(false);
const movies = ref([]);
const tvShows = ref([]);

import { useSearchStore } from "@/store/useSearchStore";
const searchStore = useSearchStore();
const searchQuery = computed(() => searchStore.searchQuery);

const { searchAll } = useTmdbApi();

const callSearchApi = async () => {
  isSearching.value = true;
  const results = await searchAll(searchQuery.value);
  movies.value = results.filter((result) => result.media_type === MEDIA_TYPES.MOVIE);
  tvShows.value = results.filter((result) => result.media_type === MEDIA_TYPES.TV);
  isSearching.value = false;
};
const doSearch = useDebounceFn(callSearchApi, 1000);
watch(() => searchQuery.value, doSearch);

const { MOVIE, TV } = MEDIA_TYPES;
const content = computed(() => [
  {
    id: "search-movies",
    title: TRANSLATION.value.searchResults.movies,
    samples: movies.value,
    sampleType: MOVIE,
  },
  {
    id: "search-tvshows",
    title: TRANSLATION.value.searchResults.tvShows,
    samples: tvShows.value,
    sampleType: TV,
  },
]);

const filteredContent = computed(() => {
  return content.value.filter((section) => section.samples.length > 0);
});
</script>
