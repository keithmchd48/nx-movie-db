export default defineEventHandler((event) => {
  const {page, searchQuery} = getQuery(event);
  
  const config = useRuntimeConfig();
  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.NUXT_TMDB_API_KEY}`,
    },
  };
  return $fetch(`${config.NUXT_TMDB_API_BASE_URL}/search/multi?query=${searchQuery}&page=${page}&include_adult=true`, API_REQUEST_OPTIONS)
})