export const useSearchStore = defineStore("searchStore", () => {
  const searchQuery = ref("");

  function UPDATE_SEARCH_QUERY(query) {
    searchQuery.value = query;
  }

  return {
    searchQuery,
    UPDATE_SEARCH_QUERY
  };
});
