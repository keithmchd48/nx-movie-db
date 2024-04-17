<template>
  <HeroContent :sample="sampleMovie" :trailerKey="trailerKey" />
  <SecondaryContent :content="content" />
</template>

<script setup>
import { MediaType } from "@/constants/assets";

const {
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchSampleMovieTrailer,
} = useTmdbApi();

const nowPlayingMovies = await fetchNowPlayingMovies();
const upcomingMovies = await fetchUpcomingMovies();
const topRatedMovies = await fetchTopRatedMovies();

const sampleMovie = computed(() => upcomingMovies?.[0]);

const trailer = await fetchSampleMovieTrailer(sampleMovie.value?.id);
const trailerKey = computed(() => trailer?.key);

const { MOVIE } = MediaType;
const { TRANSLATION } = useTranslations();
const content = computed(() => [
  {
    id: "movies-upcoming",
    title: TRANSLATION.value.movies.upcoming,
    samples: upcomingMovies,
    sampleType: MOVIE,
  },
  {
    id: "movies-now-playing",
    title: TRANSLATION.value.movies.nowPlaying,
    samples: nowPlayingMovies,
    sampleType: MOVIE,
  },
  {
    id: "movies-top-rated",
    title: TRANSLATION.value.movies.topRated,
    samples: topRatedMovies,
    sampleType: MOVIE,
  },
]);
</script>
