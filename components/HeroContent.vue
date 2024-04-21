<template>
  <div class="w-screen">
    <TrailerMeta
      :title="title"
      :overview="overview"
      :trailerKey="trailerKey"
      :tmdbLink="tmdbLink"
      :isAdult="adult"
    />
    <TrailerYoutubeVideo :trailerKey="trailerKey" />
  </div>
</template>
<script setup lang="ts">
import { TMDB_DOMAIN_MOVIE } from "@/constants/assets";
import { type CommonMediaInterface } from "@/composables/useTmdbApi";
interface Props {
  sample: CommonMediaInterface;
  trailerKey: string;
}

const props = defineProps<Props>();

const {sample}: {sample: Ref<CommonMediaInterface>} = toRefs(props);

const original_title: string = sample.value.original_title || "";
const original_name: string = sample.value.original_name || "";
const overview: string = sample.value.overview;
const adult: boolean = sample.value.adult;
const id: number = sample.value.id;

const checkForTitle: ComputedRef<string> = computed(() => original_title || original_name);
const tmdbLink: ComputedRef<string> = computed(() => `${TMDB_DOMAIN_MOVIE}${id}`);
const title: ComputedRef<string> = computed(() => checkForTitle.value);
</script>
