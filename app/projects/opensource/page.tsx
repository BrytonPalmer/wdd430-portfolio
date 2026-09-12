// app/projects/opensource/page.tsx
export default async function OpenSourceProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?type=opensource`);
  const projects = await res.json();

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