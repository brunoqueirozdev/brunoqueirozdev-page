<template>
    <header :class="{ 'dark-mode': $darkmode.isDarkmode }" class="p-4">
        <div class="flex justify-between">
            <div class="flex">
                <Language />
            </div>
            
            <div class="flex">
                <DarkMode />
            </div>
        </div>
    </header>
</template>

<script>
import Language from '../Systems/Language.vue'
import DarkMode from '../Systems/DarkMode.vue'

export default {
    components: {
        Language,
        DarkMode
    }
}
</script>