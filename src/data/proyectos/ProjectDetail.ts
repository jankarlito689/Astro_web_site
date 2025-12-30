//Información de cada proyecto src/data/proyectos/ProjectDetail.ts
import type { ProjectDetail } from "./types";

export const proyectDetails: ProjectDetail[] = [
    {
        slug: "catalogo-online",
        title: "Catálogo Online",
        description: "Proyecto desarrollado como parte de un curso de programación web. Consiste en una tienda online tipo catálogo donde se muestran productos con imágenes, descripciones y diseño visual atractivo.",
        objective: "Reforzar los fundamentos de HTML y CSS, así como aprender a estructurar un sitio web y aplicar estilos responsivos.",
        technologies: ["HTML", "CSS"]
    },
    {
        slug: "blog-cafeteria",
        title: "Blog de cafetería",
        description: "Blog diseñado para una cafetería con el objetivo de compartir contenido educativo sobre el mundo del café y atraer clientes mediante una experiencia visual cuidada.",
        objective: "Aprender maquetación avanzada con CSS y mejorar la organización del contenido web.",
        technologies: ["HTML", "CSS", "GitHub"]
    },
    {
        slug: "reproductor-musica-cpp",
        title: "Reproductor de música en C++",
        description: "Aplicación de terminal desarrollada en C++ que permite reproducir música desde una interfaz en consola.",
        objective: "Integrar estructuras de datos con librerías externas para crear una aplicación funcional.",
        technologies: ["HTML", "CSS", "GitHub"],
        learnings:[
            "Listas doblemente enlazadas",
            "Uso de la librería SFML",
            "Manejo de archivos y rutas",
            "Diseño de interfaces en consola"
        ],
    },
    {
        slug: "sistema-bibliotecario-cpp",
        title: "Sistema bibliotecario en C++",
        description: "Aplicación de terminal desarrollada en C++ que permite reproducir música desde una interfaz en consola.",
        objective: "Integrar estructuras de datos con librerías externas para crear una aplicación funcional.",
        technologies: ["HTML", "CSS", "GitHub"],
        learnings:[
            "Listas doblemente enlazadas",
            "Uso de la librería SFML",
            "Manejo de archivos y rutas",
            "Diseño de interfaces en consola"
        ],
    },
    {
        slug: "algoritmos-grafos-python",
        title: "Algoritmos de grafos en Python",
        description:
            "Proyecto universitario donde se implementan algoritmos de búsqueda y grafos para encontrar rutas óptimas dentro de una ciudad.",
        objective:
            "Comprender el funcionamiento de los grafos y su aplicación en problemas reales.",
        technologies: ["Python", "Tkinter"],
        learnings: [
            "Algoritmos de grafos",
            "Arquitectura MVC",
            "Interfaces gráficas con Tkinter"
        ],
    },
    {
        slug: "api-login-registro",
        title: "API de login y registro",
        description:
            "API REST en desarrollo para autenticación de usuarios, conectada a una base de datos PostgreSQL mediante Supabase.",
        objective:
            "Aprender a construir APIs seguras y modulares.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Supabase"]
    },
    {
        slug: "campus-cucei",
        title: "Campus CUCEI",
        description:
            "Aplicación móvil desarrollada en React Native que permite a los estudiantes consultar información académica y visualizar un mapa interactivo del campus.",
        objective:
            "Desarrollar una aplicación móvil funcional enfocada en la experiencia del estudiante.",
        technologies: ["React Native"],
        learnings: [
            "Desarrollo móvil",
            "Navegación",
            "Diseño de interfaces",
            "Manejo de estado"
        ],
    },
];
