<template>
  <div
    :class="[isHamburgerVisible ? 'xs:flex' : 'xs:hidden']"
    class="xs:text-base fixed pt-[56px] sm:hidden flex-col gap-1 bg-brand-black px-4 py-4 z-30"
    >
    <!-- Avatar and display name -->
      <div v-if="props.user" class="flex items-center">
        <img
          alt="avatar"
          :src="props.user.photoURL || AVATAR"
          class="xs:w-6 l:w-8 cursor-pointer"
        ></img>
        <p v-show="props.user.displayName" class="text-white text-sm ml-2">{{ props.user.displayName }}</p>
      </div>
      <!-- Sign out option -->
      <button
        @click="handleSignOut"
        class="w-full py-2 text-white text-sm text-start hover:underline border-b-[0.5px]"
      >
        {{TRANSLATION.headerMenu.profileDropdown.signOut}}
      </button>
      <ul class="flex flex-col gap-2 font-light text-gray-300">
        <HeaderMenu />
      </ul>
    </div>
</template>
<script setup>
  import {AVATAR} from "@/constants/assets.js";
  const { handleSignOut } = useFirebaseAuth();

  const props = defineProps({
    user: {
      type: [Object, null],
      required: true,
    },
    isHamburgerOpen: {
      type: Boolean,
      default: false,
    },
  });

const TRANSLATION = useTranslations();

const isHamburgerVisible = computed(() => props.user && props.isHamburgerOpen);
</script>