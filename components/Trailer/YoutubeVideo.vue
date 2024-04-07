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
import { YOUTUBE_DOMAIN, YOUTUBE_IFRAME_ID } from "@/constants/assets";

const props = defineProps({
  trailerKey: {
    type: String,
    required: true,
  },
});

const { trailerKey } = toRefs(props);

import { useTrailerStore } from "@/store/useTrailerStore";
const trailerStore = useTrailerStore();
const YTPlayerRef = computed(() => trailerStore.YTPlayerRef);
const { SET_YT_PLAYER_REF } = trailerStore;

onMounted(() => {
  SET_YT_PLAYER_REF(trailerKey.value);
});

watch(
  () => trailerStore.isMuted,
  () => {
    if (YTPlayerRef.value && YTPlayerRef.value.isMuted) {
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
