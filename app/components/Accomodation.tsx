export default function Accommodation() {
  const accommodations = [
    {
      id: 1,
      name: "Statek Slatina",
      address: "Slatina 1, 345 25 Hostouň u Horšovského Týna",
      phone: "+420 721 050 867",
      website: "https://www.instagram.com/statek_slatina/?hl=cs",
      description: "Chatičky po dvou osobách",
    },
    {
      id: 2,
      name: "Penzion Mutěnín",
      address: "Mutěnín 35, 345 25 Mutěnín",
      phone: "+420 604 252 323",
      website: "https://www.penzion-mutenin.cz",
      description: "Rodinný penzion ležící na úpatí Českého lesa",
    },
    {
      id: 3,
      name: "Penzion Pohoda",
      address: "Hora Svatého Václava 17 345 22 Poběžovice",
      phone: "+420 739 085 254",
      website: "https://www.penzion-mutenin.cz",
      description: "Rodinný penzion v prostředí krásné přírody",
    }
  ];

  return (
    <section id="accommodation" className="py-20 px-6 bg-[#F7F5F2]">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">Ubytování</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
          <p className="text-base text-[#222222] font-serif leading-relaxed">
            Pro vaše pohodlí jsme připravili výběr kvalitních ubytovacích zařízení v blízkosti místa konání.
          </p>
        </header>

        <div className="space-y-10">
          {accommodations.map((hotel) => (
            <article key={hotel.id} className="border-b border-[#D4B083]/20 pb-8 last:border-0">
              <h3 className="text-2xl font-semibold text-[#D4B083] mb-1">{hotel.name}</h3>
              <p className="text-[#222222] italic mb-3 text-sm">{hotel.description}</p>

              <p className="text-[#222222] font-serif text-sm mb-1">{hotel.address}</p>
              <a
                href={`tel:${hotel.phone}`}
                className="text-[#222222] font-serif text-sm hover:text-[#BFA16B] transition-colors block mb-3"
              >
                {hotel.phone}
              </a>

              <a
                href={hotel.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#D4B083] font-semibold border border-[#D4B083] rounded px-4 py-1 text-sm hover:bg-[#D4B083] hover:text-white transition-colors"
              >
                Více informací
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
