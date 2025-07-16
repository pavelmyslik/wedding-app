import Link from 'next/link'
export default function Schedule() {

  return (
    <section id="achedule" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">Harmonogram</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
          <p className="text-base text-[#222222] font-serif leading-relaxed mb-12">
            Podívejte se na plánovaný harmonogram, ale stejně to nebude podle času – svatba má vždy svoje tempo.
          </p>
          <Link href="/schedule" className="px-6 py-2 bg-[#222222] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#D4B083] transition cursor-pointer">zobrazit harmonogram</Link>
        </div>
      </div>
    </section>
  );
}
