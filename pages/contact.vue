<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const title = t('title-blog');
    
    useHead({
        title: title + ' | Explore Demo',
    })
</script>

<template>
    <div class="p-10">
        <h1 class="flex items-center justify-center font-bold text-2xl mb-10 text-secondary-foreground">
            {{ $t('contact-page-title') }}
        </h1>
        <span class="text-secondary-foreground">
            {{ $t('contact-page-description') }}
        </span>
    </div>
</template>

<style scoped>

</style>