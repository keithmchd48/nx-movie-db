<template>
  <div class="font-Roboto bg-brand-black w-full h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onAuthStateChanged } from "firebase/auth";
const { auth } = useFirebaseAuth();

import { useUserStore } from "@/store/useUserStore";
const userStore = useUserStore();

onAuthStateChanged(auth, (user) => {
  console.log("User: ", user);
  if (user) {
    const { uid, email, displayName, photoURL } = user;
    userStore.ADD_USER({ uid, email, displayName, photoURL });
    // if (location.pathname !== PATHS.AUTH) {
    //   navigate(location.pathname);
    // } else {
    //   navigate(PATHS.BROWSE);
    // }
  } else {
    // dispatch(UPDATE_SEARCH_QUERY(""));
    userStore.LOGOUT_USER();
    // navigate(PATHS.AUTH);
  }
});
</script>
