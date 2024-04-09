export default defineEventHandler((event) => {
  const {page} = getQuery(event);
  
  const config = useRuntimeConfig();
  console.log(config);
  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.NUXT_TMDB_API_KEY}`,
    },
  };
  return $fetch(`${config.NUXT_TMDB_API_BASE_URL}/tv/airing_today?page=${page}`, API_REQUEST_OPTIONS)
})