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
<script setup lang="ts">
import { POSTER_PATH_URL, BACKDROP_PLACEHOLDER, TMDB_DOMAIN } from "@/constants/assets";
import {type LanguageType, type MonthType} from "@/translations/types";
import { type SampleInterface } from "@/composables/useTmdbApi";

interface Props {
  sample: SampleInterface
  sampleType: string
}

const props = defineProps<Props>();

const { sample, sampleType }: {sample: Ref<SampleInterface>, sampleType: Ref<string>} = toRefs(props);
const {
  title,
  original_name,
  first_air_date,
  release_date,
  id,
  backdrop_path,
}: SampleInterface = sample.value;

const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();
const MONTH_TRANSLATIONS: ComputedRef<MonthType> = computed(() => TRANSLATION.value.months);
const { getReadableDate } = useReadableDate();

const readableDate: ComputedRef<string> = computed(() =>
  getReadableDate(release_date || first_air_date, MONTH_TRANSLATIONS.value)
);

const backdropSrc: ComputedRef<string> = computed(() =>
  backdrop_path ? `${POSTER_PATH_URL}${backdrop_path}` : BACKDROP_PLACEHOLDER
);

const openTMDBLink = () => {
  window.open(`${TMDB_DOMAIN}${sampleType.value}/${id}`);
};
</script>
