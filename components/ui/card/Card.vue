<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { defineProps } from 'vue';

const props = defineProps<{
    id: number
    title: string
    content: string
    date: string
    modelValue?: boolean
    class?: HTMLAttributes['class']
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
})
</script>

<template>
  <div class="rounded bg-header w-full p-5 m-2 max-w-sm cursor-pointer mt-10">
    <RouterLink :to="`/blog/${props.id}`" class="block w-full">
      <h2 class="font-bold text-lg mb-2 text-secondary-white">{{ props.title }}</h2>
      <div class="max-h-40 overflow-hidden mb-2 z-[1]">
        <p class="text-sm text-secondary-foreground">{{ props.content }}</p>
      </div>
      <span class="text-sm text-gray-500 mb-2">{{ props.date }}</span>
    </RouterLink>
  </div>

</template>

<style scoped>
.max-h-40 {
  max-height: 10rem;
}
</style>