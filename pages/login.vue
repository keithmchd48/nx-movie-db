<template>
  <div class="bg-brand-black z-0 relative min-h-screen">
  <!-- Background cover -->
    <div class="bg-cover max-sm:hidden opacity-50 bg-center bg-no-repeat inset-0 h-full min-h-screen overflow-hidden absolute w-full -z-10">
      <img
        alt="bg_img"
        :src="BG_IMG_URL"
        class="min-h-full min-w-full"
      ></img>
    </div>
    <div class="flex items-center h-screen">
      <div class="max-w-md px-6 my-0 mx-auto">
        <AuthForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BG_IMG_URL} from "@/constants/assets.ts";
const config = useRuntimeConfig();
console.log('VITE_API_DOMAIN', config.public.VITE_API_DOMAIN);

</script>