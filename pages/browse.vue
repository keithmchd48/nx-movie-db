<template>
  <HeroContent :sample="sampleMovie" :trailerKey="trailerKey" />
  <SecondaryContent :content="content" />
</template>

<script setup lang="ts">
import { MediaType } from "@/constants/assets";
import { type CommonMediaInterface, type ContentIteratorInterface, type TrailerInterface } from "@/composables/useTmdbApi";
import { type LanguageType } from "@/translations/types";
const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();

const {
  fetchNowPlayingMovies,
  fetchAiringTodayShows,
  fetchTopRatedMovies,
  fetchSampleMovieTrailer,
} = useTmdbApi();

const nowPlayingMovies: CommonMediaInterface[] = await fetchNowPlayingMovies();
const airingTodayShows: CommonMediaInterface[] = await fetchAiringTodayShows();
const topRatedMovies: CommonMediaInterface[] = await fetchTopRatedMovies();

const sampleMovie: ComputedRef<CommonMediaInterface> = computed(() => nowPlayingMovies?.[0]);

const trailer: TrailerInterface = await fetchSampleMovieTrailer(sampleMovie.value?.id);
const trailerKey: ComputedRef<string> = computed(() => trailer?.key);

const content: ComputedRef<ContentIteratorInterface[]> = computed(() => [
  {
    id: "browse-now-playing",
    title: TRANSLATION.value.browse.nowPlaying,
    samples: nowPlayingMovies,
    sampleType: MediaType.MOVIE,
  },
  {
    id: "browse-airing-today",
    title: TRANSLATION.value.browse.tvShows,
    samples: airingTodayShows,
    sampleType: MediaType.TV,
  },
  {
    id: "browse-top-rated",
    title: TRANSLATION.value.browse.topRatedMovies,
    samples: topRatedMovies,
    sampleType: MediaType.MOVIE,
  },
]);
</script>
