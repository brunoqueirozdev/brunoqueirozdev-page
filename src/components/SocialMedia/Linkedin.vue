<template>
    <a :href="$aboutme('linkedin')" @click="track">
        <i class="fa-brands fa-linkedin" />
    </a>
</template>

<script>
export default {
    methods: {
        track() {
            this.$gtag.event('click_linkedin', {
                'event_label': 'Linkedin click',
                'value': new Date()
            })
        }
    }
}
</script>