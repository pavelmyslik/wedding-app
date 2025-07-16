interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export default function Section({ title, children, className = "", bgColor }: SectionProps) {
  return (
    <section className={`py-20 px-6 border-t border-[#D4B083]/20 ${className}`} style={{ backgroundColor: bgColor }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center relative">
          <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">{title}</h2>
        </div>

        <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-4 rounded" />

        <div className="mt-6 space-y-6 text-[#222] text-base leading-relaxed text-center">
          {children}
        </div>
      </div>
    </section>
  );
}
