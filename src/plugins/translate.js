import { useLanguageStore } from '@/stores/language';

export function translate(key) {
    const languageStore = useLanguageStore();
    const currentLanguage = languageStore.getCurrentLanguage();

    if (translations[key] && translations[key][currentLanguage]) {
        return translations[key][currentLanguage];
    } else {
        return key;
    }
}

const translations = {
    "Junior backend developer": {
        "br": "Desenvolvedor backend junior"
    },
    "I build projects that not only adapt to the present, but also prepare for a prosperous future, prioritizing expandability, maintainability and scalability": {
        "br": "Construo projetos que não apenas se adaptam ao presente, mas também se preparam para um futuro próspero, priorizando expansibilidade, manutenibilidade e escalabilidade"
    },
    "Paraná, Brazil": {
        "br": "Paraná, Brasil"
    }
};