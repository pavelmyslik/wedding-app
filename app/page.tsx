// pages/index.tsx
export default function Home() {
  return (
    <main className="bg-champagne text-black font-serif">
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center p-6  bg-cover bg-center">
        <h1 className="text-5xl font-script font-bold text-gold drop-shadow">Lucie & Pavel</h1>
        <p className="text-xl mt-4">13.09.2025</p>
      </section>

      <section id="info" className="py-16 px-6 bg-white text-black">
        <h2 className="text-3xl text-gold font-bold mb-4">Kdy a kde</h2>
        <p className="mb-2">Obřad: 6. září 2025 ve 14:00</p>
        <p className="mb-2">Místo: Zámek Hluboká nad Vltavou</p>
        <p>Hostina následuje po obřadu ve slavnostním sále</p>
      </section>

      <section id="qr" className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-2xl text-gold mb-4">Svatební informace online</h2>
        <p className="mb-4">Naskenujte QR kód a sledujte všechny podrobnosti</p>
        <img src="/" alt="QR kód na svatební web" className="mx-auto w-40 h-40" />
      </section>

      <footer className="py-8 text-center text-sm text-black bg-gold">
        &copy; 2025 Lucie & Pavel
      </footer>
    </main>
  );
}
