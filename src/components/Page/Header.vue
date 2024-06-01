<template>
    <div class="flex justify-between">
        <div class="flex border border-black">
            <Language />
        </div>

        <div class="flex border border-black">
            <DarkMode />
        </div>
    </div>
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