<template>
  <iframe
    :id="YOUTUBE_IFRAME_ID"
    class="w-screen aspect-video"
    :src="videoSrc"
    title="YouTube video player"
    allowFullScreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</template>

<script setup>
const YOUTUBE_SCRIPT_ID = "youtube-iframe-api";
const YOUTUBE_IFRAME_ID = "youtube-trailer";

import { YOUTUBE_DOMAIN } from "@/constants/assets";

const props = defineProps({
  trailerKey: {
    type: String,
    required: true,
  },
});

const { trailerKey } = toRefs(props);

import { useTrailerStore } from "@/store/useTrailerStore";
const trailerStore = useTrailerStore();
// const isMuted = computed(() => trailerStore.isMuted);

const YTPlayerRef = ref(null);
const loadYTPlayerRef = () => {
  YTPlayerRef.value = new window.YT.Player(YOUTUBE_IFRAME_ID, {
    videoId: trailerKey.value,
    playerVars: { autoplay: 1, controls: 0 },
  });
};

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

  window.onYouTubeIframeAPIReady = loadYTPlayerRef;
});

onUnmounted(() => {
  if (iframeScript) {
    iframeScript.remove();
  }
  window.YT = null;
  window.onYouTubeIframeAPIReady = null;
});

watch(
  () => trailerStore.isMuted,
  () => {
    if (YTPlayerRef.value) {
      if (YTPlayerRef.value.isMuted()) {
        YTPlayerRef.value.unMute();
      } else {
        YTPlayerRef.value.mute();
      }
    }
  }
);

const videoOptions = computed(() => {
  return trailerKey.value
    ? `&autoplay=1&mute=1&loop=1&playlist=${trailerKey.value}&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0&color=white&iv_load_policy=3&disablekb=1&autohide=0&cc_load_policy=0&enablejsapi=1&widgetid=1`
    : "";
});

const videoSrc = computed(() => {
  return `${YOUTUBE_DOMAIN}embed/${trailerKey.value}?${videoOptions.value}`;
});
</script>
