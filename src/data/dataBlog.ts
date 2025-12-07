//Informacion sobre page
export const pageTitle = "Blog del Dev";
export const pageTitleBlog = "Blog Dev";
export const descPage = "Post sobre mí como desarrollador, pasiones y cosas que me gustan";

//informacion post-1
const titlePost_1 = "Cómo uso Supabase en mis proyectos";
const textPost_1 = "En esta publicación explico cómo integro Supabase en mis proyectos como alternativa moderna a Firebase.";

//informacion post-2
const titlePost_2 = "Cómo uso IA en mis proyectos";
const textPost_2 = "Consejos y reflexiones sobre el uso de herramientas como ChatGPT y Claude para mejorar el desarrollo de software.";

//informacion post-3
const titlePost_3 = "Mi experiencia con c++";
const textPost_3 = "Reflexion de como he usada el lenguaje de programacion a lo largo de mi carrera como desarrollador.";

//Arry the sections
export const secciones = [
{
	title: titlePost_1,
	text: textPost_1,
	links: [
		{label: "Uso de Supabase", url:"/posts/post-1"}
	]
},
{
	title: titlePost_2,
	text: textPost_2,
	links: [
		{label: "Uso de la IA", url:"/posts/post-2"}
	]
},
{
	title: titlePost_3,
	text: textPost_3,
	links: [
		{label: "Mi experiencia con c++", url:"/posts/post-3"}
	]
}
];