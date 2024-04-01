<template>
  <div>
    <!-- {<HamburgerMenu />} -->
    <div
      :class="[
        scroll
          ? 'bg-brand-black'
          : 'xs:bg-brand-black l:bg-transparent l:bg-gradient-to-b l:from-brand-black',
      ]"
      class="layout-padding flex fixed w-screen z-30 justify-between items-center py-3"
    >
      <div class="flex gap-3 items-center">
        <div>
          <div
            @click="openHamburgerMenu"
            class="sm:hidden text-white text-xl"
            :class="[isHamburgerIconVisible ? 'xs:block' : 'xs:hidden']"
          >
            <Icon name="game-icons:hamburger-menu" />
          </div>
          <!-- Times Icon -->
          <div
            @click="closeHamburgerMenu"
            class="sm:hidden text-white text-xl"
            :class="[isCloseIconVisible ? 'xs:block' : 'xs:hidden']"
          >
            <Icon name="iconamoon:sign-times-duotone" />
          </div>
        </div>
        <Logo />
        <!-- <HeaderMenu /> -->
      </div>
      <!-- <div class="flex items-center xs:gap-1 l:gap-3">
        <LangSelect />
        {user && <SearchComponent />}
        <ProfileDropdown />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/useUserStore";
const { user } = useUserStore();

const isLoggedIn = computed(() => user);

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
const isHamburgerIconVisible = computed(
  () => isLoggedIn.value && !hamburgerMenuOpen.value
);
const isCloseIconVisible = computed(() => isLoggedIn.value && hamburgerMenuOpen.value);
const openHamburgerMenu = () => {
  hamburgerMenuOpen.value = true;
};
const closeHamburgerMenu = () => {
  hamburgerMenuOpen.value = false;
};
</script>
