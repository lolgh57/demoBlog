<template>
  <header class="bg-header fixed top-0 left-0 h-auto w-full flex justify-between items-center p-4">
    <NuxtLink to="/" class="block">
      <NuxtImg src="/logo.svg" alt="logo" width="77px" class="mx-100"/>
    </NuxtLink>

    <button @click="toggleMenu" :class="{'relative z-[61]': isMenuOpen, 'inline-block': !isMenuOpen}" class="md:hidden">
      <svg v-if="!isMenuOpen" class="w-6 h-6 text-secondary-foreground" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="w-6 h-6 text-secondary-foreground" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <LayoutMenu class="hidden md:flex" />
    <NuxtLink to="/login" class="hidden md:flex text-secondary-foreground bg-secondary flex items-center px-3 rounded-lg transition-all hover:bg-header">
      Login
    </NuxtLink>

    <div @click="toggleMenu" :class="['menu-overlay', { 'menu-bg-open': isMenuOpen, 'menu-bg-closed': !isMenuOpen }]" class="w-full h-screen fixed top-0 left-0 inset-0 bg-black bg-opacity-80 z-40 overflow-hidden"></div>
    <div :class="{ 'menu-bg-open': isMenuOpen, 'menu-bg-closed': !isMenuOpen }" class="bg-header menu-bg fixed top-0 right-0 h-full z-50 w-1/2 p-4 py-20 md:hidden transition-transform duration-300">
      <LayoutMenu @closeMenu="toggleMenu" />
      <NuxtLink to="/login" class="text-secondary-foreground bg-secondary flex items-center justify-center p-3 rounded-lg transition-all hover:bg-header mt-4">
        Login
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
</script>

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
