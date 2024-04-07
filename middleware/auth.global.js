import { useUserStore } from "@/store/useUserStore";
import { PATHS } from "@/constants/assets";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const user = computed(() => userStore.user);
  
  if (!user.value && to.path !== PATHS.AUTH) {
    return navigateTo(PATHS.AUTH);
  }

  if (user.value && to.path === PATHS.AUTH) {
    return abortNavigation()
  }

  // Redirect to browse if user is logged in and tries to go to "/"
  if (to.path === PATHS.INDEX) {
    return navigateTo(PATHS.BROWSE);
  }
})