<template>
  <div>
    <Icon
      name="ph:magnifying-glass-bold"
      @click="toggleSearch"
      class="text-white l:text-xl cursor-pointer"
      :class="isSearchInputVisible ? 'hidden' : 'block'"
    />
    <div>
      <!-- <SearchInput
          :placeholder="TRANSLATION.headerMenu.searchPlaceholder"
          value={query}
          onChange={updateQuery}
          onClear={clearQuery}
          isVisible={isSearchInputVisible}
        /> -->
    </div>
  </div>
</template>
<script setup>
const isSearchInputVisible = ref(false);
const toggleSearch = () => {
  isSearchInputVisible.value = !isSearchInputVisible.value;
};
</script>
<style scoped>
.icon {
  display: inherit;
}
</style>
