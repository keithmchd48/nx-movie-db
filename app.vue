<template>
  <div class="font-Roboto bg-brand-black w-screen h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/useUserStore";
import { onAuthStateChanged } from "firebase/auth";
import { PATHS } from "@/constants/assets";

const { auth } = useFirebaseAuth();
const { ADD_USER, LOGOUT_USER } = useUserStore();

onAuthStateChanged(auth, (user) => {
  console.log("User auth changed: ", user);
  if (user) {
    const { uid, email, displayName, photoURL } = user;
    ADD_USER({ uid, email, displayName, photoURL });
    navigateTo(PATHS.BROWSE);
  } else {
    // dispatch(UPDATE_SEARCH_QUERY(""));
    LOGOUT_USER();
    navigateTo(PATHS.AUTH);
  }
});
</script>
