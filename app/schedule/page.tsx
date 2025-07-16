export default function Schedule() {
  const events = [
    { time: "12:00", title: "Příjezd hostů" },
    { time: "13:00", title: "Svatební obřad" },
    { time: "13:30", title: "Společné focení" },
    { time: "14:00", title: "Oběd" },
    { time: "15:30", title: "Krájení dortu" },
    { time: "18:00", title: "První tanec" },
    { time: "19:00", title: "Zábava a tanec" },
  ];

  return (
    <section className="bg-[#F7F5F2] py-20 px-4 text-[#222222] font-serif">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#D4B083] mb-2">Harmonogram dne</h2>
        <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-12 rounded" />

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#D4B083]/40" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between`}
              >
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'opacity-0'}`}>
                  {index % 2 === 0 && (
                    <>
                      <p className="text-[#D4B083] font-semibold text-lg">{event.time}</p>
                      <p className="text-base">{event.title}</p>
                    </>
                  )}
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#D4B083] rounded-full border-2 border-white shadow" />

                <div className={`w-1/2 px-4 ${index % 2 !== 0 ? 'text-left' : 'opacity-0'}`}>
                  {index % 2 !== 0 && (
                    <>
                      <p className="text-[#D4B083] font-semibold text-lg">{event.time}</p>
                      <p className="text-base">{event.title}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
