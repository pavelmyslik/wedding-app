export default function DressCode() {
  return (
    <section id="dresscode" className="py-20 px-6 bg-[#F7F5F2] text-[#222222] font-serif max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold text-[#D4B083] mb-6 text-center">Dress Code</h2>
      <div className="border-b border-[#D4B083]/30 mb-8 w-24 mx-auto rounded"></div>

      <p className="mb-6 leading-relaxed text-lg">
        Prosíme naše hosty, aby se při výběru oblečení řídili elegantním, ale pohodlným stylem, který ladí s atmosférou naší svatby.
      </p>

      <div className="space-y-8 text-[#444]">
        <div>
          <h3 className="text-2xl font-semibold text-[#D4B083] mb-2">Pro pány</h3>
          <p>
            Doporučujeme <strong>smart casual</strong> – například lehké košile, sako, chinos kalhoty nebo elegantní kalhoty. Kravata nebo motýlek jsou vítány, ale nejsou povinné. Vyhněte se příliš sportovnímu oblečení.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#D4B083] mb-2">Pro dámy</h3>
          <p>
            Vhodné jsou <strong>koktejlové šaty</strong>, elegantní sukně nebo kombinace halenky a kalhot. Preferujeme přírodní a jemné barvy, květinové vzory nebo decentní minimalistický styl. Vyhněte se příliš výrazným nebo sportovním outfitům.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#D4B083] mb-2">Obecné tipy</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Vyhněte se bílým a černým oděvům, které jsou tradičně vyhrazeny nevěstě a ženichovi.</li>
            <li>Volte pohodlnou obuv, protože svatba probíhá částečně venku.</li>
            <li>V případě nejasností nás neváhejte kontaktovat.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
