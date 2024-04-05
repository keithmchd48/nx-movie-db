<template>
  <div
    @click="TOGGLE_TRAILER_MUTE"
    class="xs:w-7 xs:h-7 l:w-10 l:h-10 border border-white rounded-full bg-brand-black bg-opacity-0 mr-3 cursor-pointer flex items-center justify-center hover:bg-opacity-10"
  >
    <div :class="[isMuted ? 'block' : 'hidden']">
      <Icon name="carbon:volume-mute" class="text-white l:text-2xl" />
    </div>
    <div :class="[isMuted ? 'hidden' : 'block']">
      <Icon name="carbon:volume-up" class="text-white l:text-2xl" />
    </div>
  </div>
</template>
<script setup>
import { useTrailerStore } from "@/store/useTrailerStore";

const trailerStore = useTrailerStore();
const isMuted = computed(() => trailerStore.isMuted);
const { TOGGLE_TRAILER_MUTE } = trailerStore;
</script>

<style scoped>
.icon {
  display: inherit;
}
</style>
