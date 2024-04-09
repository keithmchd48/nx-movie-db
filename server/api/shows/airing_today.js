import { TMDB_API_DOMAIN } from "@/constants/assets";

export default defineEventHandler((event) => {
  const {page} = getQuery(event);
  
  const config = useRuntimeConfig();
  const API_REQUEST_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${config.public.NUXT_TMDB_API_KEY}`,
    },
  };
  return $fetch(`${TMDB_API_DOMAIN}/tv/airing_today?page=${page}`, API_REQUEST_OPTIONS)
})