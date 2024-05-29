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
        <LayoutTiptapEditor />
    </div>
</template>

<style scoped>

</style>