<template>
  <HeroContent :sample="sampleShow" :trailerKey="trailerKey" />
  <SecondaryContent :content="content" />
</template>

<script setup lang="ts">
import { MediaType } from "@/constants/assets";
import { type CommonMediaInterface, type ContentIteratorInterface, type TrailerInterface } from "@/composables/useTmdbApi";
import { type LanguageType } from "@/translations/types";
const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();

const {
  fetchAiringTodayShows,
  fetchOnAirShows,
  fetchTopRatedShows,
  fetchSampleTvShowTrailer,
} = useTmdbApi();

const airingTodayShows: CommonMediaInterface[] = await fetchAiringTodayShows();
const onAirShows: CommonMediaInterface[] = await fetchOnAirShows();
const topRatedShows: CommonMediaInterface[] = await fetchTopRatedShows();

const sampleShow: ComputedRef<CommonMediaInterface> = computed(() => topRatedShows?.[0]);

const trailer: TrailerInterface = await fetchSampleTvShowTrailer(sampleShow.value?.id);
const trailerKey: ComputedRef<string> = computed(() => trailer?.key);

const content: ComputedRef<ContentIteratorInterface[]> = computed(() => [
  {
    id: "tvshows-airing-today",
    title: TRANSLATION.value.shows.airingToday,
    samples: airingTodayShows,
    sampleType: MediaType.TV,
  },
  {
    id: "tvshows-on-the-air",
    title: TRANSLATION.value.shows.onTheAir,
    samples: onAirShows,
    sampleType: MediaType.TV,
  },
  {
    id: "tvshows-top-rated",
    title: TRANSLATION.value.shows.topRated,
    samples: topRatedShows,
    sampleType: MediaType.TV,
  },
]);
</script>
