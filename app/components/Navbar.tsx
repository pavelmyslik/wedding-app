"use client"
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Úvod" },
  { id: "location", label: "Místo konání" },
  { id: "dresscode", label: "Dresscode" },
  { id: "accommodation", label: "Ubytování" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F7F5F2]/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-script text-[#D4B083] font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>
          Lucie & Pavel
        </div>

        <ul className="hidden md:flex space-x-8 font-serif text-[#222222]">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer py-1 border-b-2 ${
                activeId === id ? "border-[#D4B083] font-semibold" : "border-transparent"
              } hover:border-[#D4B083] transition-colors`}
            >
              {label}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[#D4B083] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-[#F7F5F2] font-serif text-[#222222] space-y-4 px-6 pb-6">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer py-2 border-b-2 ${
                activeId === id ? "border-[#D4B083] font-semibold" : "border-transparent"
              } hover:border-[#D4B083] transition-colors`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
