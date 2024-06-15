<template>
    <a :href="$aboutme('whatsapp')">
        <i class="fa-brands fa-whatsapp" />
    </a>
</template>

<script>
export default {
    methods: {
        track() {
            this.$gtag.event('click_whatsapp', {
                'event_label': 'Whatsapp click'
            })
        }
    }
}
</script>