export default function RsvpForm() {
  return (
    <section className="bg-[#F7F5F2] py-20 px-4 text-[#222222] font-serif">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#D4B083] mb-2">Potvrzení účasti</h2>
        <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-8 rounded" />
        <p className="mb-10 text-base">Dejte nám prosím vědět, zda se zúčastníte</p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm text-[#D4B083] font-medium">Vaše jméno</label>
            <input
              type="text"
              name="name"
              className="w-full border border-[#D4B083]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4B083] bg-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#D4B083] font-medium">E-mail</label>
            <input
              type="email"
              name="email"
              className="w-full border border-[#D4B083]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4B083] bg-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#D4B083] font-medium">Zúčastníte se?</label>
            <select
              name="attendance"
              className="w-full border border-[#D4B083]/40 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4B083]"
              required
            >
              <option value="">-- Vyberte --</option>
              <option value="yes">Ano, s radostí přijdu</option>
              <option value="no">Bohužel se nezúčastním</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#D4B083] font-medium">Zpráva pro novomanžele</label>
            <textarea
              name="message"
              rows={4}
              className="w-full border border-[#D4B083]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4B083] bg-white"
              placeholder="Např. máme dietní omezení, vezmeme s sebou děti atd."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#D4B083] text-white px-6 py-2 rounded-md hover:bg-[#c8a76f] transition-colors"
            >
              Odeslat RSVP
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
