<template>
    <h2 class="text-lg font-bold uppercase">{{ translateText('About') }}</h2>

    <p class="my-4 text-justify">{{ translateText('about1') }}</p>
    <p class="my-4 text-justify">{{ translateText('about2') }}</p>
    <p class="my-4 text-justify">{{ translateText('about3') }}</p>
    <p class="my-4 text-justify">{{ translateText('about4') }}</p>
    <p class="my-4 text-justify">{{ translateText('about5') }}</p>
    <p class="my-4 text-justify">{{ translateText('about6') }}</p>
</template>

<script>
import { translationMixin } from '@/mixins/translationMixin';

export default {
    mixins: [translationMixin],
    data() {
        return {
            translationKeys: {
                about1: this.$aboutme('aboutme1'),
                about2: this.$aboutme('aboutme2'),
                about3: this.$aboutme('aboutme3'),
                about4: this.$aboutme('aboutme4'),
                about5: this.$aboutme('aboutme5'),
                about6: this.$aboutme('aboutme6'),
            }
        };
    }
}
</script>
