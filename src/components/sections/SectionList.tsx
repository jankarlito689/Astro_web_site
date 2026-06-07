import "../../styles/components/sectionList.css";

interface SectionListProps {
    title: string;
    items: string[];
}

export default function SectionList({title,items,}: SectionListProps) {
    return (
        <section className="section-list">
            <h2>{title}</h2>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
}