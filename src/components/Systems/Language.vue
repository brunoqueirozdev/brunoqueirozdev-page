<template>
    <select id="language" @change="updateLanguage">
        <option value="br" :selected="current === 'br'">Português</option>
        <option value="en" :selected="current === 'en'">English</option>
    </select>
</template>

<script>
import { useLanguageStore } from '@/stores/language';

export default {
    computed: {
        current() {
            const languageStore = useLanguageStore();
            return languageStore.getCurrentLanguage();
        }
    },
    methods: {
        updateLanguage(event) {
            const languageStore = useLanguageStore();
            languageStore.updateLanguage(event.target.value);
        }
    }
}
</script>
