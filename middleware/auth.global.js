import { useUserStore } from "@/store/useUserStore";
import { PATHS } from "@/constants/assets";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const user = computed(() => userStore.user);
  
  const allPaths = Object.values(PATHS);
  if(!allPaths.includes(to.path)) {
    return navigateTo(PATHS.INDEX);
  }

  // Redirect to auth if user is not present and tries to go to an authenticated route
  if (!user.value && to.path !== PATHS.AUTH) {
    return navigateTo(PATHS.AUTH);
  }

  // if user is present and tries to go to "/auth"
  if (user.value && to.path === PATHS.AUTH) {
    return navigateTo(PATHS.BROWSE);
  }

  // Redirect to browse if user is logged in and tries to go to "/"
  if (to.path === PATHS.INDEX) {
    if (user.value) return navigateTo(PATHS.BROWSE);
    return navigateTo(PATHS.AUTH);
  }
})