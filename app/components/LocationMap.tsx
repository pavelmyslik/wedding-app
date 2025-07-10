export default function LocationMap() {
  return (
    <section id="location" className="py-20 px-6 text-[#222222] font-serif">
      <div className="max-w-5xl mx-auto text-center mb-4">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-3">Místo konání</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Naše svatba se uskuteční v kouzelném prostředí Statku Slatina,
            který se nachází v malebné vesničce Slatina nedaleko Hostouně v Plzeňském kraji.
          </p>
        <button className="px-6 py-2 mt-12 bg-[#222222] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#D4B083] transition cursor-pointer">Trasa</button>
      </div>
    </section>
  );
}
