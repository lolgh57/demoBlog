<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    
    const title = ref('');
    const inputEmail = ref('');
    const inputPassword = ref('');
    
    watchEffect(() => {
        title.value = t('title-login');
        inputEmail.value = t('login-page-input-email');
        inputPassword.value = t('login-page-input-password');
    });

    useHead({
        title: title.value + ' | Explore Demo',
    })
</script>

<template>
    <div class="flex items-center justify-center min-h-screen w-full">
        <div class="rounded bg-header w-1/2 sm:w-1/3 lg:w-1/4 2xl:w-1/5 p-5">
            <h1 class="text-xl text-secondary-foreground font-bold text-center mb-10">
                {{ $t('login-page-title') }}
            </h1>

            <form>
                <UiInput type="email" :placeholder="inputEmail" class="mb-5"/>
                <UiInput type="password" :placeholder="inputPassword" class="mb-5"/>
                <div class="w-full flex justify-center items-center">
                    <UiButton variant="secondary" class="w-full lg:w-1/2 2xl:w-1/3">{{ $t('login-page-button') }}</UiButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>