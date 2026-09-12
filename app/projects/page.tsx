// app/projects/page.tsx
import { getProjects } from "@/lib/projects-db";

export default async function ProjectsPage() {
  const projects = getProjects();

  return (
    <div>
      <h1 className="text-2xl font-bold">Projects Overview</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}