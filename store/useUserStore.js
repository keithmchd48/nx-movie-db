export const useUserStore = defineStore("userStore", () => {
  const user = ref(null);

  function ADD_USER(newUser) {
    user.value = newUser;
  }

  function LOGOUT_USER() {
    user.value = null;
  }

  return {
    user,
    ADD_USER,
    LOGOUT_USER,
  };
});
