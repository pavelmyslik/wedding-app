import AccordionSection from "./subcomponents/Section";

export default function Schedule() {
  const events = [
    { time: "12:00", title: "Příjezd hostů" },
    { time: "13:00", title: "Svatební obřad" },
    { time: "13:45", title: "Společné focení" },
    { time: "14:15", title: "Oběd" },
    { time: "15:30", title: "Krájení dortu" },
    { time: "18:00", title: "První tanec" },
    { time: "19:00", title: "Zábava a tanec" },
  ];

  return (
    <AccordionSection title="Harmonogram" bgColor="#F7F5F2">
      <p className="text-center mb-12">
        Podívejte se na plánovaný harmonogram, ale asi to nebude přesně podle času – svatba má vždy své tempo.
      </p>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#D4B083]/40" />

        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between"
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
    </AccordionSection>
  );
}
