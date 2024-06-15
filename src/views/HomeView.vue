<template>
    <div class="h-full">
      <Header class="xl:hidden md:hidden" />
  
      <main class="full-height">
        <div
          class="flex justify-center items-center flex-col h-screen section section1"
          ref="section1"
        >
          <section>
            <Presentation />
          </section>
  
          <section class="sm:w-full md:w-[20%]">
            <SocialMedia />
          </section>
        </div>
  
        <div
          class="flex justify-center items-center flex-col h-screen section section2"
          ref="section2"
        >
          <section>
            <Presentation />
          </section>
  
          <section class="sm:w-full md:w-[20%]">
            <SocialMedia />
          </section>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Page/Header.vue";
  import Footer from "@/components/Page/Footer.vue";
  
  import Presentation from "@/components/Sections/Presentation.vue";
  import SocialMedia from "@/components/Sections/SocialMedia.vue";
  
  export default {
    components: {
      Header,
      Footer,
      Presentation,
      SocialMedia,
    },
    data() {
      return {
        section1Top: 0,
        section2Top: 0,
      };
    },
    mounted() {
      this.$gtag.pageview({ page_path: "/home", page_title: "Homepage" });
  
      setTimeout(() => {
        window.addEventListener("scroll", this.handleScroll);
      }, 100);
      
      window.addEventListener("keydown", this.handleKeyDown);
  
      this.$nextTick(() => {
        this.section1Top = this.$refs.section1.offsetTop;
        this.section2Top = this.$refs.section2.offsetTop;
      });
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition < this.section2Top - 1) {
          this.setActiveSection("section1");
        } else {
          this.setActiveSection("section2");
        }
      },
      handleKeyDown(event) {
        switch (event.key) {
          case "ArrowUp":
            this.scrollUp();
            break;
          case "ArrowDown":
            this.scrollDown();
            break;
        }
      },
      scrollUp() {
        if (this.getActiveSection() === "section2") {
          this.$refs.section1.scrollIntoView({ behavior: "smooth" });
          this.setActiveSection("section1");
        }
      },
      scrollDown() {
        if (this.getActiveSection() === "section1") {
          this.$refs.section2.scrollIntoView({ behavior: "smooth" });
          this.setActiveSection("section2");
        }
      },
      setActiveSection(sectionId) {
        const sections = ["section1", "section2"];
        sections.forEach((section) => {
          const el = this.$refs[section];
          if (el) {
            if (section === sectionId) {
              el.classList.add("active");
            } else {
              el.classList.remove("active");
            }
          }
        });
      },
      getActiveSection() {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition < this.section2Top - 1) {
          return "section1";
        } else {
          return "section2";
        }
      },
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("keydown", this.handleKeyDown);
    },
  };
  </script>
  
  <style scoped>
  .app {
    position: relative;
    overflow-x: hidden;
  }
  
  .full-height {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  
  .full-height::-webkit-scrollbar {
    width: 6px;
  }
  
  .full-height::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }
  
  .full-height::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
  
  .section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    position: relative;
    overflow: hidden;
  }
  
  .section2 {
   background-color: orange;
  }

  .section:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    z-index: -1;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.8) 100%);
    transform: translateY(-50%);
  }
  </style>
  