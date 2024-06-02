<template>
    <div class="flex justify-around text-[2rem] my-4 items-center">
        <div class="flex hover:opacity-70 cursor-pointer">
            <Whatsapp />
        </div>

        <div class="flex hover:opacity-70 cursor-pointer">
            <Email />
        </div>

        <div class="flex hover:opacity-70 cursor-pointer">
            <Github />
        </div>

        <div class="flex hover:opacity-70 cursor-pointer">
            <Linkedin />
        </div>
    </div>
</template>

<script>
import Whatsapp from '../SocialMedia/Whatsapp.vue'
import Email from '../SocialMedia/Email.vue'
import Github from '../SocialMedia/Github.vue'
import Linkedin from '../SocialMedia/Linkedin.vue'

export default {
    components: {
        Whatsapp,
        Email,
        Github,
        Linkedin
    }
}
</script>