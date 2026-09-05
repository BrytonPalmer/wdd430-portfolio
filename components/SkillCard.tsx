interface SkillCardProps {
    skill: string;
    level: string;
}

export default function SkillCard({ skill, level }: SkillCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="text-lg text-gray-800 font-semibold mb-2">{skill}</h3>
            <p className="text-gray-600">{level}</p>
        </div>
    );
}