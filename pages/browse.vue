<template>
  <HeroContent :sample="sampleMovie" :trailerKey="trailerKey" />
  <SecondaryContent :content="content" />
</template>

<script setup>
import { MEDIA_TYPES } from "@/constants/assets";

const {
  fetchNowPlayingMovies,
  fetchAiringTodayShows,
  fetchTopRatedMovies,
  fetchSampleMovieTrailer,
} = useTmdbApi();

const nowPlayingMovies = await fetchNowPlayingMovies();
const airingTodayShowsData = await fetchAiringTodayShows();
const topRatedMovies = await fetchTopRatedMovies();

const sampleMovie = computed(() => nowPlayingMovies?.[0]);

const trailer = await fetchSampleMovieTrailer(sampleMovie.value?.id);
const trailerKey = computed(() => trailer?.key);

const { MOVIE, TV } = MEDIA_TYPES;
const { TRANSLATION } = useTranslations();
const content = computed(() => [
  {
    id: "browse-now-playing",
    title: TRANSLATION.value.browse.nowPlaying,
    samples: nowPlayingMovies,
    sampleType: MOVIE,
  },
  {
    id: "browse-airing-today",
    title: TRANSLATION.value.browse.tvShows,
    samples: airingTodayShowsData,
    sampleType: TV,
  },
  {
    id: "browse-top-rated",
    title: TRANSLATION.value.browse.topRatedMovies,
    samples: topRatedMovies,
    sampleType: MOVIE,
  },
]);
</script>
