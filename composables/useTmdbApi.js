import { TMDB_API_DOMAIN } from "@/constants/assets";

export default function () {
  const config = useRuntimeConfig();
  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.public.TMDB_API_KEY}`,
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
    const {data} = await callApi(`${TMDB_API_DOMAIN}/movie/now_playing?page=1`);
    return data.value.results;
  };

  const fetchAiringTodayShows = async () => {
    const {data} = await callApi(`${TMDB_API_DOMAIN}/tv/airing_today?page=1`);
    return data.value.results;
  };

  const fetchTopRatedMovies = async () => {
    const {data} = await callApi(`${TMDB_API_DOMAIN}/movie/top_rated?page=1`);
    return data.value.results;
  };

  const fetchUpcomingMovies = async () => {
    const {data} = await callApi(`${TMDB_API_DOMAIN}/movie/upcoming?page=1`);
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

  return {
    callApi,
    fetchNowPlayingMovies,
    fetchAiringTodayShows,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchSampleMovieTrailer
  };
}