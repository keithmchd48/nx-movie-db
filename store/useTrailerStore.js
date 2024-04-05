export const useTrailerStore = defineStore("trailerStore", () => {
  const isMuted = ref(true);

  function TOGGLE_TRAILER_MUTE() {
    isMuted.value = !isMuted.value;
  }

  return {
    isMuted,
    TOGGLE_TRAILER_MUTE
  };
});
