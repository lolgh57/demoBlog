<script setup lang="ts">

</script>

<template>
    <section class="min-h-screen flex flex-col">
        <LayoutHeader />
        <div class="flex-grow w-full h-full bg-secondary pt-20" :class="{'dark': $colorMode.value === 'dark', 'light': $colorMode.value === 'light'}">
            <slot />
        </div>
    </section>
</template>

<style scoped>

</style>