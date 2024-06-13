<template>
    <header :class="{ 'dark-mode': $darkmode.isDarkmode }">
        <Menu />
    </header>
</template>

<script>
import Language from '../Systems/Language.vue'
import DarkMode from '../Systems/DarkMode.vue'
import Menu from '../Page/Menu.vue'

export default {
    components: {
        Language,
        DarkMode,
        Menu
    }
}
</script>