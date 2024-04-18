export default function () {
  const {TRANSLATION} = useTranslations();
  const APP_NAME: string = "Flixwatch";

  const route = useRoute()
  
  const HEAD_TITLES: ComputedRef<{ [key: string]: string }> = computed(() => {
    return {
      '/login': `${APP_NAME} | ${TRANSLATION.value.headTitles.login}`,
      '/browse': `${APP_NAME} | ${TRANSLATION.value.headTitles.browse}`,
      '/shows': `${APP_NAME} | ${TRANSLATION.value.headTitles.shows}`,
      '/movies': `${APP_NAME} | ${TRANSLATION.value.headTitles.movies}`,
      '/error': `${APP_NAME} | ${TRANSLATION.value.headTitles.error}`,
    };
  });

  const headTitle: ComputedRef<string> = computed(() => HEAD_TITLES.value[route.path]);
  
  return {
    headTitle
  };
};