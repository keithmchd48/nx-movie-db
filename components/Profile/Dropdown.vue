<template>
  <div class="xs:hidden sm:block" v-on-click-outside="closeProfileOptions">
    <div v-if="user" class="relative">
      <button @click="toggleProfileOptions" tabIndex="0" class="flex items-center">
        <img alt="avatar" :src="user.photoURL || AVATAR" class="xs:w-6 l:w-8 cursor-pointer"></img>
      </button>
      <ProfileOptions :isOpen="isProfileOptionsOpen" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";
import { AVATAR } from "@/constants/assets";

import { useUserStore, type UserType } from "@/store/useUserStore";
const userStore = useUserStore();
const user: ComputedRef<UserType> = computed(() => userStore.user);

const isProfileOptionsOpen: Ref<boolean> = ref(false);
const toggleProfileOptions = (): void => {
  isProfileOptionsOpen.value = !isProfileOptionsOpen.value;
};
const closeProfileOptions = (): void => {
  isProfileOptionsOpen.value = false;
};
</script>
