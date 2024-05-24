<script setup lang="ts">

    useHead({
        title: 'Login | Explore Demo',
    })

</script>

<template>
    <div class="flex items-center justify-center min-h-screen w-full">
        <div class="rounded bg-header w-1/2 sm:w-1/3 lg:w-1/4 2xl:w-1/5 p-5">
            <h1 class="text-xl text-secondary-foreground font-bold text-center mb-10">Login</h1>

            <form>
                <UiInput type="email" placeholder="Email" class="mb-5"/>
                <UiInput type="password" placeholder="Password" class="mb-5"/>
                <div class="w-full flex justify-center items-center">
                    <UiButton variant="secondary" class="w-full lg:w-1/2 2xl:w-1/3">Login</UiButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>