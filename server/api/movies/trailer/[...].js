import { TMDB_API_DOMAIN } from "@/constants/assets";

export default defineEventHandler((event) => {
  const movieId = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();

  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.public.NUXT_TMDB_API_KEY}`,
    },
  };

  return $fetch(`${TMDB_API_DOMAIN}/movie/${movieId}/videos?`, API_REQUEST_OPTIONS)
})