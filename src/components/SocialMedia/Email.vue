<template>
    <a :href="$aboutme('email')" @click="track">
        <i class="fa-solid fa-at" />
    </a>
</template>

<script>
export default {
    methods: {
        track() {
            this.$gtag.event('email_whatsapp', {
                'event_label': 'Email click',
                'value': new Date()
            })
        }
    }
}
</script>