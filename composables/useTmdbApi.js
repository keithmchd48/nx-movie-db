export default function () {
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
    const {data} = await useFetch(`api/movies/trailer/${movieId}`);
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
    const {data} = await useFetch(`api/shows/trailer/${tvShowId}`);
    const results = data.value.results;
    const showTrailer =
      results.find((video) => video.type === "Trailer") ||
      results[0];
    return showTrailer;
  };

  const searchAll = async (searchQuery) => {
    const {data} = await useFetch(`api/search?searchQuery=${searchQuery}&page=1`);
    return data.value.results;
  };

  return {
    fetchNowPlayingMovies,
    fetchAiringTodayShows,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchSampleMovieTrailer,
    fetchAiringTodayShows,
    fetchOnAirShows,
    fetchTopRatedShows,
    fetchSampleTvShowTrailer,
    searchAll
  };
}