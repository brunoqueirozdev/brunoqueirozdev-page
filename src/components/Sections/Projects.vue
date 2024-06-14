<template>
    <h2 class="text-lg font-bold uppercase">{{ translateText('Projects') }}</h2>

    <div v-for="project in $aboutme('projects')" :key="project.id" class="mt-4">
        <img class="hover:opacity-70" :src="project.image">
        <h3 class="font-bold text-center">{{ translateText(project.title) }}</h3>
        <small class="my-4 text-justify">{{ translateText(project.description) }}</small>
    </div>
</template>

<script>
import { translationMixin } from '@/mixins/translationMixin';

export default {
    mixins: [translationMixin]
}
</script>
