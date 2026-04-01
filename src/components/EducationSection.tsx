const timeline = [
  {
    period: "2024 – 2028",
    title: "B.Tech in Computer Science",
    institution: "Madanapalle Institute of Technology & Science",
    detail: "CGPA: 8.2",
  },
  {
    period: "2022 – 2024",
    title: "Intermediate",
    institution: "Narayana Junior College",
    detail: "90%",
  },
  {
    period: "2022",
    title: "Matriculation",
    institution: "AP Model School",
    detail: "85.16%",
  },
  {
    period: "Internship",
    title: "Web Development Intern",
    institution: "CodSoft",
    detail: "Built real-world web applications",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2
          className="section-jp text-3xl md:text-4xl font-bold text-center mb-16"
          data-jp="任務記録 — Mission Log"
        >
          Education &amp; <span className="text-gradient-red">Experience</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-12 opacity-0 animate-fade-in-up ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary sharingan-glow z-10" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-5">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                    <p className="text-sm text-primary/80 font-medium mt-2">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
