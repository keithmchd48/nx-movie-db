const IMAGE_CDN_URL = "https://keiths.sirv.com/Images/";

export const MAIN_LOGO = `${IMAGE_CDN_URL}flixwatch_logo.svg`;
export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/5217014f-ed62-4986-aba1-dda2c976aa25/DK-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const AVATAR =
  "https://occ-0-387-41.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYsd3p4Qocnfa7ObBPxjmxSEFOziadI3zj5-3hDDd0iTQX5YjIIPls_WA_YpJpXAxcrfT1j6PcVMz4RTUYhIkBrvkwb4XPY.png?r=24a";

export const MEDIA_TYPES = {
  MOVIE: "movie",
  TV: "tv",
};
export const TMDB_DOMAIN = "https://www.themoviedb.org/";
export const TMDB_DOMAIN_MOVIE = `${TMDB_DOMAIN}${MEDIA_TYPES.MOVIE}/`;
export const TMDB_DOMAIN_SHOW = `${TMDB_DOMAIN}${MEDIA_TYPES.TV}/`;
export const TMDB_API_DOMAIN = "https://api.themoviedb.org/3";
export const YOUTUBE_DOMAIN = "https://www.youtube.com/";

  export const PATHS = {
  INDEX: "/",
  AUTH: "/login",
  BROWSE: "/browse",
  SHOWS: "/shows",
  MOVIES: "/movies",
  ERROR: "/error",
};

export const HEADER_MENU = [
  {
    name: "home",
    title: "home",
    path: PATHS.BROWSE,
  },
  {
    name: "shows",
    title: "shows",
    path: PATHS.SHOWS,
  },
  {
    name: "movies",
    title: "movies",
    path: PATHS.MOVIES,
  },
];