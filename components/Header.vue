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
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "@/store/useUserStore";
import { PATHS } from "@/constants/assets";

const { ADD_USER, LOGOUT_USER, user } = useUserStore();
const { auth } = useFirebaseAuth();

const isLoggedIn = computed(() => user);

onAuthStateChanged(auth, (user) => {
  console.log("User auth changed: ", user);
  if (user) {
    const { uid, email, displayName, photoURL } = user;
    ADD_USER({ uid, email, displayName, photoURL });
    navigateTo(PATHS.BROWSE);
  } else {
    // dispatch(UPDATE_SEARCH_QUERY(""));
    LOGOUT_USER();
    navigateTo(PATHS.AUTH);
  }
});

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
