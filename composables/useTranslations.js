import { useConfigStore } from "@/store/useConfigStore";

export default function () {
  const configStore = useConfigStore();
  const TRANSLATION = computed(() => configStore.GET_LANGUAGE);
  const TRANSLATION_AUTH = computed(() => TRANSLATION.value.auth);
  const TRANSLATION_VALIDATIONS = computed(() => TRANSLATION.value.validations);
  
  return {
    TRANSLATION,
    TRANSLATION_AUTH,
    TRANSLATION_VALIDATIONS,
  };
}
