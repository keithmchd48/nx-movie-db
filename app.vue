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

useYoutubeApi();
</script>
