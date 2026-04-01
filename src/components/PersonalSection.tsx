const PersonalSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2
          className="section-jp text-3xl md:text-4xl font-bold text-center mb-16"
          data-jp="隠された才能 — Hidden Talents"
        >
          Beyond the <span className="text-gradient-red">Code</span>
        </h2>

        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Cooking", "Gardening", "Solving Puzzles"].map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["English", "Telugu", "Urdu"].map((lang) => (
                  <span
                    key={lang}
                    className="text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-xs text-muted-foreground">
          <p className="font-jp text-primary/40 text-lg mb-2">うちは</p>
          <p>© 2026 Ganjolla Deepika. Designed with the Will of Fire.</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
