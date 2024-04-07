<template>
  <div class="mb-11 last:mb-0">
    <h1 class="text-white text-2xl mb-3">{{ title }}</h1>
    <div class="flex overflow-x-scroll no-scrollbar">
      <div class="flex gap-3 w-100">
        <SampleCard
          v-for="sample in samples"
          :sampleType="sampleType"
          :sample="sample"
          :key="sample.id"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
const { sectionData } = toRefs(props);
const { title, samples, sampleType } = sectionData.value;
</script>
