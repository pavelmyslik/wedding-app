export default function LocationMap() {
  return (
    <section id="location" className="py-20 px-6 text-[#222222] font-serif">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-3">Místo konání</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Naše svatba se uskuteční v kouzelném prostředí Statku Slatina,
            který se nachází v malebné vesničce Slatina nedaleko Hostouně v Plzeňském kraji.
          </p>
          <button className="px-6 py-2 mt-8 bg-[#222222] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#D4B083] transition cursor-pointer">Trasa</button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#D4B083] mb-3">Adresa</h3>
              <div className="text-base text-[#444] space-y-1">
                <p className="font-semibold text-[#222]">Statek Slatina</p>
                <p>Slatina 1</p>
                <p>345 25 Hostouň</p>
                <p>Plzeňský kraj</p>
              </div>
            </div>


            <div>
              <h3 className="text-2xl font-semibold text-[#D4B083] mb-3">Parkování</h3>
              <p className="text-base text-[#444]">
                Na místě je k dispozici dostatek parkovacích míst pro všechny hosty.
                Parkování je zdarma přímo u statku.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-md overflow-hidden border border-[#D4B083]/20">
              <iframe
                title="Mapa - Statek Slatina, Hostouň"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.7!2d12.9!3d49.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI0JzAwLjAiTiAxMsKwNTQnMDAuMCJF!5e0!3m2!1scs!2scz!4v1720374500000!5m2!1scs!2scz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 p-4 bg-[#FAF8F5] border border-[#D4B083]/10 rounded-md">
              <h4 className="text-lg font-semibold text-[#D4B083] mb-2">Tip pro navigaci</h4>
              <p className="text-[#444] text-base">
                Do GPS zadejte: <span className="font-semibold">Slatina 1, Hostouň</span><br />
                nebo použijte souřadnice pro přesnější navigaci.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
