import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDarkmodeStore = defineStore('darkmode', () => {
    const isDarkmode = ref(getDefaultValue());

    function applyDarkModeClass() {
        if (isDarkmode.value) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    function toggleDarkMode() {
        isDarkmode.value = !isDarkmode.value;
        applyDarkModeClass();
    }

    function getDefaultValue() {
        const date = new Date();
        const hour = date.getHours();
        return hour < 7 || hour > 18;
    }

    applyDarkModeClass();

    return { isDarkmode, toggleDarkMode };
});
