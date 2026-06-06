import "../../styles/components/navigation.css"

export default function NavBar(){
    return(
        <nav className="nav-links" id="navMenu">
            <a href="/">Home</a>
            <a href="/about/">Sobre mí</a>
            <a href="/blog/">Blog</a>
            <a href="/proyectos/">Proyectos</a>
            <a href="/contacto/">Contacto</a>
        </nav>
    )
}