<template>
  <Header />
  <!-- <button @click="handleSignOut" class="text-white">Logout</button> -->
</template>

<script setup>
const { handleSignOut } = useFirebaseAuth();
</script>
