<script setup lang="ts">
    import { BLOG_DATA } from '../blog.data';
    useHead({
        title: 'Blog | Explore Demo',
    })
</script>

<template>
    <div class="p-10">
        <h1 class="flex items-center justify-center font-bold text-2xl mb-10 text-secondary-foreground">Blog</h1>
        <span class="text-secondary-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum atque dolorem deserunt nisi aliquam soluta laboriosam? Ut voluptate, assumenda error exercitationem dolore in, quo nihil ad, veritatis iste facilis.    
        </span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 place-items-center">
            <UiCard v-for="item in BLOG_DATA" :key="item.id" v-bind="item" class="w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2"></UiCard>
        </div>
    </div>
</template>

<style scoped>

</style>