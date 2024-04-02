<template>
  <div class="xs:hidden sm:block" v-click-outside="closeProfileOptions">
    <div v-if="user" class="relative">
      <button @click="toggleProfileOptions" tabIndex="0" class="flex items-center">
        <img alt="avatar" :src="user.photoURL || AVATAR" class="xs:w-6 l:w-8 cursor-pointer"></img>
      </button>
      <ProfileOptions :isOpen="isProfileOptionsOpen" />
    </div>
  </div>
</template>
<script setup>
import { AVATAR } from "@/constants/assets";

import { useUserStore } from "@/store/useUserStore";
const userStore = useUserStore();
const user = computed(() => userStore.user);

const isProfileOptionsOpen = ref(false);
const toggleProfileOptions = () => {
  isProfileOptionsOpen.value = !isProfileOptionsOpen.value;
};
const closeProfileOptions = () => {
  isProfileOptionsOpen.value = false;
};
</script>
