interface ProjectCardProps {

  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  website: string;
}

export default function ProjectCard({ id, title, description, technologies, link, website }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl text-gray-800 font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-2">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
            View Project
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline ml-4">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}