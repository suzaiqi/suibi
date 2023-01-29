<template>
    <div @click="goBack">学习跳转</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter();
        const goBack = (): void =>{
            router.back();
        }
        return {
            goBack
        }
    },
})
</script>
