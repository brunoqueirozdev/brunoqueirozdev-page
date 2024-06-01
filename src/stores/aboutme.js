import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAboutMeStore = defineStore('aboutme', () => {
    const currentData = ref({
        name: 'Bruno Queiróz',
        title: 'Web backend developer',
        catchphrase: 'I build projects that not only adapt to the present, but also prepare for a prosperous future, prioritizing expandability, maintainability and scalability',
        location: 'Paraná, Brazil',
        age: getAge(),
        whatsapp: 'https://wa.me/5543988488170',
        github: 'https://github.com/brunoqueirozdev',
        linkedin: 'https://www.linkedin.com/in/brunoqueirozdev/',
        email: 'mailto:bruno.queirozrq@gmail.com'
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
