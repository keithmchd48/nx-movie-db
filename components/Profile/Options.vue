<template>
  <div
    class="absolute right-0 mt-2 min-w-max bg-brand-black shadow-lg text-white border-[0.5px] border-gray-400 xs:text-xs m:text-base"
    :class="[isOpen ? 'block' : 'hidden']"
  >
    <div class="p-2 flex items-center text-nowrap">
      <Icon name="material-symbols:person" class="mr-2" />
      <p v-if="user && user.displayName">{{ user.displayName }}</p>
    </div>
    <div class="p-2 border-t-[0.5px]">
      <button
        @click="handleSignOut"
        class="block w-full hover:underline align-middle text-center"
      >
        {{ TRANSLATION.headerMenu.profileDropdown.signOut }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type LanguageType } from "@/translations/types";

const { TRANSLATION }: {TRANSLATION: ComputedRef<LanguageType>} = useTranslations();
const { handleSignOut } = useFirebaseAuth();

import { useUserStore, type UserType } from "@/store/useUserStore";
const userStore = useUserStore();
const user: ComputedRef<UserType> = computed(() => userStore.user);

interface Props {
  isOpen: boolean;
}
const props = defineProps<Props>();
</script>
