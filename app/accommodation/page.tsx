export default function Page() {
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
      name: "Penzion Mutěnín (6 km)",
      address: "Mutěnín 35, 345 25 Mutěnín",
      phone: "+420 604 252 323",
      website: "https://www.penzion-mutenin.cz",
      description: "Rodinný penzion ležící na úpatí Českého lesa",
    },
    {
      id: 3,
      name: "Penzion Pohoda (19 km)",
      address: "Hora Svatého Václava 17 345 22 Poběžovice",
      phone: "+420 739 085 254",
      website: "https://www.penzion-mutenin.cz",
      description: "Rodinný penzion v prostředí krásné přírody",
    }
  ];

  return (
    <section id="accommodation" className="py-20 px-6 bg-[#F7F5F2]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">Ubytování</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded" />
          <p className="text-base text-[#222222] font-serif leading-relaxed">
            Pro vaše pohodlí jsme připravili výběr ubytovacích možností v blízkosti místa konání svatby.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {accommodations.map((hotel) => (
            <article
              key={hotel.id}
              className="bg-white shadow-sm border border-[#D4B083]/20 rounded-lg p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#D4B083] mb-2">{hotel.name}</h3>
              <p className="text-sm italic text-[#444] mb-3">{hotel.description}</p>

              <p className="text-sm text-[#222222] mb-1">{hotel.address}</p>
              <a
                href={`tel:${hotel.phone}`}
                className="text-sm text-[#222222] hover:text-[#BFA16B] block mb-4"
              >
                {hotel.phone}
              </a>

              <a
                href={hotel.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-white bg-[#D4B083] hover:bg-[#c8a76f] px-4 py-1.5 rounded transition"
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