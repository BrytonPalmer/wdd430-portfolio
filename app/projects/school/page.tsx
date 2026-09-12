// app/projects/school/page.tsx
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectsPage() {
  const projects = getProjects("school");

  return (
    <div>
      <h1 className="text-2xl font-bold">School Projects</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}