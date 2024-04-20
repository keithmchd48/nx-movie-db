<template>
  <div class="h-screen w-full layout-padding flex flex-col justify-center">
    <div v-show="isSearching" class="text-white xs:text-sm m:text-xl text-center">
      {{ TRANSLATION.searchResults.searching }}
    </div>
    <div v-show="!isSearching">
      <SampleList
        v-for="section in filteredContent"
        :title="section.title"
        :samples="section.samples"
        :sampleType="section.sampleType"
        :sectionData="section"
        :key="section.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import { MediaType } from "@/constants/assets";
import { type CommonMediaInterface, type ContentIteratorInterface } from "@/composables/useTmdbApi";
import { type LanguageType } from "@/translations/types";
const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();

const isSearching: Ref<boolean> = ref(false);
const movies: Ref<CommonMediaInterface[]> = ref([]);
const tvShows: Ref<CommonMediaInterface[]> = ref([]);

import { useSearchStore } from "@/store/useSearchStore";
const searchStore = useSearchStore();
const searchQuery = computed(() => searchStore.searchQuery);

const { searchAll } = useTmdbApi();

const callSearchApi = async (): Promise<void> => {
  isSearching.value = true;
  const results: CommonMediaInterface[] = await searchAll(searchQuery.value);
  movies.value = results.filter((result: CommonMediaInterface) => result.media_type === MediaType.MOVIE);
  tvShows.value = results.filter((result: CommonMediaInterface) => result.media_type === MediaType.TV);
  isSearching.value = false;
};
const doSearch = useDebounceFn(callSearchApi, 1000);
watch(() => searchQuery.value, doSearch);

const MOVIE = MediaType.MOVIE;
const TV = MediaType.TV;

const content: ComputedRef<ContentIteratorInterface[]> = computed(() => [
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

const filteredContent: ComputedRef<ContentIteratorInterface[]> = computed(() => {
  return content.value.filter((section) => section.samples.length > 0);
});
</script>
