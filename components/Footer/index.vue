<template>
  <footer
    class="xs:text-xs m:text-sm bg-brand-black text-white font-light text-center p-4"
  >
    <p>&copy; {{ currentYear }} Flixwatch</p>
    <p class="mt-2">
      {{ TRANSLATION.footer.madeBy }}
      <a
        rel="noreferrer"
        class="text-brand-orange hover:underline ml-2"
        :href="MY_BIO_LINK"
        target="_blank"
      >
        @keithmchd48
      </a>
    </p>
  </footer>
</template>
<script setup>
const MY_BIO_LINK = "https://bio.to/keith-dev";
const { TRANSLATION } = useTranslations();

const currentYear = new Date().getFullYear();
</script>
