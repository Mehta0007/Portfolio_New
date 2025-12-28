export default function SkillsTable() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Skills</h2>

      {/* Main skills */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Frontend */}
        <SkillCard
          title="Front-End"
          items={[
            "HTML5",
            "CSS3",
            "TailwindCSS",
            "JavaScript",
            "ReactJS",
            "Next.js",
          ]}
        />

        {/* Backend */}
        <SkillCard
          title="Back-End"
          items={[
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "GraphQL",
            "PostgreSQL",
          ]}
        />

        {/* Tools */}
        <SkillCard
          title="Tools & Platforms"
          items={["Git", "GitHub", "CI/CD", "Clerk"]}
        />

        {/* Testing */}
        <SkillCard
          title="Testing"
          items={["Jest", "Postman"]}
        />
      </div>

      {/* Currently learning */}
      <div>
        <h3 className="text-lg font-medium mb-2">Currently Learning</h3>

        <div className="flex flex-wrap gap-2">
          {[
            "TypeScript",
            "Next.js App Router",
            "Backend Architecture",
            "GraphQL",
            "DevOps Basics",
            "System Design Basics",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 border rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ small reusable card ------------------ */

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border rounded-xl p-4 bg-[#f8f5f2] shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 border rounded-full text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
