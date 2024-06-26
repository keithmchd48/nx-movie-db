import {YOUTUBE_IFRAME_ID} from "@/constants/assets";

export const useTrailerStore = defineStore("trailerStore", () => {
  const isMuted: Ref<boolean> = ref(true);
  const YTPlayerRef: Ref<Object | null> = ref(null);

  function TOGGLE_TRAILER_MUTE() {
    isMuted.value = !isMuted.value;
  }

  function SET_YT_PLAYER_REF(trailerKey: string) {
    if (!window.YT) {
      return;
    }
    YTPlayerRef.value = new window.YT.Player(YOUTUBE_IFRAME_ID, {
      videoId: trailerKey,
      playerVars: { autoplay: 1, controls: 0 },
    });

    isMuted.value = true;
  }

  function DESTROY_YT_PLAYER() {
    YTPlayerRef.value = null;
  };

  return {
    isMuted,
    YTPlayerRef,
    TOGGLE_TRAILER_MUTE,
    SET_YT_PLAYER_REF,
    DESTROY_YT_PLAYER
  };
});
