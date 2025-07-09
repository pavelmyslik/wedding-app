import Accommodation from "@/app/components/Accomodation";
import LocationMap from "@/app/components/LocationMap";
import DressCode from "@/app/components/Dresscode";

export default function Home() {
  return (
    <main className="bg-champagne text-black font-serif">
      <section id="hero" className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4r">
        <h1 className="text-5xl font-script font-bold drop-shadow">Lucie & Pavel</h1>
        <p className="text-xl mt-4">13.09.2025</p>
      </section>

      <section id="info" className="py-16 px-6 bg-white text-black">
        <h2 className="text-3xl text-gold font-bold mb-4">Kdy a kde</h2>
        <p className="mb-2">Obřad: 6. září 2025 ve 14:00</p>
        <p className="mb-2">Místo: Zámek Hluboká nad Vltavou</p>
        <p>Hostina následuje po obřadu ve slavnostním sále</p>
      </section>

      <DressCode />
      <Accommodation />
      <LocationMap />
      <main className="bg-[#F7F5F2] text-[#222222] font-serif">
        {/* Hero sekce */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Brand Identity & Coaching</h1>
          <p className="text-xl text-[#D4B083]">Pro designéry a kreativce</p>
        </section>

        {/* Úvodní sekce */}
        <section className="flex flex-col md:flex-row items-center py-16 px-6 bg-white">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">HELLO, JSEM BONNIE</h2>
            <p className="text-lg mb-6">
              Osobní představení a krátký popis.
            </p>
            <button className="px-6 py-2 bg-[#222222] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#D4B083] transition">Zjistit více</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Prázdné místo pro fotku */}
            <div className="w-80 h-80 rounded-3xl bg-[#EAE7E2]"></div>
          </div>
        </section>

        {/* Služby */}
        <section className="py-16 bg-[#F7F5F2]">
          <div className="max-w-2xl mx-auto grid gap-8">
            <div className="border rounded-2xl p-8 shadow-sm bg-[#FAF8F5]">
              <h3 className="text-2xl font-bold mb-2">Branding & Konzultace</h3>
              <p>Popis služby.</p>
            </div>
            {/* Další bloky služeb */}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm bg-[#D4B083] text-[#222222]">
          &copy; 2025 Vaše jméno
        </footer>
      </main>


      <footer className="py-8 text-center text-sm text-black bg-gold">
        &copy; 2025 Lucie & Pavel
      </footer>
    </main>
  );
}
