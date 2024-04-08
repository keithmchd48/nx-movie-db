import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AVATAR, PATHS } from "@/constants/assets";

import { useUserStore } from "@/store/useUserStore";
import { useSearchStore } from "@/store/useSearchStore";

export default function () {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.NUXT_FIREBASE_API_KEY,
    authDomain: config.public.NUXT_FIREBASE_AUTH_DOMAIN,
    projectId: config.public.NUXT_FIREBASE_PROJECT_ID,
    storageBucket: config.public.NUXT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.NUXT_FIREBASE_MESSAGING_SENDER_ID,
    appId: config.public.NUXT_FIREBASE_APP_ID,
  };
  initializeApp(firebaseConfig);
  const auth = getAuth();

  const { ADD_USER, LOGOUT_USER } = useUserStore();
  const { UPDATE_SEARCH_QUERY } = useSearchStore();

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (user, userData) => {
    return updateProfile(user, {
      displayName: userData.name,
      photoURL: AVATAR,
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      UPDATE_SEARCH_QUERY("");
      LOGOUT_USER();
      navigateTo(PATHS.AUTH);
    }).catch((error) => {
      console.log(error.message);
    });
  };

  return {
    registerUser,
    signInUser,
    updateUser,
    auth,
    handleSignOut
  };
}
