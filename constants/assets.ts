const IMAGE_CDN_URL: string = "https://keiths.sirv.com/Images/";

export const MAIN_LOGO: string = `${IMAGE_CDN_URL}flixwatch_logo.svg`;
export const BG_IMG_URL: string =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/5217014f-ed62-4986-aba1-dda2c976aa25/DK-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const AVATAR: string =
  "https://occ-0-387-41.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYsd3p4Qocnfa7ObBPxjmxSEFOziadI3zj5-3hDDd0iTQX5YjIIPls_WA_YpJpXAxcrfT1j6PcVMz4RTUYhIkBrvkwb4XPY.png?r=24a";

export const BACKDROP_PLACEHOLDER: string = `${IMAGE_CDN_URL}backdrop_placeholder.jpg?cw=780&ch=439&canvas.width=780&canvas.height=439&w=780&h=439`;

export const MEDIA_TYPES: {
  MOVIE: string;
  TV: string;
} = {
  MOVIE: "movie",
  TV: "tv",
};
export const TMDB_DOMAIN: string = "https://www.themoviedb.org/";
export const TMDB_DOMAIN_MOVIE: string = `${TMDB_DOMAIN}${MEDIA_TYPES.MOVIE}/`;
export const TMDB_DOMAIN_SHOW: string = `${TMDB_DOMAIN}${MEDIA_TYPES.TV}/`;
export const POSTER_PATH_URL: string = "https://image.tmdb.org/t/p/w780";
export const YOUTUBE_DOMAIN: string = "https://www.youtube.com/";
export const YOUTUBE_IFRAME_ID: string = "youtube-trailer";
export const YOUTUBE_SCRIPT_ID: string = "youtube-iframe-api";

export const PATHS: {
  INDEX: string;
  AUTH: string;
  BROWSE: string;
  SHOWS: string;
  MOVIES: string;
} = {
  INDEX: "/",
  AUTH: "/login",
  BROWSE: "/browse",
  SHOWS: "/shows",
  MOVIES: "/movies",
};

export const HEADER_MENU: {
  name: string;
  title: string;
  path: string;
}[] = [
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