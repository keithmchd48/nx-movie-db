export default function () {
  const {TRANSLATION} = useTranslations();
  const APP_NAME = "Flixwatch";

  const route = useRoute()
  
  const HEAD_TITLES = computed(() => {
    return {
      '/login': `${APP_NAME} | ${TRANSLATION.value.headTitles.login}`,
      '/browse': `${APP_NAME} | ${TRANSLATION.value.headTitles.browse}`,
      '/shows': `${APP_NAME} | ${TRANSLATION.value.headTitles.shows}`,
      '/movies': `${APP_NAME} | ${TRANSLATION.value.headTitles.movies}`,
      '/error': `${APP_NAME} | ${TRANSLATION.value.headTitles.error}`,
    };
  });

  const headTitle = computed(() => HEAD_TITLES.value[route.path]);
  
  return {
    headTitle
  };
};