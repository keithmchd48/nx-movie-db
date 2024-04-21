<template>
  <select
    class="max-w-11 bg-transparent xs:text-xs l:text-sm text-white outline-none"
    :value="preferredLang"
    @change="setLanguage"
  >
    <option
      v-for="lang in SUPPORTED_LANGUAGES"
      :key="lang.identifier"
      :value="lang.identifier"
    >
      {{ lang.label }}
    </option>
  </select>
</template>
<script setup lang="ts">
import { SUPPORTED_LANGUAGES } from "@/translations/languages";
import { useConfigStore } from "@/store/useConfigStore";

const { preferredLang }: { preferredLang: string } = useConfigStore();
const { SET_LANGUAGE } = useConfigStore();

const setLanguage = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  SET_LANGUAGE(target.value);
};
</script>
