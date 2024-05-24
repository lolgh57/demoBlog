<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import { BLOG_DATA } from '../blog.data';

const route = useRoute()
const blogId = computed(() => Number(route.params.id))

const blog = computed(() => BLOG_DATA.find(item => item.id === blogId.value))
</script>

<template>
  <div v-if="blog" class="p-5">
    <h1 class="text-3xl font-bold mb-4">{{ blog.title }}</h1>
    <p class="text-sm text-gray-500 mb-4">{{ blog.date }}</p>
    <div class="text-base text-secondary-foreground">
      {{ blog.content }}
    </div>
  </div>
  <div v-else class="p-5">
    <p class="text-red-500">Blog not found</p>
  </div>
</template>
