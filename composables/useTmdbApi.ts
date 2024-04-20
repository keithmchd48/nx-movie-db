export interface CommonMediaInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  // Keys not present in all three interfaces
  first_air_date?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  media_type?: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;
};

export interface SampleInterface {
  title?: string;
  original_name: string;
  first_air_date: string;
  release_date: string;
  id: string;
  backdrop_path: string;
};

export interface TrailerInterface {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export interface ContentIteratorInterface {
  id: string,
  title: string;
  samples: CommonMediaInterface[];
  sampleType: string;
};

export default function () {
  const fetchNowPlayingMovies = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/movies/now_playing?page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
  };

  const fetchTopRatedMovies = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/movies/top_rated?page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
  };

  const fetchUpcomingMovies = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/movies/upcoming?page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
  };

  const fetchSampleMovieTrailer = async (movieId: number): Promise<TrailerInterface> => {
    const {data} = await useFetch(`api/movies/trailer/${movieId}`);
    const results: TrailerInterface[] = (data as { value: { results: TrailerInterface[] } }).value.results;
    const movieTrailer: TrailerInterface =
      results.find((video: TrailerInterface) => video.type === "Trailer") ||
      results[0];
    return movieTrailer;
  };

  const fetchAiringTodayShows = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/shows/airing_today?page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
  };

  const fetchOnAirShows = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/shows/on_the_air?page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
  };

  const fetchTopRatedShows = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/shows/top_rated?page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
  };

  const fetchSampleTvShowTrailer = async (tvShowId: number): Promise<TrailerInterface> => {
    const {data} = await useFetch(`api/shows/trailer/${tvShowId}`);
    const results: TrailerInterface[] = (data as { value: { results: TrailerInterface[] } }).value.results;
    const showTrailer: TrailerInterface =
      results.find((video: TrailerInterface) => video.type === "Trailer") ||
      results[0];
    return showTrailer;
  };

  const searchAll = async (searchQuery: string): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/search?searchQuery=${searchQuery}&page=1`);
    return (data as { value: { results: CommonMediaInterface[] } }).value.results;
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