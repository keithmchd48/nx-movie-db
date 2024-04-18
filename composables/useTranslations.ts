import { useConfigStore } from "@/store/useConfigStore";
import {type LanguageType} from '@/translations/types'

export default function () {
  const configStore = useConfigStore();
  const TRANSLATION: ComputedRef<LanguageType> = computed(() => configStore.GET_LANGUAGE);
  const TRANSLATION_AUTH: ComputedRef<LanguageType["auth"]> = computed(() => TRANSLATION.value.auth);
  const TRANSLATION_VALIDATIONS: ComputedRef<LanguageType["validations"]> = computed(() => TRANSLATION.value.validations);
  
  return {
    TRANSLATION,
    TRANSLATION_AUTH,
    TRANSLATION_VALIDATIONS,
  };
}
