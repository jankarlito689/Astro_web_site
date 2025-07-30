//información de la página
export const pageNameTitle = "Hola, soy César Leos";
export const pageBlog = "Blog Dev";
export const descPage = "Estudiante de Ingeniería en Computación desde Guadalajara, México. Me apasiona la programación (especialmente C++), el software libre, la inteligencia artificial y los temas académicos como la literatura y la historia. Este es mi espacio personal donde comparto lo que aprendo.";

//Blog section
const titleBlog = "Blog";
const textBlog = "Comparto artículos sobre desarrollo, errores comunes que he resuelto, tutoriales con Supabase, Express y herramientas que uso en mis proyectos personales.";

//Proyect section
const titleProyect = "Proyectos";
const textProyect = "	Aquí muestro algunos proyectos personales en los que he trabajado: APIs, herramientas con enfoque en privacidad, bots y más.";

//Contact section
export const titleContact = "Contacto";
export const textContact = "¿Quieres contactarme? Puedes escribirme por correo o seguirme en GitHub.";

//Arry the sections
export const secciones = [
{
    title: titleBlog,
    text: textBlog,
    links: [
        {label: "Leer publicaciones", url:"/blog"}
    ]
},
{
    title: titleProyect,
    text: textProyect,
    links: [
        {label: "Ver proyectos", url:"/proyectos"}
    ]
}
];