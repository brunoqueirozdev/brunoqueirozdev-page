<template>
    <div class="h-full text-[1.7rem]">
        <i class="fa-solid fa-moon" v-if="!$darkmode.isDarkmode" @click="$darkmode.toggleDarkMode()"></i>
        <i class="fa-solid fa-sun" v-else @click="$darkmode.toggleDarkMode()"></i>
    </div>
</template>

<script>
export default {};
</script>
