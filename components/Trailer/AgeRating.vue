<template>
  <div
    class="bg-gray-400 text-white py-1 pl-3 border-l-4 border-solid m:min-w-16 lg:min-w-24 bg-opacity-20 xs:text-sm sm:text-lg"
  >
    {{ rating }}
  </div>
</template>
<script setup>
const props = defineProps({
  rating: {
    type: String,
    required: true,
  },
});
</script>
