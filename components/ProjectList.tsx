import ProjectCard from './ProjectCard';

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    website: string;
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}
