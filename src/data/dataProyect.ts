// Información general de la página
export const pageTitle = "Proyectos de desarrollo";
export const pageBlog = "Blog Dev";
export const descPage = "Explora algunos de los proyectos que he desarrollado como parte de cursos, estudios universitarios y trabajo personal.";

// Proyecto 1 
const titlePost_1 = "Tienda online básica";
const textPost_1 = "Proyecto desarrollado como parte de un curso, donde se construyó una tienda online tipo catálogo utilizando solo HTML y CSS.";

// Proyecto 2 
const titlePost_2 = "Blog de cafetería";
const textPost_2 = "Proyecto realizado durante un curso. Es un blog diseñado para una cafetería, con el objetivo de atraer clientes compartiendo contenido educativo sobre el mundo del café.";

// Proyecto 3
const titlePost_3 = "Reproductor de musica";
const textPost_3 = "Aplicacion de terminal desarrollada en c++ que permite reproduir musica desde un Ui de terminal. el proyecto utiliza la libreria sfml para la reproduccion de audio y se utilizo una lista circular doblemente enlazada para el manejo de las canciones.";

// Proyecto 4 
const titlePost_4 = "Sistema bibliotecario en C++";
const textPost_4 = "Sistema básico hecho en C++ como parte de una tarea universitaria para la clase de Programación Orientada a Objetos (POO). Posteriormente, lo continué como proyecto personal.";

// Proyecto 5 
const titlePost_5 = "Algoritmos de grafos en Python";
const textPost_5 = "Proyecto universitario donde implementé algoritmos de búsqueda y grafos para encontrar rutas óptimas en una ciudad. Incluye interfaz en Tkinter y arquitectura MVC.";

// Proyecto 6
const titlePost_6 = "API de login y registro";
const textPost_6 = "API básica en desarrollo para autenticación de usuarios, conectada a una base de datos PostgreSQL mediante Supabase. Aún no cuenta con hosting público.";

//proyecto 7
const titlePost_7 = "Campus Cucei"
const textpost_7 = "Proyecto universitario el proyecto es una app movil desarrollada en React Native la app permite ver un mapa interactivo de campus y consultar informacion del estudiante"

// Array de secciones
export const secciones = [
  {
    title: titlePost_1,
    text: textPost_1,
    links: [
      { label: "Tienda online", url: "https://front-store-ropa.netlify.app/" },
      { label: "Repositorio proyecto", url: "https://github.com/jankarlito689/web-shop" }
    ]
  },
  {
    title: titlePost_2,
    text: textPost_2,
    links: [
      { label: "Blog de café", url: "https://blog-cafe-y-derivados.netlify.app/" },
      { label: "Repositorio proyecto", url: "https://github.com/jankarlito689/blog-cafe" }
    ]
  },
  {
    title: titlePost_3,
    text: textPost_3,
    links: [
      { label: "Repositorio proyecto", url: "https://github.com/jankarlito689/PlayerMusic" }
    ]
  },
  {
    title: titlePost_4,
    text: textPost_4,
    links: [
      { label: "Sistema bibliotecario (Repositorio)", url: "https://github.com/jankarlito689/sistema-de-bibloteca" }
    ]
  },
  {
    title: titlePost_5,
    text: textPost_5,
    links: [
      { label: "Grafos de búsqueda", url: "https://github.com/jankarlito689/Python_Graph" }
    ]
  },
  {
    title: titlePost_6,
    text: textPost_6,
    links: [
      { label: "API para hacer login y register", url: "https://github.com/jankarlito689/Api_basic_login" }
    ]
  },
  {
    title: titlePost_7,
    text: textpost_7,
    links: [
      { label: "Campus Cucei (Repositorio)", url: "https://github.com/jankarlito689/Campus_Cucei" }
    ]
  }
];
