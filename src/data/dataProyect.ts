//Informacion sobre page
export const pageTitle = "Proyectos dev";
export const pageBlog = "Blog Dev";
export const descPage = "Post sobre proyectos que hecho como desarrollador";

//informacion proyecto 1
const titlePost_1 = "Web shop onlien basica";
const textPost_1 = "proyecto personal de una tienda onlien tipo catalogo o menu hecho con html y css";

//informacio proyecto 2
const titlePost_2 = "Blog para una cafeteria";
const textPost_2 = "Es un proyecto personal, sobre un blog para una cafeteria donde la idea principal es dar a conocer su cafeteria por medio de un blog que le ayuda a dar a conocer el mundo del cafe y eso da pie a los curso por si te gustaria conocer aun mas el mundo del cafe.";


//informacio proyecto 3
const titlePost_3 = "Sitio web para llevar tus finazas";
const textPost_3 = "Es un proyecto personal de un sitio web para llevar mejor tus finazas, todavia se encuentra en faces de desarrollo, es un sito hecho en react y ts";

//informacio proyecto 4
const titlePost_4 = "Sistema biblotecario";
const textPost_4 = "este sistema esta hacho con puro c++, este proyecto nacio de una tarea para la universidad para la clase Poo, pero poco a poco se volvio persona";

//informacio proyecto 5
const titlePost_5 = "Grafos en python";
const textPost_5 = "Es un proyecto que hice para la universidad, en el cual utilizo algoritmos busque y grafos para encontra la ruta mas raída para recorrer la ciudad, adicionalmente agrege una UI hecha en tinker y utilize una arquitectura MVC";

//informacio proyecto 6
const titlePost_6 = "API para hacer login";
const textPost_6 = "Es un api basica para hacer login, se conecta a una base de datos postgrest, estoy utilizando como gestor de base de datos supabase, algunas partes todavia estan en desarrollo, ademas no tiene hosting";

//Arry the sections 
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
		{ label: "Repositorio proyecto", url: "https://github.com/jankarlito689/person_Finazas" }
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
		{ label: "Grafos de búsqueda", url: "/posts/post-2" }
    ]
},
{
    title: titlePost_6,
    text: textPost_6,
    links: [
		{ label: "API para hacer login y register", url: "/posts/post-2" }
    ]
}
];