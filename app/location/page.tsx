export default function LocationPage() {
  return (
    <section id="location" className="py-20 px-6 text-[#222222] font-serif bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-3">Místo konání</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[#444]">
            Svatba se bude konat na statku Slatina, který je kousek od Hostouně v krásné a klidné přírodě západních Čech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white border border-[#D4B083]/20 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#D4B083] mb-2">Adresa</h3>
              <div className="text-base text-[#444] leading-relaxed space-y-1">
                <p><strong>Statek Slatina</strong></p>
                <p>Slatina 1</p>
                <p>345 25 Hostouň</p>
                <p>Plzeňský kraj</p>
              </div>
            </div>

            <div className="bg-white border border-[#D4B083]/20 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#D4B083] mb-2">Parkování</h3>
              <p className="text-base text-[#444] leading-relaxed">
                Parkovací místa jsou k dispozici přímo v areálu. Parkování je zdarma a dostatečně kapacitní pro všechny hosty.
              </p>
            </div>

            {/* Navigace */}
            <div className="bg-white border border-[#D4B083]/20 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#D4B083] mb-2">Navigace</h3>
              <p className="text-base text-[#444] leading-relaxed">
                Pro navigaci doporučujeme zadat adresu <strong>Slatina 1, Hostouň</strong> do mapové aplikace. Případně lze využít následující mapu s přesnou polohou statku.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#D4B083]/20 shadow-sm h-full">
            <iframe
              title="Mapa - Statek Slatina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10398.487110597944!2d12.76326848683325!3d49.545424756294324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470aa7d79c0ff1d5%3A0xd4a3d5d1af297101!2sStatek%20Slatina!5e0!3m2!1scs!2scz!4v1752522095027!5m2!1scs!2scz"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
