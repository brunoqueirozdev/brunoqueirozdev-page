<template>
    <div class="h-full">
        <Header />

        <main class="flex justify-center items-center flex-col h-screen">
            <section>
                <Presentation />
            </section>

            <section class="sm:w-full md:w-[20%] ">
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