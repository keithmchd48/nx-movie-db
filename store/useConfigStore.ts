import { LANG } from "@/translations/languages";
import { type LanguageType } from "@/translations/types";

export const useConfigStore = defineStore("configStore", () => {
  const preferredLang: Ref<string> = ref("en");

  function SET_LANGUAGE(lang: string) {
    preferredLang.value = lang;
  }

  const GET_LANGUAGE: ComputedRef<LanguageType> = computed(() => LANG[preferredLang.value]);

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
