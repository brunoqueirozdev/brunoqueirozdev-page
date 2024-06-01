<template>
    <Header />

    <main>
        <section>
            <SocialMedia />
        </section>

        <section>
            <About />
        </section>

        <section>
            <Projects />
        </section>
    </main>

    <Footer />
</template>

<script>
import Header from '@/components/Page/Header.vue'
import Footer from '@/components/Page/Footer.vue'

import About from '@/components/Sections/About.vue'
import Projects from '@/components/Sections/Projects.vue'
import SocialMedia from '@/components/Sections/SocialMedia.vue'

export default {
    components: {
        Header,
        Footer,
        About,
        Projects,
        SocialMedia
    }
}
</script>