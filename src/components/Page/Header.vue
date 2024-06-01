<template>
    <div>
        <Language />
        <DarkMode />
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