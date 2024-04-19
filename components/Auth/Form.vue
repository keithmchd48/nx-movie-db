<template>
  <div class="max-w-md my-0 mx-auto py-12 sm:px-16 bg-opacity-80 bg-brand-black rounded">
    <h1 class="text-white text-4xl mb-7 font-bold">{{ formTitle }}</h1>
    <form @submit.prevent>
      <input
        v-show="formType === SIGNUP"
        v-model="name"
        autocomplete="on"
        type="text"
        :placeholder="TRANSLATION_AUTH.fullNamePlaceholder"
        class="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded"
      />
      <input
        v-model="email"
        type="text"
        autocomplete="on"
        :placeholder="TRANSLATION_AUTH.emailPlaceholder"
        class="w-full bg-gray-800 opacity-80 text-white p-3 mb-4 rounded"
      />
      <input
        v-model="password"
        type="password"
        autocomplete="on"
        :placeholder="TRANSLATION_AUTH.passwordPlaceholder"
        class="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded"
      />
      <input
        v-show="formType === SIGNUP"
        v-model="confirmPassword"
        type="password"
        autocomplete="on"
        :placeholder="TRANSLATION_AUTH.confirmPasswordPlaceholder"
        class="w-full bg-gray-800 text-white p-3 mb-4 opacity-80 rounded"
      />
      <button
        @click="submitForm"
        class="w-full bg-brand-orange text-white p-3 opacity-100 rounded hover:bg-[#e55303]"
      >
        {{ formTitle }}
      </button>
      <p v-show="errorMessage" class="text-red-500 font-thin text-sm my-2">
        {{ errorMessage }}
      </p>
    </form>
    <p v-show="formType === LOGIN" class="text-gray-300 mt-40 font-normal">
      {{ TRANSLATION_AUTH.newToApp }}
      <button @click="toggleForm" class="text-white hover:underline font-medium ml-2">
        {{ TRANSLATION_AUTH.signUpNow }}
      </button>
    </p>
    <p v-show="formType === SIGNUP" class="text-gray-300 mt-40 font-normal">
      {{ TRANSLATION_AUTH.alreadyMember }}
      <button @click="toggleForm" class="text-white hover:underline font-medium ml-2">
        {{ TRANSLATION_AUTH.signInNow }}
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { PATHS, FormType } from "@/constants/assets";
import { useUserStore } from "@/store/useUserStore";
import { type LanguageType } from "@/translations/types";

const userStore = useUserStore();

const LOGIN: FormType = FormType.LOGIN;
const SIGNUP: string = FormType.SIGNUP;

const INVALID_CREDENTIALS: string = "auth/invalid-credential";

const validations = useValidations();
const { validateLoginForm, validateSignupForm } = validations;
const { registerUser, signInUser, updateUser, auth } = useFirebaseAuth();

const { TRANSLATION_AUTH, TRANSLATION_VALIDATIONS }: {
  TRANSLATION_AUTH: ComputedRef<LanguageType["auth"]>,
  TRANSLATION_VALIDATIONS: ComputedRef<LanguageType["validations"]>
} = useTranslations();

const formType: Ref<string> = ref(LOGIN);
const formTitle: ComputedRef<string> = computed(() =>
  formType.value === LOGIN ? TRANSLATION_AUTH.value.signIn : TRANSLATION_AUTH.value.signUp
);

const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const confirmPassword: Ref<string> = ref("");
const errorMessage: Ref<string | null> = ref(null);

const submitForm = () => {
  if (formType.value === LOGIN) {
    let message: string | null = validateLoginForm(email.value);
    if (message) {
      errorMessage.value = TRANSLATION_VALIDATIONS.value[message as keyof LanguageType["validations"]];
      return;
    }
    signInUser(email.value, password.value)
      .then((userCredential: any) => {
        errorMessage.value = null;
        const theUser = userCredential.user;
        const { uid, email, displayName, photoURL }  = theUser || {
          uid: "",
          email: "",
          displayName: "",
          photoURL: "",
        };
        // store user in global store
        userStore.ADD_USER({ uid, email, displayName, photoURL });
        navigateTo(PATHS.BROWSE);
      })
      .catch((error: { code: string }) => {
        console.log("Login erorr", error.code);
        if (error.code === INVALID_CREDENTIALS) {
          errorMessage.value = TRANSLATION_VALIDATIONS.value.invalidCredentials;
        }
      });
  } else {
    const message: string | null = validateSignupForm(
      name.value,
      email.value,
      password.value,
      confirmPassword.value
    );

    if (message) {
      errorMessage.value = TRANSLATION_VALIDATIONS.value[message as keyof LanguageType["validations"]];
      return;
    }

    registerUser(email.value, password.value)
      .then(() => {
        errorMessage.value = null;
        updateUser(auth.currentUser, { name: name.value })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth?.currentUser ?? {
              uid: "",
              email: "",
              displayName: "",
              photoURL: "",
            };
            // store user in global store
            userStore.ADD_USER({ uid, email, displayName, photoURL });
            navigateTo(PATHS.BROWSE);
          })
          .catch((error: { message: string }) => {
            console.log("Update user error", error.message);
          });
      })
      .catch((error: { message: string }) => {
        console.log("Signup error", error.message);
      });
  }
};

const toggleForm = () => {
  formType.value = formType.value === LOGIN ? SIGNUP : LOGIN;
  errorMessage.value = null;
};
</script>
