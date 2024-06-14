import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAboutMeStore = defineStore('aboutme', () => {
    const currentData = ref({
        name: 'Bruno Queiróz',
        title: 'Web developer',
        aboutme1: "From a young age, I have always had a passion for managing projects. At 16, I loved creating game servers, especially Metin2. Although he had direct contact with the game's codes, he still didn't know how to program. At the beginning of 2021, a friend called Marcos, who already worked in the web programming area, told me about some web development trainee vacancies at the company where he worked. At the time, I was still working at an electrical supply store, but I accepted the offer immediately.",
        aboutme2: 'With few resources, I started studying whenever I had free time, using my cell phone and any material I could find. My determination and passion for learning were essential during this period. After a few months of intense dedication, I applied for the position and was accepted. Although I had no prior experience, the company trained me and helped me grow professionally.',
        aboutme3: 'During the training, I dove head first into the world of web development, learning HTML, CSS, JavaScript and several other technologies. Each challenge overcome increased my confidence and skills. I worked on several projects, from small applications to more complex systems, always seeking excellence and continuous improvement.',
        aboutme4: "I am extremely grateful to Marcos for this opportunity. He awakened in me a passion for programming that I had never felt before. Today, I'm part of the product team at a large company in southern Brazil, where I contribute to the development of innovative and impactful solutions.",
        aboutme5: 'My journey is proof that, with dedication and support, it is possible to change careers and reach new heights. I continue to improve and learn daily, always looking for new challenges and opportunities to grow.',
        aboutme6: 'Marcos, if you are reading this, I owe everything to you. Thank you very much for believing in me and guiding me on this path. My passion for programming and my gratitude for you are eternal.',
        catchphrase: 'I build projects that not only adapt to the present, but also prepare for a prosperous future, prioritizing expandability, maintainability and scalability',
        location: 'Paraná, Brazil',
        age: getAge(),
        whatsapp: 'https://wa.me/5543988488170',
        github: 'https://github.com/brunoqueirozdev',
        linkedin: 'https://www.linkedin.com/in/brunoqueirozdev/',
        email: 'mailto:bruno.queirozrq@gmail.com',
        projects: [
            {
                id: 1,
                image: 'https://fakeimg.pl/600x400?text=Placeholder',
                title: 'My Portfolio',
                description: 'This is my portfolio. I developed it using Vite, Vue, Pinia, Tailwind and Tailwindcss. The source code is available on GitHub.',
            }
        ]
    })

    function getCurrentData() {
        return currentData.value
    }

    function getAge() {
        const dateOfBirth = '1996-12-27';
        const today = new Date();
        const birthday = new Date(dateOfBirth);
        let age = today.getFullYear() - birthday.getFullYear();
        const currentMonth = today.getMonth();
        const birthMonth = birthday.getMonth();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && today.getDate() < birthday.getDate())) {
            age--;
        }

        return age;
    }

    return { getCurrentData }
})
