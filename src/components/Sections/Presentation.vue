<template>
    <h1 class="text-[2.4rem] uppercase font-bold">{{ $aboutme('name') }}</h1>
    <h2 class="font-bold uppercase mb-10 text-center">{{ translateText('developerTitle') }}</h2>
</template>

<script>
import { translationMixin } from '@/mixins/translationMixin';

export default {
    mixins: [translationMixin],
    data() {
        return {
            translationKeys: {
                developerTitle: this.$aboutme('title'),
                developerCatchphrase: this.$aboutme('catchphrase')
            }
        };
    }
}
</script>
