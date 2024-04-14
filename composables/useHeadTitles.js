export default function () {
  const {TRANSLATION} = useTranslations();
  const APP_NAME = "Flixwatch";
  
  const HEAD_TITLES = computed(() => {
    return {
      LOGIN: `${APP_NAME} | ${TRANSLATION.value.headTitles.login}`,
      BROWSE: `${APP_NAME} | ${TRANSLATION.value.headTitles.browse}`,
      SHOWS: `${APP_NAME} | ${TRANSLATION.value.headTitles.shows}`,
      MOVIES: `${APP_NAME} | ${TRANSLATION.value.headTitles.movies}`,
      ERROR: `${APP_NAME} | ${TRANSLATION.value.headTitles.error}`,
    };
  });
  
  return {
    HEAD_TITLES,
  };
};