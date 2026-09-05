import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I am a student of software development, currently enrolled in this full stack course.
      </p>

      <h2 className="text-2xl font-semibold mb-2">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkillCard skill="JavaScript" level="Intermediate" />
        <SkillCard skill="React" level="Beginner" />
        <SkillCard skill="Tailwind CSS" level="Beginner" />
      </div>
    </main>
  );
}    