export interface SampleInterface {
  title: string;
  original_name: string;
  first_air_date: string;
  release_date: string;
  id: string;
  backdrop_path: string;
};

interface VideoInterface {
  type: string;
};

export interface TrailerInterface {
  key: string;
};

export default function () {
  const fetchNowPlayingMovies = async () => {
    const {data} = await useFetch(`api/movies/now_playing?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchTopRatedMovies = async () => {
    const {data} = await useFetch(`api/movies/top_rated?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchUpcomingMovies = async () => {
    const {data} = await useFetch(`api/movies/upcoming?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchSampleMovieTrailer = async (movieId: number) => {
    const {data} = await useFetch(`api/movies/trailer/${movieId}`);
    const results: any[] = (data as { value: { results: any } }).value.results;
    const movieTrailer: TrailerInterface =
      results.find((video: VideoInterface) => video.type === "Trailer") ||
      results[0];
    return movieTrailer;
  };

  const fetchAiringTodayShows = async () => {
    const {data} = await useFetch(`api/shows/airing_today?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchOnAirShows = async () => {
    const {data} = await useFetch(`api/shows/on_the_air?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchTopRatedShows = async () => {
    const {data} = await useFetch(`api/shows/top_rated?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchSampleTvShowTrailer = async (tvShowId: number) => {
    const {data} = await useFetch(`api/shows/trailer/${tvShowId}`);
    const results: any[] = (data as { value: { results: any } }).value.results;
    const showTrailer: TrailerInterface =
      results.find((video: VideoInterface) => video.type === "Trailer") ||
      results[0];
    return showTrailer;
  };

  const searchAll = async (searchQuery: string) => {
    const {data} = await useFetch(`api/search?searchQuery=${searchQuery}&page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  return {
    fetchNowPlayingMovies,
    fetchAiringTodayShows,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchSampleMovieTrailer,
    fetchOnAirShows,
    fetchTopRatedShows,
    fetchSampleTvShowTrailer,
    searchAll
  };
}