import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
    const currentLang = ref('br')

    function updateLanguage(newLang) {
        if (newLang === currentLang.value) {
            return
        }

        currentLang.value = newLang
    }

    function getCurrentLanguage() {
        return currentLang.value
    }

    return { updateLanguage, getCurrentLanguage }
})
