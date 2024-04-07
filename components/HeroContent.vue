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
<script setup>
import { TMDB_DOMAIN_MOVIE } from "@/constants/assets";

const props = defineProps({
  sample: {
    type: Object,
    required: true,
  },
  trailerKey: {
    type: String,
    required: true,
  },
});

const { original_title, original_name, overview, adult, id } = toRefs(props.sample);

const checkForTitle = computed(() => original_title || original_name);
const tmdbLink = computed(() => `${TMDB_DOMAIN_MOVIE}${id.value}`);
const title = computed(() => checkForTitle.value.value);
</script>
