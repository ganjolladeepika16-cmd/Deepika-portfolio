const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C", icon: "⚙️" },
  { name: "HTML/CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "SQL", icon: "🗄️" },
  { name: "MySQL", icon: "💾" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="section-jp text-3xl md:text-4xl font-bold text-center mb-16"
          data-jp="写輪眼 — The Sharingan"
        >
          Technical <span className="text-gradient-red">Competencies</span>
        </h2>

        {/* Sharingan-inspired circular grid */}
        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center sharingan-glow">
              <span className="text-xs font-bold text-primary">Core</span>
            </div>

            {/* Orbiting skills */}
            {skills.map((skill, i) => {
              const angle = (i * 360) / skills.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 140;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div
                  key={skill.name}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card-red p-4 w-20 h-20 flex flex-col items-center justify-center gap-1 hover:sharingan-glow transition-all duration-300 cursor-default opacity-0 animate-fade-in-up"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animationDelay: `${i * 0.1 + 0.2}s`,
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-[10px] font-semibold text-foreground tracking-wide">
                    {skill.name}
                  </span>
                </div>
              );
            })}

            {/* Connecting circle */}
            <div className="absolute inset-0 rounded-full border border-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
