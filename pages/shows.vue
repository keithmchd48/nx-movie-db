<template>
  <HeroContent :sample="sampleShow" :trailerKey="trailerKey" />
  <SecondaryContent :content="content" />
</template>

<script setup>
import { MediaType } from "@/constants/assets";

const {
  fetchAiringTodayShows,
  fetchOnAirShows,
  fetchTopRatedShows,
  fetchSampleTvShowTrailer,
} = useTmdbApi();

const airingTodayShows = await fetchAiringTodayShows();
const onAirShows = await fetchOnAirShows();
const topRatedShows = await fetchTopRatedShows();

const sampleShow = computed(() => topRatedShows?.[0]);

const trailer = await fetchSampleTvShowTrailer(sampleShow.value?.id);
const trailerKey = computed(() => trailer?.key);

const { TV } = MediaType;
const { TRANSLATION } = useTranslations();
const content = computed(() => [
  {
    id: "tvshows-airing-today",
    title: TRANSLATION.value.shows.airingToday,
    samples: airingTodayShows,
    sampleType: TV,
  },
  {
    id: "tvshows-on-the-air",
    title: TRANSLATION.value.shows.onTheAir,
    samples: onAirShows,
    sampleType: TV,
  },
  {
    id: "tvshows-top-rated",
    title: TRANSLATION.value.shows.topRated,
    samples: topRatedShows,
    sampleType: TV,
  },
]);
</script>
