<template>
    <div class="h-full text-[1.7rem]">
        <i class="fa-solid fa-moon" v-if="!$darkmode.isDarkmode" @click="toggleDarkMode"></i>
        <i class="fa-solid fa-sun" v-else @click="toggleDarkMode"></i>
    </div>
</template>

<script>
export default {
    methods: {
        toggleDarkMode() {
            this.$darkmode.toggleDarkMode();
            this.$gtag.event('click_darkmode', {
                'event_label': 'Darkmode click',
                'value': new Date()
            })
        },
    }
};
</script>
