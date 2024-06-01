import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkmodeStore = defineStore('darkmode', () => {
    const currentMode = ref('light')

    function setMode(mode) {
        currentMode.value = mode
    }

    function getMode() {
        return currentMode.value
    }

    return { setMode, getMode }
})
