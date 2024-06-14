<template>
    <footer :class="{ 'dark-mode': $darkmode.isDarkmode }" class="p-4">
        <p class="text-center" >{{ translateText('© %year% %name%. All rights reserved.', { year: new Date().getFullYear(), name: $aboutme('name') }) }}</p>
    </footer>
</template>

<script>
import { translationMixin } from '@/mixins/translationMixin';

export default {
    mixins: [translationMixin]
}
</script>