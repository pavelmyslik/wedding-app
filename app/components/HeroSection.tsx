export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[190vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-img.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-4">Lucie & Pavel</h1>
        <p className="text-xl md:text-2xl font-light">13. září 2025</p>
      </div>
    </section>
  );
}
