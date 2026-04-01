const certs = [
  { name: "Python Programming", issuer: "NPTEL" },
  { name: "Data Structures", issuer: "SRADEX" },
  { name: "Data Acquisition", issuer: "Future Skills Prime" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="section-jp text-3xl md:text-4xl font-bold text-center mb-16"
          data-jp="封印の巻物 — Sealing Scrolls"
        >
          <span className="text-gradient-red">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div
              key={cert.name}
              className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">巻</span>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
