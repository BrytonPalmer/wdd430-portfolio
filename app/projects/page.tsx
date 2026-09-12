// app/projects/page.tsx
export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  const projects = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">Projects Overview</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}