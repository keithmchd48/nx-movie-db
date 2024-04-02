<template>
  <div>
    <HeaderHamburgerMenu :user="user" :isHamburgerOpen="hamburgerMenuOpen" />
    <div
      :class="[
        scroll
          ? 'bg-brand-black'
          : 'xs:bg-brand-black l:bg-transparent l:bg-gradient-to-b l:from-brand-black',
      ]"
      class="layout-padding flex fixed w-screen z-30 justify-between items-center py-3"
    >
      <div class="flex gap-3 items-center">
        <!-- Hamburger Icon -->
        <div
          v-on-click-outside="closeHamburgerMenu"
          @click="openHamburgerMenu"
          :class="[isHamburgerIconVisible ? 'xs:block' : 'xs:hidden']"
          class="sm:hidden text-white text-xl"
        >
          <Icon name="game-icons:hamburger-menu" />
        </div>
        <!-- Times Icon -->
        <div
          @click="closeHamburgerMenu"
          :class="[isCloseIconVisible ? 'xs:block' : 'xs:hidden']"
          class="sm:hidden text-white text-xl"
        >
          <Icon name="iconamoon:sign-times-duotone" />
        </div>
        <Logo />
        <div class="xs:hidden sm:flex">
          <ul
            v-if="user"
            class="xs:text-xs l:text-base flex items-center xs:gap-2 l:gap-3 sm:gap-4 font-thin text-gray-200"
          >
            <HeaderMenu />
          </ul>
        </div>
      </div>
      <div class="flex items-center xs:gap-1 l:gap-3">
        <HeaderLangSelect />
        <SearchContainer v-show="user" />
        <ProfileDropdown />
      </div>
    </div>
  </div>
</template>

<script setup>
import { vOnClickOutside } from "@vueuse/components";

import { useUserStore } from "@/store/useUserStore";
const userStore = useUserStore();
const user = computed(() => userStore.user);

const scroll = ref(false);
const addGradient = () => {
  scroll.value = window.scrollY > 20;
};
onMounted(() => {
  window.addEventListener("scroll", addGradient);
});
onDeactivated(() => {
  window.removeEventListener("scroll", addGradient);
});

const hamburgerMenuOpen = ref(false);
const isHamburgerIconVisible = computed(() => user.value && !hamburgerMenuOpen.value);
const isCloseIconVisible = computed(() => user.value && hamburgerMenuOpen.value);
const openHamburgerMenu = () => {
  hamburgerMenuOpen.value = true;
};
const closeHamburgerMenu = () => {
  hamburgerMenuOpen.value = false;
};
</script>

<style scoped>
.icon {
  display: inherit;
}
</style>
