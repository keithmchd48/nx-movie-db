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

<script setup lang="ts">
import { type LanguageType } from "@/translations/types";
import { PATHS } from "@/constants/assets";

const { TRANSLATION }: { TRANSLATION: ComputedRef<LanguageType> } = useTranslations();

const handleClick = () => {
  navigateTo(PATHS.BROWSE);
};
</script>
