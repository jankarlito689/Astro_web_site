//src/data/proyectos/types.ts
export interface ProjectBase{
    slug: string;
    title: string;
    summary?: string;
}

export interface ProjectLink{
    label: string;
    url: string;
}

export interface ProjectSection extends ProjectBase{
    links: ProjectLink[];
}

export interface ProjectDetail extends ProjectBase{
    description: string;
    objective: string;
    technologies: string[];
    learnings?: string[];
}