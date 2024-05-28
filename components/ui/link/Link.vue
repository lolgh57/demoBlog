<!-- <script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { defineProps } from 'vue';

const props = defineProps<{
    id: string
    slug: string
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
    <RouterLink :to="props.slug" >

    </RouterLink>
</template>

<style lang="scss" scoped>

</style> -->