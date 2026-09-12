// app/projects/opensource/page.tsx
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjectsPage() {
  const projects = getProjects("opensource");

  return (
    <div>
      <h1 className="text-2xl font-bold">Open Source Projects</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}