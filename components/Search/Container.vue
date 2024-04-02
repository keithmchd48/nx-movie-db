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
<script setup>
const { TRANSLATION } = useTranslations();
import { vOnClickOutside } from "@vueuse/components";

const isSearchInputVisible = ref(false);
const toggleSearch = () => {
  isSearchInputVisible.value = !isSearchInputVisible.value;
};
const hideSearchInput = () => {
  isSearchInputVisible.value = false;
};

import { useSearchStore } from "@/store/useSearchStore";
const { UPDATE_SEARCH_QUERY } = useSearchStore();

const query = ref("");
const updateQuery = (e) => {
  query.value = e.target.value;
  UPDATE_SEARCH_QUERY(e.target.value);
};
const clearQuery = () => {
  query.value = "";
  UPDATE_SEARCH_QUERY("");
};
</script>

<style scoped>
.icon {
  display: inherit;
}
</style>
