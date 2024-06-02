<template>

    <div class="h-screen">
        <Header />

        <main class="h-[91%] flex justify-center items-center flex-col">
            <section>
                <Presentation />
            </section>

            <section class="w-full">
                <SocialMedia />
            </section>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Page/Header.vue'
import Footer from '@/components/Page/Footer.vue'

import Presentation from '@/components/Sections/Presentation.vue'
import About from '@/components/Sections/About.vue'
import Projects from '@/components/Sections/Projects.vue'
import SocialMedia from '@/components/Sections/SocialMedia.vue'

export default {
    components: {
        Header,
        Footer,
        About,
        Presentation,
        Projects,
        SocialMedia
    }
}
</script>