
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-4 border-b pb-2 mb-4">
        <Link href="/projects">All Projects</Link>
        <Link href="/projects/settings">Settings</Link>
      </nav>
      {children}
    </div>
  );
}