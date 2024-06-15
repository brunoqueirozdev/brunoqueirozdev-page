<template>
    <a :href="$aboutme('github')" @click="track">
        <i class="fa-brands fa-github" />
    </a>
</template>

<script>
export default {
    methods: {
        track() {
            this.$gtag.event('click_github', {
                'event_label': 'Github click',
                'value': new Date()
            })
        }
    }
}
</script>