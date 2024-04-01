<template>
  <select
    class="max-w-11 bg-transparent xs:text-xs l:text-sm text-white outline-none"
    :value="preferredLang"
    @change="SET_LANGUAGE($event.target.value)"
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
<script setup>
import { SUPPORTED_LANGUAGES } from "@/translations/languages";
import { useConfigStore } from "@/store/useConfigStore";

const { SET_LANGUAGE, preferredLang } = useConfigStore();
</script>
