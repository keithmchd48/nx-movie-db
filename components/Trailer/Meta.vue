<template>
  <div
    class="absolute layout-padding top-10 pt-[20%] w-screen aspect-video bg-gradient-to-r from-brand-black"
  >
    <!-- Title and Overview -->
    <h1 class="lg:text-6xl m:text-3xl xs:text-xl text-white font-bold">{{ title }}</h1>
    <p
      class="xs:hidden sm:block lg:text-lg m:text-base xs:text-sm xs:py-3 lg:py-6 xs:w-full sm:w-3/4 lg:w-1/2 text-white"
    >
      {{ overview }}
    </p>
    <!-- Play and More Info buttons -->
    <div class="flex">
      <Button @click="onPlay" class="bg-white text-black">
        <Icon name="material-symbols:play-arrow" class="mr-2" />
        {{ TRANSLATION.play }}
      </Button>
      <Button @click="onMoreInfo" class="bg-gray-600 text-white ml-3">
        <Icon name="material-symbols:info-outline" class="mr-2 font-bold text-2xl" />
        {{ TRANSLATION.moreInfo }}
      </Button>
    </div>
  </div>
  <!-- Mute controle & Age Rating -->
  <div
    class="relative right-0 xs:top-36 s:top-36 m:top-50 l:top-56 sm:top-64 md:top-72 lg:top-[500px] flex items-center justify-end"
  >
    <TrailerMute />
    <TrailerAgeRating :rating="ageRating" />
  </div>
</template>
<script setup>
import { YOUTUBE_DOMAIN } from "@/constants/assets";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  overview: {
    type: String,
    default: "",
  },
  trailerKey: {
    type: String,
    required: true,
  },
  isAdult: {
    type: Boolean,
    default: false,
  },
  tmdbLink: {
    type: String,
    required: true,
  },
});

const { title, overview, trailerKey, isAdult, tmdbLink } = toRefs(props);

const { TRANSLATION } = useTranslations();

const onPlay = () => {
  window.open(`${YOUTUBE_DOMAIN}watch?v=${trailerKey.value}`, "_blank");
};

const onMoreInfo = () => {
  window.open(`${tmdbLink.value}`, "_blank");
};

const ageRating = computed(() => (isAdult.value ? "18+" : "13+"));
</script>
<style scoped>
.icon {
  display: inherit;
}
</style>
