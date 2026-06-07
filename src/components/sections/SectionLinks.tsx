import "../../styles/components/sectionLinks.css";
import type { ProjectLink } from "../../interface/Projects";

interface SectionLinksProps {
    title: string;
    text?: string;
    links: ProjectLink[];
}

export default function SectionLinks({title,text,links,}: SectionLinksProps) {
    return (
        <section className="section-links">
            <h2>{title}</h2>

            {text && <p>{text}</p>}

            <ul>
                {links.map((link) => (
                    <li key={link.url}>
                        <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}