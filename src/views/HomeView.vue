<template>
    <Header />

    <div class="m-4">
        <main class="mt-10">
            <section>
                <Presentation />
            </section>

            <section class="mb-10">
                <SocialMedia />
            </section>

            <section>
                <About />
            </section>

            <section>
                <Projects />
            </section>
        </main>
    </div>

    <Footer class="mt-10" />
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