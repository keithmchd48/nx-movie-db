<template>
  <button
    v-bind="$attrs"
    class="xs:text-xs xs:p-1 xs:px-2 s:text-sm s:p-2 s:px-4 m:text-lg flex items-center rounded font-semibold cursor-pointer hover:bg-opacity-85"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script setup>
const onClick = () => {
  console.log("Button clicked");
};
</script>
