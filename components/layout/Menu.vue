<script setup lang="ts">
import { MENU_DATA } from './menu.data';

const emit = defineEmits(['closeMenu']);

const handleMenuClick = () => {
  emit('closeMenu');
};
</script>

<template>
    <section class="gap-4 p-1 rounded-lg">
        <NuxtLink 
        class="text-secondary-foreground flex items-center px-3 rounded-lg transition-all hover:bg-secondary" 
        v-for="item in MENU_DATA" 
        :key="item.name" 
        :to="item.url" 
        @click="handleMenuClick"
        >
            <span>{{ item.name }}</span>
        </NuxtLink>
    </section>
</template>
  
  