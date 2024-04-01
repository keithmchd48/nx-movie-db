<template>
  <NuxtLink to="/">
    <img
        alt="main_logo"
        :src="MAIN_LOGO"
        class="xs:max-w-32 sm:max-w-52"
      ></img>
  </NuxtLink>
</template>
<script setup>
import {MAIN_LOGO} from "@/constants/assets";
</script>