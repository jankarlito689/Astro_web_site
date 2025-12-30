//src/data/proyectos/Proyects.ts
import type { ProjectSection } from "./types";

// Información general de la página proyectos 
export const pageTitle = "Proyectos de desarrollo";
export const pageBlog = "Blog Dev";
export const descPage = "Explora algunos de los proyectos que he desarrollado como parte de cursos, estudios universitarios y trabajo personal.";

export const projects: ProjectSection[] = [
  {
    slug: "catalogo-online",
    title: "Catálogo Online",
    summary: "Proyecto desarrollado como parte de un curso, donde se construyó una tienda online tipo catálogo utilizando solo HTML y CSS.",
    links:[
      { label: "Tienda online", url: "https://front-store-ropa.netlify.app/" },
      { label: "Repositorio proyecto", url: "https://github.com/jankarlito689/web-shop" },
    ],
  },
  {
    slug: "blog-cafeteria",
    title: "Blog de cafetería",
    summary: "Proyecto realizado durante un curso. Es un blog diseñado para una cafetería, con el objetivo de atraer clientes compartiendo contenido educativo sobre el mundo del café.",
    links:[
      { label: "Blog de café", url: "https://blog-cafe-y-derivados.netlify.app/" },
      { label: "Repositorio proyecto", url: "https://github.com/jankarlito689/blog-cafe" },
    ],
  },
  {
    slug: "reproductor-musica-cpp",
    title: "Reproductor de música en C++",
    summary: "Aplicacion de terminal desarrollada en c++ que permite reproduir musica desde un Ui de terminal. el proyecto utiliza la libreria sfml para la reproduccion de audio y se utilizo una lista circular doblemente enlazada para el manejo de las canciones.",
    links:[
      { label: "Repositorio proyecto", url: "https://github.com/jankarlito689/PlayerMusic" },
    ],
  },
  {
    slug: "sistema-bibliotecario-cpp",
    title: "Sistema bibliotecario en C++",
    summary: "Sistema básico hecho en C++ como parte de una tarea universitaria para la clase de Programación Orientada a Objetos (POO). Posteriormente, lo continué como proyecto personal.",
    links:[
      { label: "Sistema bibliotecario (Repositorio)", url: "https://github.com/jankarlito689/sistema-de-bibloteca" },
    ],
  },
  {
    slug: "algoritmos-grafos-python",
    title: "Algoritmos de grafos en Python",
    summary: "Proyecto universitario donde implementé algoritmos de búsqueda y grafos para encontrar rutas óptimas en una ciudad. Incluye interfaz en Tkinter y arquitectura MVC.",
    links:[
      { label: "Grafos de búsqueda", url: "https://github.com/jankarlito689/Python_Graph" },
    ],
  },
  {
    slug: "api-login-registro",
    title: "API de login y registro",
    summary: "API básica en desarrollo para autenticación de usuarios, conectada a una base de datos PostgreSQL mediante Supabase. Aún no cuenta con hosting público.",
    links:[
      { label: "API para hacer login y register", url: "https://github.com/jankarlito689/Api_basic_login" },
    ],
  },
  {
    slug: "campus-cucei",
    title: "Campus CUCEI",
    summary: "Proyecto universitario el proyecto es una app movil desarrollada en React Native la app permite ver un mapa interactivo de campus y consultar informacion del estudiante",
    links:[
      { label: "Campus Cucei (Repositorio)", url: "https://github.com/jankarlito689/Campus_Cucei" },
    ],
  },
];