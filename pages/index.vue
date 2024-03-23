<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1 class="text">Home</h1>
    <p>Full path: {{ route.fullPath }}</p>
  </div>
</template>
