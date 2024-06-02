export function translate(key, currentLanguage, dynamicData = {}) {
    if (translations[key] && translations[key][currentLanguage]) {
        let translatedText = translations[key][currentLanguage];

        for (const [placeholder, value] of Object.entries(dynamicData)) {
            const regex = new RegExp(`%${placeholder}%`, 'g');
            translatedText = translatedText.replace(regex, value);
        }

        return translatedText;
    } else {
        return key;
    }
}

const translations = {
    "Web developer": {
        "br": "Desenvolvedor web",
        "en": "Web developer"
    },
    "I build projects that not only adapt to the present, but also prepare for a prosperous future, prioritizing expandability, maintainability and scalability": {
        "br": "Construo projetos que não apenas se adaptam ao presente, mas também se preparam para um futuro próspero, priorizando expansibilidade, manutenibilidade e escalabilidade",
        "en": "I build projects that not only adapt to the present, but also prepare for a prosperous future, prioritizing expandability, maintainability and scalability"
    },
    "Paraná, Brazil": {
        "br": "Paraná, Brasil",
        "en": "Paraná, Brazil"
    },
    "About": {
        "br": "Sobre",
        "en": "About"
    },
    "Projects": {
        "br": "Projetos",
        "en": "Projects"
    },
    "© %year% %name%. All rights reserved.": {
        "br": "© %year% %name%. Todos os direitos reservados.",
        "en": "© %year% %name%. All rights reserved."
    },
    "From a young age, I have always had a passion for managing projects. At 16, I loved creating game servers, especially Metin2. Although he had direct contact with the game's codes, he still didn't know how to program. At the beginning of 2021, a friend called Marcos, who already worked in the web programming area, told me about some web development trainee vacancies at the company where he worked. At the time, I was still working at an electrical supply store, but I accepted the offer immediately.": {
        "br": "Desde muito jovem, sempre tive uma paixão por gerenciar projetos. Aos 16 anos, adorava criar servidores de jogos, especialmente de Metin2. Embora tivesse contato direto com os códigos do jogo, ainda não sabia programar. No início de 2021, um amigo chamado Marcos, que já trabalhava na área de programação web, me contou sobre algumas vagas de trainee em desenvolvimento web na empresa onde ele trabalhava. Na época, eu ainda trabalhava em uma loja de materiais elétricos, mas aceitei a oferta imediatamente.",
        "en": "From a young age, I have always had a passion for managing projects. At 16, I loved creating game servers, especially Metin2. Although he had direct contact with the game's codes, he still didn't know how to program. At the beginning of 2021, a friend called Marcos, who already worked in the web programming area, told me about some web development trainee vacancies at the company where he worked. At the time, I was still working at an electrical supply store, but I accepted the offer immediately."
    },
    "With few resources, I started studying whenever I had free time, using my cell phone and any material I could find. My determination and passion for learning were essential during this period. After a few months of intense dedication, I applied for the position and was accepted. Although I had no prior experience, the company trained me and helped me grow professionally.": {
        "br": "Com alguns recursos, comecei a estudar sempre que tinha um tempo livre, utilizando meu celular e qualquer material que pudesse encontrar. Minha determinação e paixão pelo aprendizado foram essenciais nesse período. Após alguns meses de dedicação intensa, me candidatei à vaga e fui aceito. Embora não tivesse nenhuma experiência prévia, a empresa me treinou e me ajudou a crescer profissionalmente.",
        "en": "With few resources, I started studying whenever I had free time, using my cell phone and any material I could find. My determination and passion for learning were essential during this period. After a few months of intense dedication, I applied for the position and was accepted. Although I had no prior experience, the company trained me and helped me grow professionally."
    },
    "During the training, I dove head first into the world of web development, learning HTML, CSS, JavaScript and several other technologies. Each challenge overcome increased my confidence and skills. I worked on several projects, from small applications to more complex systems, always seeking excellence and continuous improvement.": {
        "br": "Durante o treinamento, mergulhei de cabeça no mundo do desenvolvimento web, aprendendo HTML, CSS, JavaScript e várias outras tecnologias. Cada desafio superado aumentava minha confiança e habilidades. Trabalhei em diversos projetos, desde pequenas aplicações até sistemas mais complexos, sempre buscando a excelência e a melhoria contínua.",
        "en": "During the training, I dove head first into the world of web development, learning HTML, CSS, JavaScript and several other technologies. Each challenge overcome increased my confidence and skills. I worked on several projects, from small applications to more complex systems, always seeking excellence and continuous improvement."
    },
    "I am extremely grateful to Marcos for this opportunity. He awakened in me a passion for programming that I had never felt before. Today, I'm part of the product team at a large company in southern Brazil, where I contribute to the development of innovative and impactful solutions.": {
        "br": "Sou extremamente grato ao Marcos por essa oportunidade. Ele despertou em mim uma paixão pela programação que eu nunca havia sentido antes. Hoje, faço parte da equipe de produto de uma grande empresa no sul do Brasil, onde contribuo para o desenvolvimento de soluções inovadoras e impactantes.",
        "en": "I am extremely grateful to Marcos for this opportunity. He awakened in me a passion for programming that I had never felt before. Today, I'm part of the product team at a large company in southern Brazil, where I contribute to the development of innovative and impactful solutions."
    },
    "My journey is proof that, with dedication and support, it is possible to change careers and reach new heights. I continue to improve and learn daily, always looking for new challenges and opportunities to grow.": {
        "br": "Minha jornada é uma prova de que, com dedicação e apoio, é possível mudar de carreira e alcançar novos patamares. Continuo me aperfeiçoando e aprendendo diariamente, sempre em busca de novos desafios e oportunidades para crescer.",
        "en": "My journey is proof that, with dedication and support, it is possible to change careers and reach new heights. I continue to improve and learn daily, always looking for new challenges and opportunities to grow."
    },
    "Marcos, if you are reading this, I owe everything to you. Thank you very much for believing in me and guiding me on this path. My passion for programming and my gratitude for you are eternal.": {
        "br": "Marcos, se você estiver lendo isto, devo tudo a você. Muito obrigado por acreditar em mim e me guiar neste caminho. Minha paixão pela programação e minha gratidão por você são eternas.",
        "en": "Marcos, if you are reading this, I owe everything to you. Thank you very much for believing in me and guiding me on this path. My passion for programming and my gratitude for you are eternal."
    },
    "My Portfolio": {
        "br": "Meu Portifólio",
        "en": "My Portfolio"
    },
    "This is my portfolio. I developed it using Vite, Vue, Pinia, Tailwind and Tailwindcss. The source code is available on GitHub.": {
        "br": "Este é o meu portfólio. Desenvolvi usando Vite, Vue, Pinia, Tailwind e Tailwindcss. O código-fonte está disponível no GitHub.",
        "en": "This is my portfolio. I developed it using Vite, Vue, Pinia, Tailwind and Tailwindcss. The source code is available on GitHub."
    }
};