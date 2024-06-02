<template>
    <select id="language" @change="updateLanguage" class="bg-gray-200 rounded-md p-2"
        :class="{ 'dark-mode': $darkmode.isDarkmode }">
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