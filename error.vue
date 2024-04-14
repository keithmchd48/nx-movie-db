<template>
  <div>
    <NuxtLayout>
      <div
        class="bg-brand-black w-screen h-screen flex flex-col justify-center items-center"
      >
        <div class="text-white text-2xl">{{ TRANSLATION.error.message }}</div>
        <Button @click="handleClick" class="bg-white text-black mt-7">
          {{ TRANSLATION.error.cta }}
        </Button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { PATHS, HEAD_TITLES } from "@/constants/assets";

useHead({
  title: HEAD_TITLES.ERROR,
});

const { TRANSLATION } = useTranslations();

const handleClick = () => {
  navigateTo(PATHS.BROWSE);
};
</script>
