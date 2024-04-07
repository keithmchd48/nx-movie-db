<template>
  <div class="font-Roboto bg-brand-black w-screen h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { PATHS } from "@/constants/assets";

const { auth } = useFirebaseAuth();

import { useUserStore } from "@/store/useUserStore";
const { ADD_USER, LOGOUT_USER } = useUserStore();

import { useSearchStore } from "@/store/useSearchStore";
const { UPDATE_SEARCH_QUERY } = useSearchStore();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const { uid, email, displayName, photoURL } = user;
    ADD_USER({ uid, email, displayName, photoURL });
    navigateTo(PATHS.BROWSE);
  } else {
    UPDATE_SEARCH_QUERY("");
    LOGOUT_USER();
    navigateTo(PATHS.AUTH);
  }
});

import { YOUTUBE_DOMAIN, YOUTUBE_SCRIPT_ID } from "@/constants/assets";

import { useTrailerStore } from "@/store/useTrailerStore";
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
</script>
