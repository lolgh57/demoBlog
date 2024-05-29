<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const title = t('title-blog');
    
    useHead({
        title: title + ' | Explore Demo',
    })

    const data = await GqlArticles({limit: 10});
    // console.log(data.articles?.Articles);
    const formatDate = (createdAt: string) => {
        const date = new Date(createdAt);
        const day = ('0' + date.getDate()).slice(-2); // День
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Месяц (начинается с 0)
        const year = date.getFullYear().toString().slice(-2); // Год (две последние цифры)
        const hours = ('0' + date.getHours()).slice(-2); // Часы
        const minutes = ('0' + date.getMinutes()).slice(-2); // Минуты
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    
    const cardClass = 'w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2';
</script>

<template>
    <div class="p-10">
        <h1 class="flex items-center justify-center font-bold text-2xl mb-10 text-secondary-foreground">
            {{ $t('blog-page-title') }}
        </h1>
        <span class="text-secondary-foreground">
            {{ $t('blog-page-description') }}
        </span>
        <NuxtLink to="blog/create" class="text-secondary-foreground bg-header flex items-center justify-center p-3 rounded-lg transition-all hover:bg-secondary mt-4">
            Создать блог
        </NuxtLink>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 place-items-center">
            <UiCard 
                v-for="article of data?.articles?.Articles"
                v-bind="article"
                :class="cardClass"
                :key="article?.id || ''"
                :id="article?.id || ''"
                :title="article?.title || ''"
                :date="formatDate(article?.createdAt)"
                :imageWeb="article?.imageWeb || ''">
            </UiCard>
        </div>
    </div>
</template>

<style scoped>

</style>