<template>
  <div
    class="layout-padding xs:-mt-8 s:-mt-9 m:-mt-10 l:-mt-16 sm:-mt-8 md:-mt-24 lg:-mt-24 xl:-mt-52 relative z-20 bg-brand-black"
  >
    <SampleList
      v-for="section in props.content"
      :sectionData="section"
      :key="section.id"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>
