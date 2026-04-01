import SharinganIcon from "./SharinganIcon";

const projects = [
  {
    title: "Real Estate Price Prediction",
    description:
      "A web application using Python, Flask, and Scikit-learn that delivers live AI-powered price predictions for real estate properties.",
    tech: ["Python", "Flask", "Scikit-learn", "HTML/CSS"],
  },
  {
    title: "Code Canvas",
    description:
      "Collaborative platform for coding challenges and rural empowerment prototypes, built with modern web technologies.",
    tech: ["JavaScript", "Collaboration", "Web Dev"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="section-jp text-3xl md:text-4xl font-bold text-center mb-16"
          data-jp="禁術 — Forbidden Jutsu"
        >
          Featured <span className="text-gradient-red">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group glass-card-red p-8 hover:scale-[1.02] transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
            >
              {/* Sharingan reveal on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <SharinganIcon className="w-full h-full animate-spin-slow" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
