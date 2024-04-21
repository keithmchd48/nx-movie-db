export const useSearchStore = defineStore("searchStore", () => {
  const searchQuery: Ref<string> = ref("");

  function UPDATE_SEARCH_QUERY(query: string) {
    searchQuery.value = query;
  }

  return {
    searchQuery,
    UPDATE_SEARCH_QUERY
  };
});
