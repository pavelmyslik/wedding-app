import Link from 'next/link'
export default function Accommodation() {

  return (
    <section id="accommodation" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">Ubytování</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
          <p className="text-base text-[#222222] font-serif leading-relaxed mb-12">
            Pro vaše pohodlí jsme připravili výběr kvalitních ubytovacích zařízení v blízkosti místa konání.
          </p>
          <Link href="/accommodation" className="px-6 py-2 bg-[#222222] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#D4B083] transition cursor-pointer">více informací</Link>
        </div>
      </div>
    </section>
  );
}
