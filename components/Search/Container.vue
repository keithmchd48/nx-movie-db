<template>
  <div>
    <div :class="isSearchInputVisible ? 'hidden' : 'block'">
      <Icon
        name="ph:magnifying-glass-bold"
        @click="toggleSearch"
        class="text-white l:text-xl cursor-pointer"
      />
    </div>

    <div>
      <SearchInput
        v-on-click-outside="hideSearchInput"
        :placeholder="TRANSLATION.headerMenu.searchPlaceholder"
        :value="query"
        @change="updateQuery"
        @clear="clearQuery"
        :isVisible="isSearchInputVisible"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { type LanguageType } from "@/translations/types";
const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();
import { vOnClickOutside } from "@vueuse/components";

const isSearchInputVisible: Ref<boolean> = ref(false);
const toggleSearch = (): void => {
  isSearchInputVisible.value = !isSearchInputVisible.value;
};
const hideSearchInput = (): void => {
  isSearchInputVisible.value = false;
};

import { useSearchStore } from "@/store/useSearchStore";
const { UPDATE_SEARCH_QUERY } = useSearchStore();

const query: Ref<string> = ref("");
const updateQuery = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  query.value = target.value || "";
  UPDATE_SEARCH_QUERY(query.value);
};
const clearQuery = (): void => {
  query.value = "";
  UPDATE_SEARCH_QUERY("");
};
</script>

<style scoped>
.icon {
  display: inherit;
}
</style>
