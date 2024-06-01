<template>
    <h1>{{ $aboutme('name') }}</h1>
    <h2>{{ translateText('developerDescription') }}</h2>
    <q>{{ translateText('developerCatchphrase') }}</q>
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
