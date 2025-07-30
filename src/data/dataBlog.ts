//Informacion sobre page
export const pageTitle = "Blog del Dev";
export const pageTitleBlog = "Blog Dev";
export const descPage = "Post sobre mí como desarrollador, pasiones y cosas que me gustan";

//informacion post-1
const titlePost_1 = "Cómo uso Supabase en mis proyectos";
const textPost_1 = "Explico un poco el uso de Supabase y cuento mi experiencia trabajando con él.";

//informacion post-2
const titlePost_2 = "Cómo uso IA en mis proyectos";
const textPost_2 = "Explico un poco el uso de la IA y cuento mi experiencia trabajando con élla.";

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
}
];