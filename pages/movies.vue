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
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchSampleMovieTrailer,
} = useTmdbApi();

const nowPlayingMovies: CommonMediaInterface[] = await fetchNowPlayingMovies();
const upcomingMovies: CommonMediaInterface[] = await fetchUpcomingMovies();
const topRatedMovies: CommonMediaInterface[] = await fetchTopRatedMovies();

const sampleMovie: ComputedRef<CommonMediaInterface> = computed(() => upcomingMovies?.[0]);

const trailer: TrailerInterface = await fetchSampleMovieTrailer(sampleMovie.value?.id);
const trailerKey: ComputedRef<string> = computed(() => trailer?.key);

const content: ComputedRef<ContentIteratorInterface[]> = computed(() => [
  {
    id: "movies-upcoming",
    title: TRANSLATION.value.movies.upcoming,
    samples: upcomingMovies,
    sampleType: MediaType.MOVIE,
  },
  {
    id: "movies-now-playing",
    title: TRANSLATION.value.movies.nowPlaying,
    samples: nowPlayingMovies,
    sampleType: MediaType.MOVIE,
  },
  {
    id: "movies-top-rated",
    title: TRANSLATION.value.movies.topRated,
    samples: topRatedMovies,
    sampleType: MediaType.MOVIE,
  },
]);
</script>
