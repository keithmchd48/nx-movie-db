export default defineEventHandler((event) => {
  const tvShowId = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();

  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.NUXT_TMDB_API_KEY}`,
    },
  };

  return $fetch(`${config.NUXT_TMDB_API_BASE_URL}/tv/${tvShowId}/videos?`, API_REQUEST_OPTIONS)
})