<template>
    <img src="@/assets/bruno.jpg" class="rounded-[50%] h-44 mx-auto" alt="">
    <h1 class="text-[2.4rem] uppercase font-bold">{{ $aboutme('name') }}</h1>
    <h2 class="font-bold uppercase mb-10">{{ translateText('developerTitle') }}</h2>
    <h3 class="text-justify mb-10">{{ translateText('developerCatchphrase') }}</h3>
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
