import { YOUTUBE_DOMAIN, YOUTUBE_SCRIPT_ID } from "@/constants/assets";
import { useTrailerStore } from "@/store/useTrailerStore";

export default function useYoutubeApi() {
  const trailerStore = useTrailerStore();
  const { DESTROY_YT_PLAYER } = trailerStore;
  let iframeScript = null;

  onMounted(() => {
    iframeScript = document.getElementById(YOUTUBE_SCRIPT_ID);

    if (!iframeScript) {
      iframeScript = document.createElement("script");
      iframeScript.id = YOUTUBE_SCRIPT_ID;
      iframeScript.src = `${YOUTUBE_DOMAIN}iframe_api`;
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(iframeScript, firstScriptTag);
    }
  });

  onBeforeMount(() => {
    if (iframeScript) {
      iframeScript.remove();
    }
    window.YT = null;
    DESTROY_YT_PLAYER();
    window.onYouTubeIframeAPIReady = null;
  });

  return {
  };
}