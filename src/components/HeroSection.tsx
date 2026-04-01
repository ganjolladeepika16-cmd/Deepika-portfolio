import SharinganIcon from "./SharinganIcon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Red radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-primary pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <SharinganIcon className="w-20 h-20 animate-spin-slow" />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Ganjolla Deepika</span>
          <br />
          <span className="text-gradient-red text-2xl sm:text-3xl md:text-4xl font-semibold">
            Engineering the Future through the Eyes of Insight
          </span>
        </h1>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Computer Science Engineering student at MITS &amp; proud member of ISTE.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsla(0,100%,50%,0.3)] transition-all duration-300"
          >
            View My Genjutsu ✦
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-lg glass-card-red text-foreground font-semibold hover:border-primary/40 transition-all duration-300"
          >
            Download Scroll 巻
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
