<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const id = ref(String(route.params.id));
const currentLanguage = useI18n().locale.value;
const GqlInstance = useGql()

useGqlHeaders({ 'languagecode': currentLanguage });
const data = await GqlArticle({
  record: {
    id: id.value,
  }
});

const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

</script>

<template>
  <div v-if="data" class="p-5 mt-10">
    <div class="flex gap-4 flex-col-reverse md:flex-row">
      <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
        <h1 class="text-xl lg:text-2xl font-bold mb-4">{{ data.article?.title }}</h1>
        <div class="flex gap-4">
          <span class="text-sm flex text-secondary-foreground mb-4" v-for="(author, index) in data.article?.Authors" :key="index">
            {{$t('blog-page-author')}}<img :src="String(author?.avatar)" alt="image" class="w-8 h-8 mx-2 rounded-full" >{{ String(author?.fullName) }}
          </span>
          <span class="text-sm text-gray-500 mb-4">{{formatDate(data.article?.createdAt)}}</span>
        </div>
        <div v-for="(content, index) in data.article?.ArticleContents" :key="index">
          <div v-if="content?.Language?.code === currentLanguage" v-html="content?.content"></div>
        </div>
      </div>
      <div class="w-full h-fit md:w-1/2  lg:w-1/2 xl:w-1/2">
        <img :src="String(data.article?.imageWeb)" alt="image">
      </div>
    </div>
    
  </div>
  <div v-else class="p-5">
    <p class="text-red-500">Blog not found</p>
  </div>
</template>
