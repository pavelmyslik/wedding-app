import Link from "next/link";

export default function LocationMap() {
  return (
  <section id="location" className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">Místo konání</h2>
        <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
        <p className="text-base text-[#222222] font-serif leading-relaxed mb-12">
          Naše svatba se uskuteční v kouzelném prostředí Statku Slatina,
          který se nachází v malebné vesničce Slatina nedaleko Hostouně v Plzeňském kraji.
        </p>
        <Link href="/location" className="px-6 py-2 bg-[#222222] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#D4B083] transition cursor-pointer">Trasa</Link>
      </div>
    </div>
  </section>
  );
}
