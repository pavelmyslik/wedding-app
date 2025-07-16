export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-img-2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center mt-32">
        <h1 className="text-6xl md:text-8xl font-serif tracking-wide mb-8">Lucie & Pavel</h1>
        <p className="text-3xl md:text-5xl font-light">13. září 2025</p>
      </div>
    </section>
  );
}
