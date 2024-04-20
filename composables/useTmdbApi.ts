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
  original_name?: string;
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

export interface ContentIteratorInterface {
  id: string,
  title: string;
  samples: CommonMediaInterface[];
  sampleType: string;
};

export default function () {
  const fetchNowPlayingMovies = async (): Promise<CommonMediaInterface> => {
    const {data} = await useFetch(`api/movies/now_playing?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchTopRatedMovies = async (): Promise<CommonMediaInterface> => {
    const {data} = await useFetch(`api/movies/top_rated?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchUpcomingMovies = async (): Promise<CommonMediaInterface> => {
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

  const fetchAiringTodayShows = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/shows/airing_today?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchOnAirShows = async (): Promise<CommonMediaInterface[]> => {
    const {data} = await useFetch(`api/shows/on_the_air?page=1`);
    return (data as { value: { results: any } }).value.results;
  };

  const fetchTopRatedShows = async (): Promise<CommonMediaInterface[]> => {
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