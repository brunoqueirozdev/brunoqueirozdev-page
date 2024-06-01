<template>
    <div>
        <Whatsapp />
        <Email />
        <Github />
        <Linkedin />
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