<template>
  <div @click="openTMDBLink" class="w-60 relative cursor-pointer">
    <img :src="backdropSrc" alt="sample_poster" class="rounded-md" />
    <div
      class="text-white text-left absolute inset-0 flex flex-col justify-end items-start p-2 bg-black bg-opacity-35 hover:bg-opacity-10 transition-bg-opacity ease-in-out duration-200"
    >
      <h4 class="text-xl">{{ title || original_name }}</h4>
      <p class="text-sm">{{ readableDate }}</p>
    </div>
  </div>
</template>
<script setup>
import { POSTER_PATH_URL, BACKDROP_PLACEHOLDER, TMDB_DOMAIN } from "@/constants/assets";

const props = defineProps({
  sample: {
    type: Object,
    required: true,
  },
  sampleType: {
    type: String,
    required: true,
  },
});
const { sample, sampleType } = toRefs(props);
const {
  title,
  original_name,
  first_air_date,
  release_date,
  id,
  backdrop_path,
} = sample.value;

const { TRANSLATION } = useTranslations();
const MONTH_TRANSLATIONS = computed(() => TRANSLATION.value.months);
const { getReadableDate } = useReadableDate();

const readableDate = computed(() =>
  getReadableDate(release_date || first_air_date, MONTH_TRANSLATIONS.value)
);

const backdropSrc = computed(() =>
  backdrop_path ? `${POSTER_PATH_URL}${backdrop_path}` : BACKDROP_PLACEHOLDER
);

const openTMDBLink = () => {
  window.open(`${TMDB_DOMAIN}${sampleType.value}/${id}`);
};
</script>
