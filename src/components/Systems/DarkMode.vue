<template>
    <div class="flex justify-between items-center" @click="$darkmode.toggleDarkMode()">
        <div class="w-16 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
            :class="{ 'bg-[#475163]': $darkmode.isDarkmode }">
            <div class="bg-white w-8 h-3 rounded-full shadow-md transform duration-300 ease-in-out"
                :class="{ 'translate-x-6 bg-gray-900': $darkmode.isDarkmode }"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
