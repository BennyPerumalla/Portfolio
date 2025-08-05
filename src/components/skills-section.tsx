import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="default" 
              className="text-lg px-4 py-2 transition-all duration-300 hover:shadow-[0_0_15px_2px_hsl(var(--accent))] hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
