import slugify from "slugify";

const options = {
    replacement: '-',  // Substitui os caracteres não permitidos por '-'
    remove: /[\/\+\(\)\[\]\{\}<>!@#$%^&*=_|:]/g,
    lower: true,       // Converte para minúsculas
};

export const courses = [
    {
        id: slugify("Quasar 2 framework: construindo um mini ERP online com API", options),
        title: "Quasar 2 framework: construindo um mini ERP online com API",
        description: "Quasar Framework é um framework de código aberto baseado em Vue.js para construir aplicativos com uma única code base",
        image: "/images/cursos/quasar2-framework-construindo-mini-erp-online-com-api.png",
        link: "https://www.udemy.com/course/desenvolvimento-web-construindo-aplicacao-de-maneira-rapida/?couponCode=4CE0B5C7F0-JUNHO2025",
        label: "Curso Quasar",
    },
    {
        id: slugify("Go para iniciantes: Uma introdução a linguagem do Google", options),
        title: "Go para iniciantes: Uma introdução a linguagem do Google",
        description: "Fundamentos teóricos, desafios práticos e SUPORTE garantido para uma aprendizagem completa.",
        image: "/images/cursos/go-para-iniciantes-uma-introducao-a-linguagem-do-google.webp",
        link: "https://www.udemy.com/course/aprenda-go-aka-golang-a-linguagem-do-google/?couponCode=68EFE4DB2-JUNHO2025",
        label: "Curso Go Iniciante",
    },
    {
        id: slugify("Curso Flutter completo/Atualizado 2025 Android/iOS/Windows", options),
        title: "Curso Flutter completo/Atualizado 2025 Android/iOS/Windows",
        description: "Curso completo de Flutter e Dart - Aprenda desde o básico até aplicativos práticos para Android, iOS, Windows e Mac.",
        image: "/images/cursos/curso-flutter-completo-atualizado-2024-android-ios-windows.webp",
        link: "https://www.udemy.com/course/curso-de-flutter-e-dart-completo-atualizado/?couponCode=D967E5893-JUNHO2025",
        label: "Curso Flutter Completo",
    },
    {
        id: slugify("Laravel 12 e Flutter 3 aplicações com comunicação real-time 2025 - Impressor", options),
        title: "Laravel 12 e Flutter 3 aplicações com comunicação real-time 2025 - Impressor",
        description: "Domine Flutter e Laravel com foco em comunicação em tempo real, criando aplicações modernas e integradas para múltiplas plataformas.",
        image: "/images/cursos/laravel-11-e-flutter-3-aplicacoes-realtime-2024-impressor.webp",
        link: "https://www.udemy.com/course/laravel-11-flutter-3-aplicacoes-tempo-real-impressor-delivery-desktop/?couponCode=B9A585D3B-JUNHO2025",
        label: "Curso Flutter e Laravel - RealTime",
    },
    {
        id: slugify("Projeto Delivery Hortifruti c/ Flutter 3 + AdonisJS 5 NodeJS", options),
        title: "Projeto Delivery Hortifruti c/ Flutter 3 + AdonisJS 5 NodeJS",
        description: "Aprenda a criar um aplicativo de delivery de hortifruti com Flutter 3 e um backend com AdonisJS 5.",
        image: "/images/cursos/projeto-delivery-hortifruti-com-flutter-3-adonisjs-5-nodejs.webp",
        link: "https://www.udemy.com/course/curso-flutter-3-e-getx-api-adonisjs-projeto-hortifruti/?couponCode=A36C0F1D98-JUNHO2025",
        label: "Curso Flutter e AdonisJS",
    },
];