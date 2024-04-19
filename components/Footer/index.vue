<template>
  <footer
    class="xs:text-xs m:text-sm bg-brand-black text-white font-light text-center p-4"
  >
    <p>&copy; {{ currentYear }} Flixwatch</p>
    <p class="mt-2">
      {{ TRANSLATION.footer.madeBy }}
      <a
        rel="noreferrer"
        class="text-brand-orange hover:underline ml-1"
        :href="MY_BIO_LINK"
        target="_blank"
      >
        @keithmchd48
      </a>
    </p>
  </footer>
</template>
<script setup lang="ts">
import { type LanguageType } from "@/translations/types";

const MY_BIO_LINK: string = "https://bio.to/keith-dev";
const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();

const currentYear: number = new Date().getFullYear();
</script>
