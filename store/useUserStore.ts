interface UserInterface {
  uid: string | null,
  email: string | null,
  displayName: string | null,
  photoURL: string | null,
};

export type UserType = UserInterface | null;

export const useUserStore = defineStore("userStore", () => {
  const user: Ref<UserType> = ref(null);

  function ADD_USER(newUser: UserType) {
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
}, {
  persist: {
    storage: persistedState.localStorage,
  }
});
