<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const isColorModeInitialized = ref(false);

const isMenuOpen = ref(false);
const selectedLanguage = ref(locale.value);
// languages

const languages = {
  en: "En",
  ru: "Ru",
  ua: "Ua",
  de: "De",
  fr: "Fr",
  es: "Es",
  kk: "Kz",
};

const changeLanguage = () => {
  setLocale(selectedLanguage.value);
};
// menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

// darkmode

type Theme = "light" | "dark";
const setColorTheme = (newtheme: Theme) => {
  useColorMode().preference = newtheme;
};

onMounted(() => {
  isColorModeInitialized.value = true;
});
</script>

<template>
  <header
    class="bg-header fixed md:relative z-30 top-0 left-0 h-auto w-full flex justify-between items-center p-4"
  >
    <NuxtLink to="/" class="block">
      <NuxtImg src="/logo.svg" alt="logo" width="77px" class="mx-100" />
    </NuxtLink>

    <button
      @click="toggleMenu"
      :class="{ 'relative z-[61]': isMenuOpen, 'inline-block': !isMenuOpen }"
      class="md:hidden"
    >
      <svg
        v-if="!isMenuOpen"
        class="w-6 h-6 text-secondary-foreground"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6 text-secondary-foreground"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <LayoutMenu class="hidden md:flex" />

    <div class="hidden md:flex items-center justify-center gap-1">
      <NuxtLink
        :to="localePath('login')"
        class="hidden md:flex mr-2 text-secondary-foreground bg-secondary flex items-center px-3 rounded-lg transition-all hover:bg-header"
      >
        {{ $t("menu-login-button") }}
      </NuxtLink>

      <select
        v-model="selectedLanguage"
        @change="changeLanguage"
        class="focus-visible:ring-0 cursor-pointer px-3 py-0.5 text-secondary-foreground bg-secondary rounded-lg transition-all hover:bg-header"
      >
        <option v-for="(lang, key) in languages" :key="key" :value="key">
          {{ lang }}
        </option>
      </select>

      <button
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
        class="p-1"
      >
        <svg
          v-if="isColorModeInitialized && $colorMode.value == 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          view-box="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      @click="toggleMenu"
      :class="[
        'menu-overlay',
        { 'menu-bg-open': isMenuOpen, 'menu-bg-closed': !isMenuOpen },
      ]"
      class="w-full h-screen fixed top-0 left-0 inset-0 bg-black bg-opacity-80 z-40 overflow-hidden"
    ></div>
    <div
      :class="{ 'menu-bg-open': isMenuOpen, 'menu-bg-closed': !isMenuOpen }"
      class="bg-header menu-bg fixed top-0 right-0 h-full z-50 w-1/2 p-4 py-20 md:hidden transition-transform duration-300"
    >
      <LayoutMenu @closeMenu="toggleMenu" />
      <NuxtLink
        :to="localePath('login')"
        class="text-secondary-foreground mb-2 bg-secondary flex items-center justify-center p-3 rounded-lg transition-all hover:bg-header mt-4"
      >
        {{ $t("menu-login-button") }}
      </NuxtLink>
      <select
        v-model="selectedLanguage"
        @change="changeLanguage"
        class="w-full text-center focus-visible:ring mb-2 cursor-pointer p-3 text-secondary-foreground bg-secondary rounded-lg transition-all hover:bg-header"
      >
        <option v-for="(lang, key) in languages" :key="key" :value="key">
          {{ lang }}
        </option>
      </select>
      <button
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
        class="w-full flex p-3 justify-end items-center"
      >
        <svg
          v-if="isColorModeInitialized && $colorMode.value == 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          view-box="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.menu-bg-closed {
  transform: translateX(100%);
}

.menu-bg-open {
  transform: translateX(0);
}

.menu-bg {
  transition: transform 0.3s ease-in-out;
}

.no-scroll {
  overflow: hidden;
}
</style>
