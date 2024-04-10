import { LANG } from "@/translations/languages";

export const useConfigStore = defineStore("configStore", () => {
  const preferredLang = ref("en");

  function SET_LANGUAGE(lang) {
    preferredLang.value = lang;
  }

  const GET_LANGUAGE = computed(() => LANG[preferredLang.value]);

  return {
    preferredLang,
    SET_LANGUAGE,
    GET_LANGUAGE
  };
},
{
  persist: {
    storage: persistedState.localStorage,
  }
});
