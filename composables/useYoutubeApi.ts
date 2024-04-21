import { YOUTUBE_DOMAIN, YOUTUBE_SCRIPT_ID } from "@/constants/assets";
import { useTrailerStore } from "@/store/useTrailerStore";
import type { FunctionTypeNode } from "typescript";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: FunctionTypeNode | null;
  }
}

export default function useYoutubeApi() {
  const trailerStore = useTrailerStore();
  const { DESTROY_YT_PLAYER } = trailerStore;
  let iframeScript: HTMLScriptElement | null = null;

  onMounted(() => {
    iframeScript = document.getElementById(YOUTUBE_SCRIPT_ID) as HTMLScriptElement | null;

    if (!iframeScript) {
      iframeScript = document.createElement("script");
      iframeScript.id = YOUTUBE_SCRIPT_ID;
      iframeScript.src = `${YOUTUBE_DOMAIN}iframe_api`;
      const firstScriptTag: HTMLScriptElement | null = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(iframeScript, firstScriptTag);
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