<script setup lang="ts">

</script>

<template>
    <section class="min-h-screen flex flex-col">
        <LayoutHeader />
        <div class="flex-grow w-full h-full bg-secondary pt-20">
            <slot />
        </div>
    </section>
</template>

<style scoped>

</style>