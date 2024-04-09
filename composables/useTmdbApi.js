import { TMDB_API_DOMAIN } from "@/constants/assets";

export default function () {
  const config = useRuntimeConfig();
  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.public.NUXT_TMDB_API_KEY}`,
    },
  };

  const callApi = async (url) => {
    const { data, pending, error, refresh } = await useFetch(
      url,
      API_REQUEST_OPTIONS
    );

    return {
      data,
      pending,
      error,
      refresh,
    };
  };

  const fetchNowPlayingMovies = async () => {
    const {data} = await useFetch(`api/movies/now_playing?page=1`);
    return data.value.results;
  };

  const fetchTopRatedMovies = async () => {
    const {data} = await useFetch(`api/movies/top_rated?page=1`);
    return data.value.results;
  };

  const fetchUpcomingMovies = async () => {
    const {data} = await useFetch(`api/movies/upcoming?page=1`);
    return data.value.results;
  };

  const fetchSampleMovieTrailer = async (movieId) => {
    const {data} = await callApi(`${TMDB_API_DOMAIN}/movie/${movieId}/videos?`);
    const results = data.value.results;
    const movieTrailer =
      results.find((video) => video.type === "Trailer") ||
      results[0];
    return movieTrailer;
  };

  const fetchAiringTodayShows = async () => {
    const {data} = await useFetch(`api/shows/airing_today?page=1`);
    return data.value.results;
  };

  const fetchOnAirShows = async () => {
    const {data} = await useFetch(`api/shows/on_the_air?page=1`);
    return data.value.results;
  };

  const fetchTopRatedShows = async () => {
    const {data} = await useFetch(`api/shows/top_rated?page=1`);
    return data.value.results;
  };

  const fetchSampleTvShowTrailer = async (tvShowId) => {
    const {data} = await callApi(`${TMDB_API_DOMAIN}/tv/${tvShowId}/videos?`);
    const results = data.value.results;
    const showTrailer =
      results.find((video) => video.type === "Trailer") ||
      results[0];
    return showTrailer;
  };

  return {
    callApi,
    fetchNowPlayingMovies,
    fetchAiringTodayShows,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchSampleMovieTrailer,
    fetchAiringTodayShows,
    fetchOnAirShows,
    fetchTopRatedShows,
    fetchSampleTvShowTrailer,
    API_REQUEST_OPTIONS
  };
}